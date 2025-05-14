import { JSOAuth2Options } from '../JSOAuth2';
import { auth, DEFAULT_HEADERS, expects, requestOptions, sanitizeScope } from '../utils';
import { BaseFlow } from './base-flow';

/**
 * Support JSON Web Token (JWT) Bearer Token OAuth 2.0 grant.
 *
 * Reference: https://tools.ietf.org/html/draft-ietf-oauth-jwt-bearer-12#section-2.1
 *
 * @param {JSOAuth2} client
 */

export class JwtBearerFlow extends BaseFlow {
  /**
   * Request an access token using a JWT token.
   *
   * @param  {string} token     A JWT token.
   * @param  {Object} [opts]
   * @return {Promise}
   */
  getToken = (token: string, opts?: JSOAuth2Options) => {
    const options = Object.assign({}, this.client.options, opts);
    const headers: Record<string, string> = Object.assign({}, DEFAULT_HEADERS);

    expects(options, ['accessTokenUri']);

    // Authentication of the client is optional, as described in
    // Section 3.2.1 of OAuth 2.0 [RFC6749]
    if (options.clientId && options.clientSecret) {
      headers['Authorization'] = auth(options.clientId, options.clientSecret);
    }

    return this.client
      ._request(
        requestOptions(
          {
            url: options.accessTokenUri!,
            method: 'POST',
            headers: headers,
            body: {
              scope: sanitizeScope(options.scopes),
              grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
              assertion: token,
            },
          },
          options,
        ),
      )
      .then(this.client.createToken);
  };
}
