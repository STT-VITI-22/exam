import { isNumber,
  isComplex,
  isBigNumber,
  isFraction,
  isUnit,
  isString,
  isArray,
  isMatrix,
  isCollection,
  isDenseMatrix,
  isSparseMatrix } from '../libs/variant1';

describe('isNumber function', () => {
    it('should return true for numbers', () => {
      expect(isNumber(1)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-1.14)).toBe(true);
    });
  
    it('should return false for not numbers', () => {
      expect(isNumber('1')).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber({})).toBe(false);
    });
  });

  describe('isComplex function', () => {
    it('should return true for complex objects', () => {
      const complexObject = { isComplex: true };
    });
  
    it('should return false for not complex objects', () => {
      expect(isComplex(27)).toBe(false);
      expect(isComplex('complex')).toBe(false);
      expect(isComplex(true)).toBe(false);
      expect(isComplex(null)).toBe(false);
      expect(isComplex(undefined)).toBe(false);
      expect(isComplex({})).toBe(false);
    });
  
    it('should return false for objects without isComplex property', () => {
      const nonComplexObject = { prop: 'value' };
      expect(isComplex(nonComplexObject)).toBe(false);
    });
  });

  describe('isFraction function', () => {
    it('should return true for fractions', () => {
      const fractionObject = { isFraction: true };
    });
  
    it('should return false for not fraction objects', () => {
      const nonFractionObject = { prop: 'value' };
      expect(isFraction(nonFractionObject)).toBe(false);
    });
  
    it('should return false for not objects', () => {
      expect(isFraction(23)).toBe(false);
      expect(isFraction('fraction')).toBe(false);
      expect(isFraction(true)).toBe(false);
      expect(isFraction(null)).toBe(false);
      expect(isFraction(undefined)).toBe(false);
      expect(isFraction([])).toBe(false);
    });
  });
  
  describe('isUnit function', () => {
    it('should return true for units', () => {
      const unitObject = {};
      unitObject.constructor = { prototype: { isUnit: true } };
      expect(isUnit(unitObject)).toBe(true);
    });
  
    it('should return false for not unit objects', () => {
      const nonUnitObject = { prop: 'value' };
      expect(isUnit(nonUnitObject)).toBe(false);
    });
  
    it('should return false for not objects', () => {
      expect(isUnit(24)).toBe(false);
      expect(isUnit('unit')).toBe(false);
      expect(isUnit(true)).toBe(false);
      expect(isUnit(null)).toBe(false);
      expect(isUnit(undefined)).toBe(false);
      expect(isUnit([])).toBe(false);
    });
  });
  
  describe('isString function', () => {
    it('should return true for strings', () => {
      expect(isString('test')).toBe(true);
      expect(isString('')).toBe(true);
    });
  
    it('should return false for not strings', () => {
      expect(isString(25)).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString([])).toBe(false);
    });
  });
  
  describe('isArray function', () => {
    it('should return true for arrays', () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2, 3])).toBe(true);
    });
  
    it('should return false for not arrays', () => {
      expect(isArray(22)).toBe(false);
      expect(isArray(true)).toBe(false);
      expect(isArray(null)).toBe(false);
      expect(isArray(undefined)).toBe(false);
      expect(isArray('test')).toBe(false);
    });
  });
  
  describe('isMatrix function', () => {
    it('should return true for matrices', () => {
      const matrixObject = {};
      matrixObject.constructor = { prototype: { isMatrix: true } };
      expect(isMatrix(matrixObject)).toBe(true);
    });
  
    it('should return false for not matrix objects', () => {
      const nonMatrixObject = { prop: 'value' };
      expect(isMatrix(nonMatrixObject)).toBe(false);
    });
  
    it('should return false for not objects', () => {
      expect(isMatrix(23)).toBe(false);
      expect(isMatrix('matrix')).toBe(false);
      expect(isMatrix(true)).toBe(false);
      expect(isMatrix(null)).toBe(false);
      expect(isMatrix(undefined)).toBe(false);
      expect(isMatrix([])).toBe(false);
    });
  });

  describe('isCollection function', () => {
    it('should return true for arrays', () => {
      expect(isCollection([])).toBe(true);
      expect(isCollection([1, 2, 3])).toBe(true);
    });
  
    it('should return true for matrices', () => {
      const matrixObject = {};
      matrixObject.constructor = { prototype: { isMatrix: true } };
      expect(isCollection(matrixObject)).toBe(true);
    });
  
    it('should return false for not collection objects', () => {
      const nonCollectionObject = { prop: 'value' };
      expect(isCollection(nonCollectionObject)).toBe(false);
    });
  
    it('should return false for not objects', () => {
      expect(isCollection(25)).toBe(false);
      expect(isCollection('collection')).toBe(false);
      expect(isCollection(true)).toBe(false);
      expect(isCollection(null)).toBe(false);
      expect(isCollection(undefined)).toBe(false);
    });
  });
  
  describe('isDenseMatrix function', () => {
    it('should return true for dense matrices', () => {
      const denseMatrixObject = { isDenseMatrix: true };
    });
  
    it('should return false for not dense matrices', () => {
      const nonDenseMatrixObject = { isSparseMatrix: true };
      expect(isDenseMatrix(nonDenseMatrixObject)).toBe(false);
    });
  
    it('should return false for not matrix objects', () => {
      const nonMatrixObject = { prop: 'value' };
      expect(isDenseMatrix(nonMatrixObject)).toBe(false);
    });
  
    it('should return false for not objects', () => {
      expect(isDenseMatrix(27)).toBe(false);
      expect(isDenseMatrix('denseMatrix')).toBe(false);
      expect(isDenseMatrix(true)).toBe(false);
      expect(isDenseMatrix(null)).toBe(false);
      expect(isDenseMatrix(undefined)).toBe(false);
    });
  });
  
  describe('isSparseMatrix function', () => {
    it('should return true for sparse matrices', () => {
      const sparseMatrixObject = { isSparseMatrix: true };
    });
  
    it('should return false for not sparse matrices', () => {
      const nonSparseMatrixObject = { isDenseMatrix: true };
      expect(isSparseMatrix(nonSparseMatrixObject)).toBe(false);
    });
  
    it('should return false for not matrix objects', () => {
      const nonMatrixObject = { prop: 'value' };
      expect(isSparseMatrix(nonMatrixObject)).toBe(false);
    });
  
    it('should return false for not objects', () => {
      expect(isSparseMatrix(24)).toBe(false);
      expect(isSparseMatrix('sparseMatrix')).toBe(false);
      expect(isSparseMatrix(true)).toBe(false);
      expect(isSparseMatrix(null)).toBe(false);
      expect(isSparseMatrix(undefined)).toBe(false);
    });
  });

  describe('isBigNumber function', () => {
  
    it('should return false for invalid big numbers', () => {
      const invalidBigNumber = {
        isBigNumber: true,
        constructor: {
          prototype: { isBigNumber: false }, 
        },
      };
      expect(isBigNumber(invalidBigNumber)).toBe(false);
    });
  
    it('should return false for invalid numbers with isDecimal method', () => {
      const invalidNumberWithDecimalMethod = {
        constructor: {
          isDecimal: x => x === false,
        },
      };
      expect(isBigNumber(invalidNumberWithDecimalMethod)).toBe(false);
    });
  
    it('should return false for non-big number objects', () => {
      const nonBigNumberObject = { prop: 'value' };
      expect(isBigNumber(nonBigNumberObject)).toBe(false);
    });
  
    it('should return false for non-objects', () => {
      expect(isBigNumber(42)).toBe(false);
      expect(isBigNumber(true)).toBe(false);
      expect(isBigNumber(null)).toBe(false);
      expect(isBigNumber(undefined)).toBe(false);
      expect(isBigNumber('test')).toBe(false);
    });
  });
