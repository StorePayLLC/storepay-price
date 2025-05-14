/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthError } from './error';
import { JSOAuth2Options } from './JSOAuth2';
import { TokenType } from './OAuth2Token';
import { parseQs, qsStringify } from './url';

/**
 * Default headers for executing OAuth 2.0 flows.
 */
export const DEFAULT_HEADERS: Record<string, string> = {
  Accept: 'application/json, application/x-www-form-urlencoded',
  'Content-Type': 'application/x-www-form-urlencoded',
};

/**
 * Ensure a value is a string.
 *
 * @param  {string} str
 * @return {string}
 */
export function toString(str: string | null) {
  return str == null ? '' : String(str);
}

/**
 * Format error response types to regular strings for displaying to clients.
 *
 * Reference: http://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
export const ERROR_RESPONSES: Record<string, any> = {
  invalid_request: [
    'The request is missing a required parameter, includes an',
    'invalid parameter value, includes a parameter more than',
    'once, or is otherwise malformed.',
  ].join(' '),
  invalid_client: [
    'Client authentication failed (e.g., unknown client, no',
    'client authentication included, or unsupported',
    'authentication method).',
  ].join(' '),
  invalid_grant: [
    'The provided authorization grant (e.g., authorization',
    'code, resource owner credentials) or refresh token is',
    'invalid, expired, revoked, does not match the redirection',
    'URI used in the authorization request, or was issued to',
    'another client.',
  ].join(' '),
  unauthorized_client: ['The client is not authorized to request an authorization', 'code using this method.'].join(' '),
  unsupported_grant_type: ['The authorization grant type is not supported by the', 'authorization server.'].join(' '),
  access_denied: ['The resource owner or authorization server denied the request.'].join(' '),
  unsupported_response_type: [
    'The authorization server does not support obtaining',
    'an authorization code using this method.',
  ].join(' '),
  invalid_scope: ['The requested scope is invalid, unknown, or malformed.'].join(' '),
  server_error: [
    'The authorization server encountered an unexpected',
    'condition that prevented it from fulfilling the request.',
    '(This error code is needed because a 500 Internal Server',
    'Error HTTP status code cannot be returned to the client',
    'via an HTTP redirect.)',
  ].join(' '),
  temporarily_unavailable: [
    'The authorization server is currently unable to handle',
    'the request due to a temporary overloading or maintenance',
    'of the server.',
  ].join(' '),
};

/**
 * Check if properties exist on an object and throw when they aren't.
 *
 * @throws {TypeError} If an expected property is missing.
 */
export function expects(obj: Record<string, any>, fields: Array<string>) {
  fields.forEach((field) => {
    if (!obj[field]) throw new TypeError(`Expected "${field}" to exist`);
  });
}

/**
 * Pull an authentication error from the response data.
 *
 * @param  {Object} body
 * @return {string}
 */
export function getAuthError(body: Record<string, any>) {
  // const message = ERROR_RESPONSES[body.error] || body.error_description || body.error;
  const message = body.error_description || body.error;
  if (message) return new AuthError(message, body);
}

/**
 * Attempt to parse response body as JSON, fall back to parsing as a query string.
 *
 * @param {string} body
 * @return {Object}
 */
export function parseResponseBody(body: string): Record<string, any> {
  try {
    return JSON.parse(body);
  } catch (e) {
    return parseQs(body);
  }
}

/**
 * Sanitize the scopes option to be a string.
 *
 * @param  {Array}  scopes
 * @return {string}
 */
export function sanitizeScope(scopes?: Array<string> | string) {
  if (!scopes) return '';
  return Array.isArray(scopes) ? scopes.join(' ') : toString(scopes);
}

/**
 * Create a request uri based on an options object and token type.
 *
 * @param  {Object} options
 * @param  {string} tokenType
 * @return {string}
 */
export function createUri(options: JSOAuth2Options, tokenType: TokenType) {
  // Check the required parameters are set.
  expects(options, ['clientId', 'authorizationUri']);

  return `${options.authorizationUri}?${qsStringify(
    Object.assign(
      {
        client_id: options.clientId,
        redirect_uri: options.redirectUri,
        scope: sanitizeScope(options.scopes),
        response_type: tokenType,
        state: options.state,
      },
      options.query,
    ),
  )}`;
}

/**
 * Create basic auth header.
 *
 * @param  {string} username
 * @param  {string} password
 * @return {string}
 */
export function auth(username: string, password: string) {
  return `Basic ${btoa(`${toString(username)}:${toString(password)}`)}`;
}

/**
 * Merge request options from an options object.
 */

export interface RequestOptions {
  url: string;
  method: 'GET' | 'POST';
  body?: Record<string, any>;
  query?: Record<string, any>;
  headers: Record<string, any>;
}

export function requestOptions(requestOption: RequestOptions, options: any): RequestOptions {
  return {
    url: requestOption.url,
    method: requestOption.method,
    body: Object.assign({}, requestOption.body, options.body),
    query: Object.assign({}, requestOption.query, options.query),
    headers: Object.assign({}, requestOption.headers, options.headers),
  };
}
