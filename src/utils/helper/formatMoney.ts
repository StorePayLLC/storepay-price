export const formatMoney = (value: number | undefined, currency = '₮', fixed = 0, includeCurrency = true) => {
  if (typeof value === 'undefined') return '';
  const re = `\\d(?=(\\d{${3}})+(\\.\\d*[0-9])?$)`;
  let formattedValue = `${Number(value)
    .toFixed(fixed)
    .replace(new RegExp(re, 'g'), '$&,')
    .replace(/(\.\d*[1-9])0+$|\.0*$/, '$1')}`.trim();

  if (includeCurrency) {
    switch (currency) {
      case '$':
      case 'USD':
        formattedValue = `${currency} ${formattedValue}`;
        break;

      case 'Rp':
        formattedValue = `Rp ${currency}`;
        break;

      case 'MNT':
      case '₮':
        formattedValue = `${formattedValue}₮`;
        break;

      default:
        formattedValue = `${formattedValue} ${currency}`;
        break;
    }
  }

  return formattedValue;
};
