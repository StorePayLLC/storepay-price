import { JSOAuth2Options } from '../JSOAuth2';
import { parseQs, parseUrl } from '../url';
import { auth, createUri, DEFAULT_HEADERS, expects, getAuthError, requestOptions } from '../utils';
import { BaseFlow } from './base-flow';

/**
 * Support authorization code OAuth 2.0 grant.
 *
 * Reference: http://tools.ietf.org/html/rfc6749#section-4.1
 *
 * @param {JSOAuth2} client
 */

export class CodeFLow extends BaseFlow {
  getUri = (opts?: JSOAuth2Options) => {
    const options = Object.assign({}, this.client.options, opts);

    return createUri(options, 'code');
  };

  getToken = async (uri: { pathname: string; query: string } | string, opts?: JSOAuth2Options) => {
    const options = Object.assign({}, this.client.options, opts);

    expects(options, ['clientId', 'accessTokenUri']);

    const url = typeof uri === 'object' ? uri : parseUrl(uri);

    if (
      typeof options.redirectUri === 'string' &&
      typeof url.pathname === 'string' &&
      url.pathname !== parseUrl(options.redirectUri).pathname
    ) {
      return Promise.reject(new TypeError(`Redirected path should match configured path, but got: ${url.pathname}`));
    }

    if (!url.query) {
      return Promise.reject(new TypeError(`Unable to process uri: ${uri}`));
    }

    const data = typeof url.query === 'string' ? parseQs(url.query) : url.query || {};
    const err = getAuthError(data);

    if (err) {
      return Promise.reject(err);
    }

    if (options.state != null && data.state !== options.state) {
      return Promise.reject(new TypeError(`Invalid state: ${data.state}`));
    }

    // Check whether the response code is set.
    if (!data.code) {
      return Promise.reject(new TypeError('Missing code, unable to request token'));
    }

    const headers = Object.assign({}, DEFAULT_HEADERS);
    const body: Record<string, string | undefined> = {
      code: data.code,
      grant_type: 'authorization_code',
      redirect_uri: options.redirectUri,
    };

    // `client_id`: REQUIRED, if the client is not authenticating with the
    // authorization server as described in Section 3.2.1.
    // Reference: https://tools.ietf.org/html/rfc6749#section-3.2.1
    if (options.clientSecret) {
      headers.Authorization = auth(options.clientId!, options.clientSecret);
    } else {
      body.client_id = options.clientId;
    }

    const data_1 = await this.client._request(
      requestOptions(
        {
          url: options.accessTokenUri!,
          method: 'POST',
          headers: headers,
          body: body,
        },
        options,
      ),
    );
    return this.client.createToken(data_1);
  };
}
