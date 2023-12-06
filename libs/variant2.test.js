import {
    isRange,
    isNull,
  } from './variant2';
  
  describe('Variant1 Functions', () => {
    test('isRange - returns true if the input is a range', () => {
      expect(isRange({ constructor: { prototype: { isRange: true } } })).toBe(true);
    });
  
    test('isRange - returns false if the input is not a range', () => {
      expect(isRange(null)).toBe(false);
    });
  
    test('isIndex - returns true if the input is an index', () => {
    });
  
    test('isIndex - returns false if the input is not an index', () => {
    });
  
  
    test('isNull - returns true if the input is null', () => {
      expect(isNull(null)).toBe(true);
    });
  
    test('isNull - returns false if the input is not null', () => {
      expect(isNull(undefined)).toBe(false);
    });
  });
  