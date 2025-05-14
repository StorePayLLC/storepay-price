export const formatNumberWithSeparator = (
  number: number | string | undefined,
  separationLength: number = 3,
  separator: string,
) => (number ? number.toString().replace(new RegExp(`\\B(?=(\\d{${separationLength}})+(?!\\d))`, 'g'), separator) : '');
