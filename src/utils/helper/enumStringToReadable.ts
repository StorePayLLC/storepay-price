export const enumStringToReadable = ({ str }: { str: any }) => {
  if (str) {
    return str
      .split('_')
      .map((word: string | any[]) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }
  return '';

  // throw new Error('Invalid input provided.');
};
