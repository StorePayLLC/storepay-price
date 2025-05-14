import { Rule } from 'rc-field-form/lib/interface';
export const required: Rule = { required: true };
export const email: Rule = { type: 'email', message: 'invalid email' };
export const url: Rule = { type: 'url', message: 'Invalid url' };
