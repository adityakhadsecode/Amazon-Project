import { formatCurrency } from "../../scripts/utils/money.js";

describe("test suite: formatCurrency", () => {
  it("converts cents to dollars", () => {
    expect(formatCurrency(2095)).toBe("20.95");
  });

  it("works with zero", () => {
    expect(formatCurrency(0)).toBe("0.00");
  });

  it("rounds up to nearest cents", () => {
    expect(formatCurrency(2000.5)).toBe("20.01");
  });
});
