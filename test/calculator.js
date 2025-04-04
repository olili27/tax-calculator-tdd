import { assert } from "chai";
import { describe, it } from "mocha";
import calculateTax from "../calculator.js";

describe("Tax Calculator", () => {
  describe("tax calculation with positive numbers", () => {
    it("calculateTax(1) should return 0", () => {
      assert.strictEqual(calculateTax(1), 0);
    });

    it("calculateTax(20000) should return 4000", () => {
      assert.strictEqual(calculateTax(20000), 4000);
    });

    it("calculateTax(40000) should return 16000", () => {
      assert.strictEqual(calculateTax(40000), 16000);
    });
  });
});
