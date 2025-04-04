/**
 * @param {number} amount - positive integer or float
 * @returns {number}
 */
export default function calculateTax(amount) {
  if (amount < 12000) {
    return 0;
  }

  if (amount > 36000) {
    return (40 * amount) / 100;
  }

  return (20 * amount) / 100;
}
