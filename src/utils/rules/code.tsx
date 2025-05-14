import { Rule } from 'rc-field-form/lib/interface';

export const code: Rule = {
  pattern: /^[\w-]+$/,
  message: 'please use [0-9A-Za-z_-] characters without space',
};
