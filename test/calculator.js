import { assert } from "chai";
import { describe, it } from "mocha";
import calculateTax from "../calculator.js";

describe("Tax Calculator", () => {
  describe("tax calculation with positive numbers", () => {
    it("calculateTax(1) should return 0", () => {
      assert.strictEqual(calculateTax(1), 0);
    });
  });
});
