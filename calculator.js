/**
 * @param {integer | float} amount
 * @param {integer | float} taxRate
 * @returns {integer | float}
 */
function calculate(amount, taxRate) {
  return Number(((amount * taxRate) / 100).toFixed(2));
}

/**
 * @param {integer |  float} amount - positive integer or float
 * @returns {int | float}
 */
export default function calculateTax(amount) {
  if (amount < 12000) {
    return calculate(amount, 0);
  }

  if (amount > 36000) {
    return calculate(amount, 40);
  }

  return calculate(amount, 20);
}
