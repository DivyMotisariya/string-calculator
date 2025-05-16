const { default: expect } = require("expect");
const { it } = require("node:test");
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

  it("should return sum for two comma separated numbers", () => {
    expect(add("1,2")).toBe(3);

    expect(add("3, 7")).toBe(10);
  });

  it("should return sum for multiple comma separated numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);

    expect(add("3, 7,10,20")).toBe(40);
  });

  it("should return sum of numbers separted by a single new-line character", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should return sum of numbers separted by multiple new-line characters", () => {
    expect(add("1\n2\n3")).toBe(6);

    expect(add("1\n2\n3,4")).toBe(10);
  });

  it("should return sum of numbers separted by a custom-delimiter", () => {
    expect(add("//;\n2;4")).toBe(6);

    expect(add("//^\n5^10")).toBe(15);
  });

  it("should return sum of numbers separted by multiple custom-delimiters", () => {
    expect(add("//;\n2;4;6;8")).toBe(20);

    expect(add("//^\n5^10^10")).toBe(25);
  });

  it("should return sum of numbers separted by multiple custom-delimiters", () => {
    expect(add("1\n2\n3")).toBe(6);

    expect(add("1\n2\n3,4")).toBe(10);
  });

  it("should throw error for single negative number", () => {
    expect(() => add("-1")).toThrow("negative numbers not allowed: -1");
  });

  it("should throw error for multiple negative number", () => {
    expect(() => add("-1,2, 10")).toThrow("negative numbers not allowed: -1");

    expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");

    expect(() => add("1,-2,3,-4,5,-6")).toThrow(
      "negative numbers not allowed: -2, -4, -6"
    );
  });
});
