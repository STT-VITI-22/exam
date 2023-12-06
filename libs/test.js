import {
    isNumber,
    isBigNumber,
    isComplex,
    isFraction,
    isUnit,
    isString,
    isArray,
    isMatrix,
    isCollection,
    isDenseMatrix,
    isSparseMatrix
  } from './variant1';
  
  describe('isNumber', () => {
    test('should return true for numbers', () => {
      expect(isNumber(42)).toBe(true);
      expect(isNumber(3.14)).toBe(true);
      // Add more test cases as needed
    });
  
    test('should return false for non-numbers', () => {
      expect(isNumber('string')).toBe(false);
      expect(isNumber(null)).toBe(false);
      // Add more test cases as needed
    });
  });

  describe('isString', () => {
    test('should return true for valid strings', () => {
      // Valid string example
      const validString = 'Hello, World!';
      expect(isString(validString)).toBe(true);
    });
  
    test('should return false for invalid strings', () => {
      // Invalid string examples
      expect(isString(null)).toBe(false);
      expect(isString(42)).toBe(false);
      expect(isString({ key: 'value' })).toBe(false);
      expect(isString(['a', 'b', 'c'])).toBe(false);
    });
  });

  describe('isArray', () => {
    test('should return true for valid arrays', () => {
      // Valid array example
      const validArray = [1, 2, 3];
      expect(isArray(validArray)).toBe(true);
    });
  
    test('should return false for invalid arrays', () => {
      // Invalid array examples
      expect(isArray(null)).toBe(false);
      expect(isArray(42)).toBe(false);
      expect(isArray('string')).toBe(false);
      expect(isArray({ key: 'value' })).toBe(false);
    });
  });

  describe('isCollection', () => {
    test('should return true for valid collections', () => {
      // Valid array as a collection
      const validArray = [1, 2, 3];
      expect(isCollection(validArray)).toBe(true);
  
      // Valid matrix as a collection
      const validMatrix = {
        constructor: {
          prototype: {
            isMatrix: true,
          },
        },
      };
      expect(isCollection(validMatrix)).toBe(true);
    });
  
    test('should return false for invalid collections', () => {
      // Invalid collection examples
      expect(isCollection(null)).toBe(false);
      expect(isCollection(42)).toBe(false);
      expect(isCollection('string')).toBe(false);
      expect(isCollection({ key: 'value' })).toBe(false);
    });
  });

  describe('isDenseMatrix', () => {
    test('should return true for valid dense matrices', () => {
      // Valid dense matrix example
      const validDenseMatrix = {
        isDenseMatrix: true,
        constructor: {
          prototype: {
            isMatrix: true,
          },
        },
      };
      expect(isDenseMatrix(validDenseMatrix)).toBe(true);
    });
  
    test('should return false for invalid dense matrices', () => {
      // Invalid dense matrix examples
      expect(isDenseMatrix(null)).toBe(false);
      expect(isDenseMatrix(42)).toBe(false);
      expect(isDenseMatrix('string')).toBe(false);
      expect(isDenseMatrix({ key: 'value' })).toBe(false);
  
      // Object without isDenseMatrix property
      const objectWithoutIsDenseMatrix = {
        constructor: {
          prototype: {
            isMatrix: true,
          },
        },
      };
      expect(isDenseMatrix(objectWithoutIsDenseMatrix)).toBe(false);
    });
  });

  describe('isUnit', () => {
    test('should return true for valid units', () => {
      // Valid unit example
      const validUnit = {
        constructor: {
          prototype: {
            isUnit: true,
          },
        },
      };
      expect(isUnit(validUnit)).toBe(true);
    });
  
    test('should return false for invalid units', () => {
      // Invalid unit examples
      expect(isUnit(null)).toBe(false);
      expect(isUnit(42)).toBe(false);
      expect(isUnit('string')).toBe(false);
      expect(isUnit({ key: 'value' })).toBe(false);
  
      // Object without isUnit property
      const objectWithoutIsUnit = {
        constructor: {
          prototype: {
            isMatrix: true, // Assuming this is an invalid case
          },
        },
      };
      expect(isUnit(objectWithoutIsUnit)).toBe(false);
    });
  });



  