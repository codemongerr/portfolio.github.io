/**
 * Checks if provided value is an array.
 *
 * @param {mixed} val
 * @returns {boolean}
 */
export const isArray = val => Array.isArray(val);

/**
 *
 * @param {mixed} val
 * @returns {number}
 */
export const decimalToPercentage = val => {
  const num = parseFloat(val, 1);
  if (isNaN(num) || num < 0) {
    return 0;
  }
  if (num > 1) {
    return 100;
  }
  return num * 100;
};

/**
 * Converts camelcase string to kebabcase.
 *
 * @param {string} str
 * @returns {string}
 */
export const kebabize = str =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  );

/**
 * Converts camelcase string to css color var.
 *
 * @param {string} name
 * @returns {string}
 */
export const prepareColorVar = name => {
  if (!name || name === 'inherit') {
    return 'inherit';
  }
  return `var(--color-${kebabize(name)})`;
};
