const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  it("should return 0 for empty string", () => {
    expect(add("")).toBe(0);

    expect(add(" ")).toBe(0);
  });

  it("should return number for a single number string", () => {
    expect(add("1")).toBe(1);

    expect(add("123")).toBe(123);
  });
});
