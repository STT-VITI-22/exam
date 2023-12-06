import { toEngineering,acosh,roundDigits } from './variant7';
import * as variant5 from './variant5';

describe('toEngineering', () => {
    test('returns the input as a string for NaN', () => {
      const result = toEngineering(NaN, 2);
      expect(result).toBe('NaN');
    });
  
    test('returns the input as a string for Infinity', () => {
      const result = toEngineering(Infinity, 2);
      expect(result).toBe('Infinity');
    });
  
  });

  describe('acosh', () => {
    test('calculates the hyperbolic arccos of a positive number', () => {
      const result = acosh(2);
      expect(result).toBeCloseTo(1.31696, 5); 
    });
  
    test('returns NaN for acosh of a number less than 1', () => {
      const result = acosh(0.5);
      expect(result).toBeNaN();
    });
  
  });
  
  describe('roundDigits', () => {
    test('rounds a number with precision 2', () => {
      const result = roundDigits(123.456, 2);
      expect(result).toEqual({
        exponent: 2,
        coefficients: [1,2,0, 0, 0,0],
        sign: '',
      });
    });
  
    test('rounds a number with precision 0', () => {
      const result = roundDigits(123.456, 0);
      expect(result).toEqual({
        exponent: 2,
        coefficients: [123456],
        sign: '',
      });
    });
  
  });