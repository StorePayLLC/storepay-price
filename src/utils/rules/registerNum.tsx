import type { Rule } from 'rc-field-form/lib/interface';

const error = new Error('Регистрийн дугаар буруу байна');

export const registerNum: Rule = {
  validator(_, register) {
    if (!register || register.length !== 10) return Promise.reject(error);
    const value = register.toUpperCase();
    if (!/^[АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ]{2}\d{8}$/.test(value)) return Promise.reject(error);
    const dayInt = parseInt(value.substr(6, 2), 10);
    if (dayInt > 32) return Promise.reject(error);

    const letters = '_АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ';
    const multiplier = [0, 0, 5, 6, 7, 8, 9, 8, 7];

    let sum1 = 0;
    for (let i = 2; i < 9; i += 1) {
      sum1 += value[i] * multiplier[i];
    }

    let sum2 = 0;
    for (let i = 0; i < 2; i += 1) {
      const letterIndex = letters.indexOf(value[i]);
      const realIndex = `${letterIndex < 10 ? '0' : ''}${letterIndex}`;
      sum2 += (i * 2 + 1) * parseInt(realIndex[0]) + (i * 2 + 2) * parseInt(realIndex[1]);
    }

    let lastDigit = (sum1 % 11) + (sum2 % 11);
    if (lastDigit === 10) lastDigit = 1;
    if (lastDigit > 10) lastDigit -= 11;

    if (value[9] !== lastDigit.toString()) return Promise.reject(error);

    return Promise.resolve();
  },
};
