/**
 * return the given number rounded down to two decimal places
 * @param {number} amount amount to be rounded
 * @returns {number} rounded down number
 */
export const roundDownByTwo = (amount) => {
  return Math.floor(amount * 100) / 100;
};

/**
 * return the sum of the array of numbers
 * @param {Array.<number>} list array of numbers
 * @returns {number} sum of the numbers
 */
export const sum = (list) => {
  return list.reduce((acc, curr) => acc + curr);
};
