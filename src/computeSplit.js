import { roundDownByTwo, sum } from "./utils";

/**
 * return splitted amount using the given method
 * @param {number} amount amount of money to be split
 * @param {string} method method to split, equal or more_odd
 * @returns {Array.<number>} donation spread array
 */
export const computeSplit = (amount, method) => {
  let splitAmount, finalDayAmount;
  let splittedDonations = new Array(10);

  if (method === "equal") {
    splitAmount = roundDownByTwo(amount / 10);
    finalDayAmount = amount - splitAmount * 9;
    splittedDonations = splittedDonations.fill(splitAmount, 0, 9);
  } else if (method === "more_odd") {
    const oddAmount = (amount * (2 / 3)) / 5;
    const eventAmount = (amount * (1 / 3)) / 5;
    splittedDonations = splittedDonations
      .fill(1)
      .slice(0, 9)
      .map((_, idx) =>
        idx % 2 !== 0 ? roundDownByTwo(oddAmount) : roundDownByTwo(eventAmount)
      );
    finalDayAmount = amount - sum(splittedDonations);
  }

  splittedDonations[9] = +finalDayAmount.toFixed(2);
  return splittedDonations;
};
