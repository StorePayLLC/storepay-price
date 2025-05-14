import type { Rule } from 'rc-field-form/lib/interface';

export const orgRegister: Rule = {
  validator(_, v) {
    const regex = /^\d+$/;
    if (!v) return Promise.reject(new Error('Байгууллагын регистр оруулна уу'));
    if (v.length === 7 && regex.test(v)) return Promise.resolve();
    return Promise.reject(new Error('Байгууллагын регистр буруу байна'));
  },
};
