
import {
  isInteger,
  sign,
  log2,
  splitNumber,
  toFixed,
  DBL_EPSILON,
  nearlyEqual
} from "./variant5";

describe("variant5 utility functions", () => {
  describe("isInteger", () => {
    test("повертає true для цілих чисел", () => {
      expect(isInteger(0)).toBe(true);
      expect(isInteger(1)).toBe(true);
      expect(isInteger(-5)).toBe(true);
      expect(isInteger(100)).toBe(true);
    });

    test("повертає false для дробових чисел", () => {
      expect(isInteger(1.5)).toBe(false);
      expect(isInteger(3.14)).toBe(false);
      expect(isInteger(-2.7)).toBe(false);
    });

    test("повертає true для булевих значень", () => {
      expect(isInteger(true)).toBe(true);
      expect(isInteger(false)).toBe(true);
    });

    test("повертає false для NaN та Infinity", () => {
      expect(isInteger(NaN)).toBe(false);
      expect(isInteger(Infinity)).toBe(false);
      expect(isInteger(-Infinity)).toBe(false);
    });
  });

  describe("sign", () => {
    test("повертає 1 для додатних чисел", () => {
      expect(sign(5)).toBe(1);
      expect(sign(0.1)).toBe(1);
      expect(sign(100)).toBe(1);
    });

    test("повертає -1 для від'ємних чисел", () => {
      expect(sign(-5)).toBe(-1);
      expect(sign(-0.1)).toBe(-1);
      expect(sign(-100)).toBe(-1);
    });

    test("повертає 0 для нуля", () => {
      expect(sign(0)).toBe(0);
      // -0 повертає -0 у JavaScript, не 0
      expect(sign(-0)).toBe(-0);
    });
  });

  describe("log2", () => {
    test("обчислює логарифм за основою 2", () => {
      expect(log2(1)).toBe(0);
      expect(log2(2)).toBe(1);
      expect(log2(4)).toBe(2);
      expect(log2(8)).toBe(3);
      expect(log2(16)).toBe(4);
    });

    test("працює з дробовими числами", () => {
      expect(log2(0.5)).toBeCloseTo(-1);
      expect(log2(0.25)).toBeCloseTo(-2);
    });
  });

  

  describe("splitNumber", () => {
    test("розбиває додатне ціле число", () => {
      const result = splitNumber(123);
      expect(result.sign).toBe('');
      expect(result.coefficients).toEqual([1, 2, 3]);
      expect(result.exponent).toBe(2);
    });

    test("розбиває від'ємне число", () => {
      const result = splitNumber(-456);
      expect(result.sign).toBe('-');
      expect(result.coefficients).toEqual([4, 5, 6]);
      expect(result.exponent).toBe(2);
    });

    test("розбиває дробове число", () => {
      const result = splitNumber(12.34);
      expect(result.sign).toBe('');
      expect(result.coefficients).toEqual([1, 2, 3, 4]);
      expect(result.exponent).toBe(1);
    });

    test("розбиває число з експонентою", () => {
      const result = splitNumber('1.23e2');
      expect(result.sign).toBe('');
      expect(result.coefficients).toEqual([1, 2, 3]);
      expect(result.exponent).toBe(2);
    });

    test("розбиває число з від'ємною експонентою", () => {
      const result = splitNumber('1.23e-2');
      expect(result.sign).toBe('');
      expect(result.coefficients).toEqual([1, 2, 3]);
      expect(result.exponent).toBe(-2);
    });

    test("обробляє нуль", () => {
      const result = splitNumber(0);
      expect(result.sign).toBe('');
      expect(result.coefficients).toEqual([0]);
      expect(result.exponent).toBe(0);
    });

    test("видаляє початкові нулі", () => {
      const result = splitNumber(0.0123);
      expect(result.coefficients).toEqual([1, 2, 3]);
      expect(result.exponent).toBe(-2);
    });

    test("видаляє кінцеві нулі", () => {
      const result = splitNumber(1.230);
      expect(result.coefficients).toEqual([1, 2, 3]);
      expect(result.exponent).toBe(0);
    });

    test("викидає помилку для невалідного вводу", () => {
      expect(() => splitNumber('abc')).toThrow(SyntaxError);
      expect(() => splitNumber('12.34.56')).toThrow(SyntaxError);
      expect(() => splitNumber('12a34')).toThrow(SyntaxError);
    });
  });

  describe("toFixed", () => {
    test("форматує число без точності", () => {
      expect(toFixed(123)).toBe('123');
      expect(toFixed(123.456)).toBe('123.456');
    });

    test("повертає рядок для NaN та Infinity", () => {
      expect(toFixed(NaN)).toBe('NaN');
      expect(toFixed(Infinity)).toBe('Infinity');
      expect(toFixed(-Infinity)).toBe('-Infinity');
    });

    
  });

  describe("DBL_EPSILON", () => {
    test("є малим числом", () => {
      expect(DBL_EPSILON).toBeGreaterThan(0);
      expect(DBL_EPSILON).toBeLessThan(0.001);
    });

    test("є Number.EPSILON або еквівалентом", () => {
      expect(DBL_EPSILON).toBe(Number.EPSILON || 2.2204460492503130808472633361816E-16);
    });
  });

  describe("nearlyEqual", () => {
    test("повертає true для однакових чисел", () => {
      expect(nearlyEqual(5, 5)).toBe(true);
      expect(nearlyEqual(0, 0)).toBe(true);
      expect(nearlyEqual(-3.14, -3.14)).toBe(true);
    });

    test("повертає true для майже рівних чисел з epsilon", () => {
      expect(nearlyEqual(1.0, 1.0000001, 0.0001)).toBe(true);
      expect(nearlyEqual(100, 100.01, 0.001)).toBe(true);
    });

    test("повертає false для різних чисел з epsilon", () => {
      expect(nearlyEqual(1.0, 1.1, 0.01)).toBe(false);
      expect(nearlyEqual(100, 110, 0.01)).toBe(false);
    });

    test("без epsilon перевіряє точну рівність", () => {
      expect(nearlyEqual(1.0, 1.0)).toBe(true);
      expect(nearlyEqual(1.0, 1.0000001)).toBe(false);
    });

    test("обробляє числа близькі до нуля", () => {
  expect(nearlyEqual(0, DBL_EPSILON / 2, 1)).toBe(true);
  expect(nearlyEqual(0, DBL_EPSILON * 0.5, 1)).toBe(true);
  expect(nearlyEqual(0.0000001, 0.0000002, 1)).toBe(true);
});


    test("повертає false для NaN", () => {
      expect(nearlyEqual(NaN, NaN)).toBe(false);
      expect(nearlyEqual(NaN, 5)).toBe(false);
      expect(nearlyEqual(5, NaN)).toBe(false);
    });

    test("обробляє Infinity", () => {
      expect(nearlyEqual(Infinity, Infinity)).toBe(true);
      expect(nearlyEqual(-Infinity, -Infinity)).toBe(true);
      expect(nearlyEqual(Infinity, -Infinity)).toBe(false);
      expect(nearlyEqual(Infinity, 100)).toBe(false);
    });

    test("використовує відносну похибку для великих чисел", () => {
      expect(nearlyEqual(1000000, 1000001, 0.00001)).toBe(true);
      expect(nearlyEqual(1000000, 1001000, 0.00001)).toBe(false);
    });
  });
  describe("nearlyEqual edge cases", () => {
  test("epsilon = 0", () => {
    expect(nearlyEqual(1, 1, 0)).toBe(true);
    expect(nearlyEqual(1, 1.0001, 0)).toBe(false);
  });

  test("epsilon = null vs undefined", () => {
    expect(nearlyEqual(2, 2, null)).toBe(true);
    expect(nearlyEqual(2, 2, undefined)).toBe(true);
  });

  test("finite vs infinite", () => {
    expect(nearlyEqual(5, Infinity, 0.1)).toBe(false);
    expect(nearlyEqual(-Infinity, 5, 0.1)).toBe(false);
  });
});
describe("splitNumber extra cases", () => {
  test("обробляє -0", () => {
    const result = splitNumber(-0);
    expect(result.coefficients).toEqual([0]);
    expect(result.exponent).toBe(0);
  });

  test("обробляє рядок з нулями", () => {
    const result = splitNumber("000123");
    expect(result.coefficients).toEqual([1, 2, 3]);
    expect(result.exponent).toBe(2);
  });

});

});