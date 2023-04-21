let expect = chai.expect;

describe("Test suite for testing variant7.js", () => {
  describe("Test Tanh function", () => {
    it("should return the correct value for positive input", function () {
      const result = tanh(10);
      expect(tanh(10)).equal(result);
    });

    it("should return the correct value for negative input", function () {
      expect(tanh(-10)).equal(-0.9999999958776927);
    });

    it("should return 0 for input of 0", function () {
      expect(tanh(0)).equal(0);
    });

    it("should convert string to number if input parameters is string", () => {
      expect(tanh("103")).equal(1);
    });

    it("should get only 1st param", () => {
      expect(tanh(103, 2, 3, 4, 5)).equal(1);
    });
  });

  describe("Test Sinh function", () => {
    it("should return the correct value for positive input", function () {
      expect(sinh(10)).equal(11013.232874703393);
    });

    it("should return the correct value for negative input", function () {
      expect(sinh(-10)).equal(-11013.232874703393);
    });

    it("should return 0 for input of 0", function () {
      expect(sinh(0)).equal(0);
    });

    it("should convert string to number if input parameters is string", () => {
      expect(sinh("1")).equal(1.1752011936438014);
    });

    it("should get only 1st param", () => {
      expect(sinh(1, 2, 3, 4, 5)).equal(1.1752011936438014);
    });
  });

  describe("Test Cosh function", () => {
    it("should return the correct value for positive input", function () {
      expect(cosh(1)).equal(1.5430806348152437);
    });

    it("should return the possitive value for negative input", function () {
      expect(cosh(-1)).equal(1.5430806348152437);
    });

    it("should return 1 for input of 0", function () {
      expect(cosh(0)).equal(1);
    });

    it("should convert string to number if input parameters is string", () => {
      expect(cosh("1")).equal(1.5430806348152437);
    });

    it("should get only 1st param", () => {
      expect(cosh(1, 2, 3, 4, 5)).equal(1.5430806348152437);
    });
  });
});
