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
});
