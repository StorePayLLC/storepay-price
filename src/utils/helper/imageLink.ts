export const imageLink: (image: string | undefined, size?: string) => string | undefined = (image, size = 'large') => {
  if (typeof image === 'string') {
    return image
      .split('?')[0]
      .replace(/\/(mini|product|list|thumb|small|medium)\//, `/${size}/`)
      .replace('https://cdnshoppy.s3.eu-central-1.amazonaws.com/', 'https://cdnp.cody.mn/');
  }
  return undefined;
};
