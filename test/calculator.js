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

    it("calculateTax(40000) should return 16000", () => {
      assert.strictEqual(calculateTax(60000), 24000);
    });
  });

  describe("tax calculation with non-numeric values", () => {
    it("calculateTax('hello') should throw TypeError: Expect only positive numbers", () => {
      assert.throws(
        () => {
          calculateTax("hello");
        },
        TypeError,
        "Expect only positive numbers",
      );
    });
  });

  describe("tax calculation with 0 and negative values", () => {
    const msg = `Expect numbers with in 1 through ${Number.MAX_VALUE}`;

    it(`calculateTax(0) should throw RangeError: ${msg}`, () => {
      assert.throws(
        () => {
          calculateTax(0);
        },
        RangeError,
        msg,
      );
    });
  });
});
