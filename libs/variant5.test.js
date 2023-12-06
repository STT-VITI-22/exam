const {
  isInteger,
  sign,
  log2,
  splitNumber,
  toFixed,
  nearlyEqual,
} = require("./variant5");

describe("isInteger", () => {
  it("should return true for integers", () => {
    expect(isInteger(5)).toBe(true);
    expect(isInteger(-3)).toBe(true);
  });

  test("should return false for non-integer numbers", () => {
    expect(isInteger(5.5)).toBe(false);
    expect(isInteger(-3.7)).toBe(false);
  });

  test("should return true for boolean values", () => {
    expect(isInteger(true)).toBe(true);
    expect(isInteger(false)).toBe(true);
  });
});

describe("sign", () => {
  test("should return 1 for positive numbers", () => {
    expect(sign(5)).toEqual(1);
    expect(sign(0.5)).toEqual(1);
  });

  test("should return -1 for negative numbers", () => {
    expect(sign(-8)).toEqual(-1);
    expect(sign(-0.75)).toEqual(-1);
  });

  test("should return 0 for zero", () => {
    expect(sign(0)).toEqual(0);
  });
});

describe("log2", () => {
  test("should calculate log2 for positive numbers", () => {
    expect(log2(2)).toEqual(1);
    expect(log2(8)).toEqual(3);
    expect(log2(0.5)).toEqual(-1);
  });

  test("should return NaN for negative numbers or zero", () => {
    expect(isNaN(log2(0))).toBe(false);
    expect(isNaN(log2(-5))).toBe(true);
  });

  test("should return NaN for non-numeric values", () => {
    expect(isNaN(log2("5"))).toBe(false);
    expect(isNaN(log2("abc"))).toBe(true);
    expect(isNaN(log2(null))).toBe(false);
    expect(isNaN(log2({}))).toBe(true);
  });
});

describe("splitNumber", () => {
  it("should split a positive integer", () => {
    const result = splitNumber(12345);

    expect(result).toEqual({
      sign: "",
      coefficients: [1, 2, 3, 4, 5],
      exponent: 4,
    });
  });
  it("should split a negative floating-point number in scientific notation", () => {
    const result = splitNumber(-1.23e-3);

    expect(result).toEqual({
      sign: "-",
      coefficients: [1, 2, 3],
      exponent: -3,
    });
  });
  it("should split a zero", () => {
    const result = splitNumber(0);

    expect(result).toEqual({
      sign: "",
      coefficients: [0],
      exponent: 0,
    });
  });
});

describe("toFixed function", () => {
  it("should return a string representation for NaN", () => {
    const result = toFixed(NaN, 2);

    expect(result).toEqual("NaN");
  });
});

describe("nearlyEqual func", () => {
  it("should return true for exactly equal numbers (epsilon not provided)", () => {
    const result = nearlyEqual(42, 42);

    expect(result).toEqual(true);
  });

  it("should return true for nearly equal numbers within the specified epsilon", () => {
    const result = nearlyEqual(1.0, 1.0001, 0.001);

    expect(result).toEqual(true);
  });
});
