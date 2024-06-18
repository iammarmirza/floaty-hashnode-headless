export const getBlurDataUrl = (src: string) => {
  if (src.indexOf('?') === -1) {
    return `${src}?fm=blurhash`;
  }
  return `${src}&fm=blurhash`;
};
