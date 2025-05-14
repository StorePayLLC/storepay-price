/**
 * Support resource owner password credentials OAuth 2.0 grant.
 *
 * Reference: http://tools.ietf.org/html/rfc6749#section-4.3
 *
 * @param {JSOAuth2} client
 */
import { i18n } from '@lingui/core';

import { JSOAuth2Options } from '../JSOAuth2';
import { auth, DEFAULT_HEADERS, expects, requestOptions, sanitizeScope } from '../utils';
import { BaseFlow } from './base-flow';

export class OwnerFlow extends BaseFlow {
  /**
   * Make a request on behalf of the user credentials to get an acces token.
   *
   * @param  {string}  username
   * @param  {string}  password
   * @param  {Object}  [opts]
   * @return {Promise}
   */
  getToken = (username: string, password: string, opts?: JSOAuth2Options) => {
    const options = Object.assign({}, this.client.options, opts);
    expects(options, ['accessTokenUri', 'clientId', 'clientSecret']);

    return this.client
      ._request(
        requestOptions(
          {
            url: options.accessTokenUri!,
            method: 'POST',
            headers: Object.assign({}, DEFAULT_HEADERS, {
              Authorization: auth(options.clientId!, options.clientSecret!),
              'Accept-Language': i18n.locale,
            }),
            body: {
              scope: sanitizeScope(options.scopes),
              username: username,
              password: password,
              grant_type: 'password',
            },
          },
          options,
        ),
      )
      .then(this.client.createToken);
  };
}
