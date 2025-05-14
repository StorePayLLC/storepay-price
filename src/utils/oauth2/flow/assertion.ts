import { JSOAuth2Options } from '../JSOAuth2';
import { auth, DEFAULT_HEADERS, expects, requestOptions, sanitizeScope } from '../utils';
import { BaseFlow } from './base-flow';

/**
 * Support assertion credentials OAuth 2.0 grant.
 *
 * @param {JSOAuth2} client
 */

export class AssertionFLow extends BaseFlow {
  getToken = (assertion: string, provider: string, opts?: JSOAuth2Options) => {
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
            }),
            body: {
              scope: sanitizeScope(options.scopes),
              assertion: assertion,
              provider: provider,
              grant_type: 'assertion',
            },
          },
          options,
        ),
      )
      .then(this.client.createToken);
  };
}
