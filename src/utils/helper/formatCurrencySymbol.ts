export const formatCurrencySymbol = (region_currency: string | undefined): string => {
  if (typeof region_currency === undefined) return '';

  switch (region_currency) {
    case 'MNT':
      return '₮';
    case 'IDR':
      return 'Rp';
    case 'VND':
      return '₫';
    case 'USD':
      return '$';
    default:
      return '';
  }
};
