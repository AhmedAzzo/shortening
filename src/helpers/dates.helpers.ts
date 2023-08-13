/**
 * Retrieves the current timestamp in seconds.
 *
 * @returns {number} The current timestamp in seconds.
 *
 * @example
 * const timestamp = getCurrentTimestampInSeconds();
 * // timestamp could be, for example, 1668912345
 */
export const getCurrentTimestampInSeconds = (): number => {
  return Math.floor(new Date().getTime() / 1000);
};
