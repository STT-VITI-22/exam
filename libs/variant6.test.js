import { toExponential, toPrecision, roundDigits, zeros, digits } from './variant6';

describe('Number Formatting Tests', () => {
  describe('Test to exponential', () => {
    test('formats a number without specifying precision', () => {
      expect(toExponential(1234)).toBe('1.234e+3');
    });

    test('formats NaN', () => {
      expect(toExponential(NaN)).toBe('NaN');
    });

    test('formats Infinity', () => {
      expect(toExponential(Infinity)).toBe('Infinity');
    });
  });

  describe('Test to precision', () => {
    test('formats a number with precision', () => {
      expect(toPrecision(12345, 3)).toBe('12300');
    });

    test('formats a small number', () => {
      expect(toPrecision(0.0034, 2)).toBe('0.0034');
    });

    test('formats a number in exponential notation by default', () => {
      expect(toPrecision(0.000001234, 2)).toBe('1.2e-6');
    });

    test('formats Infinity', () => {
      expect(toPrecision(Infinity)).toBe('Infinity');
    });
  });

  describe('Test to round digits', () => {
    test('rounds up the number of digits', () => {
      const splitNumber = { sign: '', coefficients: [1, 2, 3, 4, 5], exponent: 3 };
      const precision = 3;
      const expected = { sign: '', coefficients: [1, 2, 3], exponent: 3 };
      expect(roundDigits(splitNumber, precision)).toEqual(expected);
    });
  });

  describe('Test to zeros', () => {
    test('creates an array with three zeros', () => {
      expect(zeros(3)).toEqual([0, 0, 0]);
    });

    test('creates an empty array with length 0', () => {
      expect(zeros(0)).toEqual([]);
    });
  });

  describe('Test to digits', () => {
    test('counts the number of significant digits in a large number', () => {
      expect(digits(1234)).toBe(4);
    });

    test('counts the number of significant digits in a small number', () => {
      expect(digits(0.0034)).toBe(2);
    });
  });
});
