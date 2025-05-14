export const userTokenField = 'user.t';

export const isDevEnv = () => process.env.NODE_ENV === 'development';

export const isStorepayId = () => {
  const { hostname } = window.location;
  return hostname.includes('storepay.id');
  // return hostname.includes(isDevEnv() ? 'localhost' : 'storepay.id');
};
