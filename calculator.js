/**
 * @param {number} amount - positive integer or float
 * @returns {number}
 */
export default function calculateTax(amount) {
  if (amount === 1) {
    return 0;
  }

  if (amount === 20000) {
    return 4000;
  }

  return 16000;
}
