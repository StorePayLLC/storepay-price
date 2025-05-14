import { TokenError } from './error';
// import { AssertionFLow, CodeFLow, CredentialsFlow, JwtBearerFlow, OwnerFlow, TokenFLow } from './flow';
import { OAuth2Token, TokenType } from './OAuth2Token';
import { qsStringify } from './url';
import { getAuthError, parseResponseBody, RequestOptions } from './utils';

export interface JSOAuth2Options {
  clientId?: string;
  clientSecret?: string;
  accessTokenUri?: string;
  authorizationUri?: string;
  redirectUri?: string;
  scopes?: string[];
  state?: string;
  body?: {
    [key: string]: string | string[];
  };
  query?: {
    [key: string]: string | string[];
  };
  headers?: {
    [key: string]: string | string[];
  };
}

export interface Request {
  (
    method: string,
    url: string,
    body: string,
    headers: { [key: string]: string | string[] },
  ): Promise<{ status: number; body: string }>;
}

export interface TokenData {
  token_type: TokenType;
  access_token: string;
  refresh_token: string;
  expires_in?: number;
  expires?: string | number | Date;
}

export class JSOAuth2 {
  // code: CodeFLow;
  // token: TokenFLow;
  // owner: OwnerFlow;
  // assertion: AssertionFLow;
  // credentials: CredentialsFlow;
  // jwt: JwtBearerFlow;
  options: JSOAuth2Options;

  constructor(options: JSOAuth2Options) {
    this.options = options;
    // this.code = new CodeFLow(this);
    // this.token = new TokenFLow(this);
    // this.owner = new OwnerFlow(this);
    // this.assertion = new AssertionFLow(this);
    // this.credentials = new CredentialsFlow(this);
    // this.jwt = new JwtBearerFlow(this);
  }

  /**
   * Create a new token from existing data.
   */
  createToken = (data: TokenData) => new JSOAuth2.Token(this, data);

  /**
   * Using the built-in request method, we'll automatically attempt to parse
   * the response.
   *
   * @param  {Object}  options
   * @return {Promise}
   */
  _request = (options: RequestOptions) => {
    let url = options.url;
    const requestBody = qsStringify(options.body);
    const query = qsStringify(options.query);

    if (query) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + query;
    }

    return this.request(options.method, url, requestBody, options.headers).then(function (res) {
      const body = parseResponseBody(res.body);
      const authErr = getAuthError(body);

      if (authErr) {
        return Promise.reject(authErr);
      }

      if (res.status < 200 || res.status >= 399) {
        return Promise.reject(new TokenError(res));
      }

      return body as TokenData;
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async request(method: string, url: string, requestBody: string, headers: Record<string, any>) {
    let res = await fetch(url, {
      body: requestBody,
      method: method,
      headers: headers,
    });
    let body = await res.text();
    return { body, status: res.status };
  }

  static Token = OAuth2Token;
}
