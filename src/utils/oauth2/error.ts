/* eslint-disable @typescript-eslint/no-explicit-any */
export class TokenError extends Error {
  status: number;
  body: string;
  code: string;

  constructor(res: Record<string, any>) {
    super(`HTTP status ${res.status}`);
    this.name = 'TokenError';
    this.status = res.status;
    this.body = res.body;
    this.code = 'ESTATUS';
  }
}

export class AuthError extends Error {
  body: any;
  code: string;

  constructor(message: string, body: any) {
    super(message);
    this.name = 'AuthError';
    this.body = body;
    this.code = 'EAUTH';
  }
}
