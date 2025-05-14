import { JSOAuth2Options, TokenData } from '../JSOAuth2';
import { auth, DEFAULT_HEADERS, expects, requestOptions, sanitizeScope } from '../utils';
import { BaseFlow } from './base-flow';

const isClientLoading: Record<string, boolean> = {};
const clientTokenSubscribers: Record<string, Array<(token: TokenData) => void>> = {};

function subscribeClientToken(authStr: string, callback: (token: TokenData) => void) {
  if (clientTokenSubscribers[authStr]) {
    clientTokenSubscribers[authStr].push(callback);
  } else {
    clientTokenSubscribers[authStr] = [callback];
  }
}

function onClientToken(authStr: string, token: TokenData) {
  clientTokenSubscribers[authStr].map((cb) => cb(token));
}

/**
 * Support client credentials OAuth 2.0 grant.
 *
 * Reference: http://tools.ietf.org/html/rfc6749#section-4.4
 *
 * @param {JSOAuth2} client
 */
export class CredentialsFlow extends BaseFlow {
  /**
   * Request an access token using the client credentials.
   *
   * @param  {Object}  [opts]
   * @return {Promise}
   */
  getToken = (opts?: JSOAuth2Options) => {
    const options = Object.assign({}, this.client.options, opts);

    expects(options, ['clientId', 'clientSecret', 'accessTokenUri']);

    const authorization = auth(options.clientId!, options.clientSecret!);

    if (!isClientLoading[authorization]) {
      isClientLoading[authorization] = true;
      this.client
        ._request(
          requestOptions(
            {
              url: options.accessTokenUri!,
              method: 'POST',
              headers: Object.assign({}, DEFAULT_HEADERS, { Authorization: authorization }),
              body: { scope: sanitizeScope(options.scopes), grant_type: 'client_credentials' },
            },
            options,
          ),
        )
        .then(function (data) {
          onClientToken(authorization, data);
          isClientLoading[authorization] = false;
          clientTokenSubscribers[authorization] = [];
        });
    }

    return new Promise<TokenData>((resolve) => {
      subscribeClientToken(authorization, (a) => resolve(a));
    }).then(this.client.createToken);
  };
}
