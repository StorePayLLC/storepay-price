/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSOAuth2, JSOAuth2Options, TokenData } from './JSOAuth2';
import { DEFAULT_HEADERS, expects, requestOptions } from './utils';

const isRefreshing: Record<string, boolean> = {};
const refreshSubscribers: Record<string, Array<(token: any) => void>> = {};

function subscribeTokenRefresh(refreshToken: string, callback: (tokenData: TokenData) => void) {
  if (refreshSubscribers[refreshToken]) {
    refreshSubscribers[refreshToken].push(callback);
  } else {
    refreshSubscribers[refreshToken] = [callback];
  }
}

function onRefreshed(refreshToken: string, token?: TokenData) {
  refreshSubscribers[refreshToken].map((cb) => cb(token));
}

export type TokenType = 'bearer' | string | undefined;

export class OAuth2Token {
  expires!: Date;
  client: JSOAuth2;
  accessToken: string;
  refreshToken: string;
  tokenType: TokenType;
  data: TokenData;

  constructor(client: JSOAuth2, data: TokenData) {
    this.client = client;
    this.data = data;
    if (data.token_type) {
      this.tokenType = data.token_type.toLowerCase();
    }

    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;

    if (data.expires_in) this.expiresIn(Number(data.expires_in - 5));
    else if (data.expires) this.expiresAt(data.expires);
    else throw new TypeError('Expiration unknown');
  }

  expiresAt = (duration: number | Date | string) => {
    this.expires = new Date(duration);
  };

  expiresIn = (duration: number | Date | any) => {
    if (typeof duration === 'number') {
      this.expires = new Date();
      this.expires.setSeconds(this.expires.getSeconds() + duration);
    } else if (duration instanceof Date) {
      this.expires = new Date(duration.getTime());
    } else {
      throw new TypeError(`Unknown duration: ${duration}`);
    }

    return this.expires;
  };

  sign = (requestObject: any) => {
    if (!this.accessToken) {
      throw new Error('Unable to sign without access token');
    }

    requestObject.headers = requestObject.headers || {};

    if (this.tokenType === 'bearer') {
      requestObject.headers.Authorization = `Bearer ${this.accessToken}`;
    } else {
      const parts = requestObject.url.split('#');
      const token = `access_token=${this.accessToken}`;
      const url = parts[0].replace(/[&?]access_token=[^#&]/, '');
      const fragment = parts[1] ? `#${parts[1]}` : '';

      // Prepend the correct query string parameter to the url.
      requestObject.url = url + (url.indexOf('?') > -1 ? '&' : '?') + token + fragment;

      // Attempt to avoid storing the url in proxies, since the access token
      // is exposed in the query parameters.
      requestObject.headers.Pragma = 'no-store';
      requestObject.headers['Cache-Control'] = 'no-store';
    }

    return requestObject;
  };

  /**
   * Refresh a user access token with the supplied token.
   *
   * @param  {Object}  opts
   * @return {Promise}
   */

  refresh = (opts?: JSOAuth2Options) => {
    const options = Object.assign({}, this.client.options, opts);
    expects(options, ['accessTokenUri']);
    const refreshRoken = this.refreshToken;
    if (!refreshRoken) {
      return Promise.reject(new Error('No refresh token'));
    }
    if (!isRefreshing[refreshRoken]) {
      isRefreshing[refreshRoken] = true;
      this.client
        ._request(
          requestOptions(
            {
              url: options.accessTokenUri!,
              method: 'POST',
              headers: Object.assign({}, DEFAULT_HEADERS),
              body: {
                refresh_token: refreshRoken,
                client_id: options.clientId,
                client_secret: options.clientSecret,
                grant_type: 'refresh_token',
              },
            },
            options,
          ),
        )
        .then((data) => {
          onRefreshed(refreshRoken, data);
          isRefreshing[refreshRoken] = false;
          refreshSubscribers[refreshRoken] = [];
        })
        .catch(() => {
          onRefreshed(refreshRoken, undefined);
        });
    }
    return new Promise((resolve, reject) => {
      subscribeTokenRefresh(refreshRoken, (a) => {
        if (a) resolve(a);
        else reject('invalid refresh token');
      });
    }).then((data) => this.client.createToken(Object.assign({}, this.data, data)));
  };

  expired = () => Date.now() > this.expires.getTime();
}
