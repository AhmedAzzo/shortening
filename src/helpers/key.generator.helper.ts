/**
 * Generates a unique key based on a given number, using a base 62 algorithm.
 *
 * @param {number} number - The input number used to generate the key.
 * @returns {Promise<string>} A promise that resolves to the generated key.
 *
 * @example
 * const number = 123456;
 * const key = await keyGenerator(number);
 * // key could be '1Nv'
 */
export const keyGenerator = async (number) => {
  const codes =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const result = [];
  while (number >= 62) {
    result.push(codes[number % 62]);
    number = Math.floor(number / 62);
  }
  result.push(codes[number]);
  return result.reverse().join('');
};
