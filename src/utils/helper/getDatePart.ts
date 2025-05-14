export const getDatePart = (dateString: string, options?: { separator?: string }) => {
  if (!dateString) return undefined;
  const d = new Date(dateString);
  return `${d.getFullYear()}${options?.separator || '/'}${`0${d.getMonth() + 1}`.slice(-2)}${
    options?.separator || '/'
  }${`0${d.getDate()}`.slice(-2)}`;
};
