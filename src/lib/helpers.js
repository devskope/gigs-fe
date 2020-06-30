export const validator = {
  notEmpty: (string) => string !== '',
  minLength: (data, length) => data.length >= length,
};
