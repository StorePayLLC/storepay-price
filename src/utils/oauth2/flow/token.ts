import { JSOAuth2Options } from '../JSOAuth2';
import { parseQs, parseUrl } from '../url';
import { createUri, getAuthError } from '../utils';
import { BaseFlow } from './base-flow';

/**
 * Support implicit OAuth 2.0 grant.
 *
 * Reference: http://tools.ietf.org/html/rfc6749#section-4.2
 *
 * @param {JSOAuth2} client
 */
export class TokenFLow extends BaseFlow {
  getUri = (opts?: JSOAuth2Options) => {
    const options = Object.assign({}, this.client.options, opts);

    return createUri(options, 'token');
  };

  getToken = (uri: string | { pathname: string; query: string; hash: string }, opts?: JSOAuth2Options) => {
    const options = Object.assign({}, this.client.options, opts);
    const url = typeof uri === 'object' ? uri : parseUrl(uri);

    if (options.redirectUri) {
      const expectedUrl = parseUrl(options.redirectUri);
      if (typeof url.pathname === 'string' && url.pathname !== expectedUrl.pathname) {
        return Promise.reject(new TypeError(`Redirected path should match configured path, but got: ${url.pathname}`));
      }
    }

    // If no query string or fragment exists, we won't be able to parse
    // any useful information from the uri.
    if (!url.hash && !url.query) {
      return Promise.reject(new TypeError(`Unable to process uri: ${uri}`));
    }

    // Extract data from both the fragment and query string. The fragment is most
    // important, but the query string is also used because some OAuth 2.0
    // implementations (Instagram) have a bug where state is passed via query.
    const data = Object.assign(
      {},
      typeof url.query === 'string' ? parseQs(url.query) : url.query || {},
      typeof url.hash === 'string' ? parseQs(url.hash.substr(1)) : url.hash || {},
    );

    const err = getAuthError(data);

    // Check if the query string was populated with a known error.
    if (err) {
      return Promise.reject(err);
    }

    // Check whether the state matches.
    if (options.state != null && data.state !== options.state) {
      return Promise.reject(new TypeError(`Invalid state: ${data.state}`));
    }

    // Initalize a new token and return.
    return Promise.resolve(this.client.createToken(data));
  };
}
