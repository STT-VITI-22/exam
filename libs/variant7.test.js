import { jest } from '@jest/globals';

jest.unstable_mockModule('./variant5.js', () => ({
  splitNumber: jest.fn(),
}));

global.isNumber = (val) => typeof val === 'number';

global.roundDigits = (split, precision) => {
  const coeffs = [...split.coefficients];
  if (typeof precision === 'number' && coeffs.length > precision) {
      coeffs.length = precision; 
  }
  return {
    sign: split.sign,
    coefficients: coeffs,
    exponent: split.exponent
  };
};

const lib = await import('./variant7.js');
const v5 = await import('./variant5.js');

describe('variant7.js tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('toEngineering', () => {
    test('should return string for NaN/Infinity', () => {
      expect(lib.toEngineering(NaN)).toBe('NaN');
      expect(lib.toEngineering(Infinity)).toBe('Infinity');
    });

    test('should format standard number (exponent multiple of 3)', () => {
      v5.splitNumber.mockReturnValue({
        sign: '',
        coefficients: [1, 2, 3],
        exponent: 6
      });
      expect(lib.toEngineering(1230000)).toBe('1.23e+6');
    });

    test('should shift decimal for exponent not multiple of 3 (e.g. 4)', () => {
      v5.splitNumber.mockReturnValue({
        sign: '',
        coefficients: [1, 2, 3, 4, 5],
        exponent: 4
      });
      expect(lib.toEngineering(12345)).toBe('12.345e+3');
    });

    test('should shift decimal for exponent not multiple of 3 (e.g. 5)', () => {
      v5.splitNumber.mockReturnValue({
        sign: '',
        coefficients: [1, 2, 3, 4, 5, 6],
        exponent: 5
      });
      expect(lib.toEngineering(123456)).toBe('123.456e+3');
    });

    test('should handle negative numbers and exponents', () => {
      v5.splitNumber.mockReturnValue({
        sign: '-',
        coefficients: [1, 2],
        exponent: -3
      });
      expect(lib.toEngineering(-0.0012)).toBe('-1.2e-3');
    });

    test('should handle negative exponents requiring shift', () => {
       v5.splitNumber.mockReturnValue({
        sign: '',
        coefficients: [1],
        exponent: -4
      });
      expect(lib.toEngineering(0.0001)).toBe('100e-6');
    });

    test('should add zeros when precision is specified', () => {
      v5.splitNumber.mockReturnValue({
        sign: '',
        coefficients: [1], 
        exponent: 6
      });
      expect(lib.toEngineering(1e6, 3)).toBe('1.00e+6');
    });

    test('should handle formatting without decimal part if precision unset and trailing zeros', () => {
       v5.splitNumber.mockReturnValue({
         sign: '',
         coefficients: [1, 0, 0], 
         exponent: 6
       });
       expect(lib.toEngineering(1e6)).toBe('1e+6');
    });
  });
  
  describe('Hyperbolic functions', () => {
    test('acosh', () => {
      expect(lib.acosh(1)).toBe(0);
      expect(lib.acosh(2)).toBeCloseTo(1.3169);
    });

    test('asinh', () => {
      expect(lib.asinh(0)).toBe(0);
      expect(lib.asinh(1)).toBeCloseTo(0.8813);
    });

    test('atanh', () => {
      expect(lib.atanh(0)).toBe(0);
      expect(lib.atanh(0.5)).toBeCloseTo(0.5493);
    });

    test('cosh', () => {
      expect(lib.cosh(0)).toBe(1);
    });

    test('sinh', () => {
      expect(lib.sinh(0)).toBe(0);
    });

    test('tanh', () => {
      expect(lib.tanh(0)).toBe(0);
      expect(lib.tanh(Infinity)).toBe(1);
    });
  });

  describe('copysign', () => {
    test('should take sign from positive y', () => {
      expect(lib.copysign(5, 10)).toBe(5);
      expect(lib.copysign(-5, 10)).toBe(5);
    });

    test('should take sign from negative y', () => {
      expect(lib.copysign(5, -10)).toBe(-5);
      expect(lib.copysign(-5, -10)).toBe(-5);
    });

    test('should handle zero signs', () => {
      expect(lib.copysign(1, -0)).toBe(-1);
      expect(lib.copysign(1, +0)).toBe(1);
    });
    
    test('should handle special cases', () => {
        expect(lib.copysign(-5, 5)).toBe(5);
        expect(lib.copysign(5, -5)).toBe(-5);
    });
  });

});