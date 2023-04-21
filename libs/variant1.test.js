import { isNumber, isBigNumber } from './variant1';

describe('isNumber', () => {
  it('returns true for numbers', () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
    expect(isNumber(-10)).toBe(true);
  });

  it('returns false for non-numbers', () => {
    expect(isNumber('42')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });
});

describe('isBigNumber', () => {
  it('returns true for BigNumbers', () => {
    const BigNumber = {
      isBigNumber: true,
      constructor: { prototype: { isBigNumber: true } }
    };
    expect(isBigNumber(BigNumber)).toBe(true);
  });

  it('returns true for Decimals', () => {
    const Decimal = {
      constructor: { isDecimal: () => true }
    };
    expect(isBigNumber(Decimal)).toBe(true);
  });

  it('returns false for non-BigNumbers', () => {
    expect(isBigNumber(null)).toBe(false);
    expect(isBigNumber(undefined)).toBe(false);
    expect(isBigNumber({})).toBe(false);
    expect(isBigNumber([])).toBe(false);
    expect(isBigNumber(42)).toBe(false);
  });
});
const { isComplex, isFraction, isUnit, isString, isArray, isMatrix } = require('./your-module-name');
// замість your-module-name вкажіть назву вашого модуля

describe('isComplex', () => {
  test('returns true for a complex number', () => {
    expect(isComplex({ isComplex: true })).toBe(true);
  });

  test('returns false for a non-complex number', () => {
    expect(isComplex(5)).toBe(false);
  });
});

describe('isFraction', () => {
  test('returns true for a fraction', () => {
    expect(isFraction({ isFraction: true })).toBe(true);
  });

  test('returns false for a non-fraction', () => {
    expect(isFraction(5)).toBe(false);
  });
});

describe('isUnit', () => {
  test('returns true for a unit', () => {
    expect(isUnit({ constructor: { prototype: { isUnit: true } } })).toBe(true);
  });

  test('returns false for a non-unit', () => {
    expect(isUnit(5)).toBe(false);
  });
});

describe('isString', () => {
  test('returns true for a string', () => {
    expect(isString('hello')).toBe(true);
  });

  test('returns false for a non-string', () => {
    expect(isString(5)).toBe(false);
  });
});

describe('isArray', () => {
  test('returns true for an array', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  test('returns false for a non-array', () => {
    expect(isArray(5)).toBe(false);
  });
});

describe('isMatrix', () => {
  test('returns true for a matrix', () => {
    expect(isMatrix({ constructor: { prototype: { isMatrix: true } } })).toBe(true);
  });

  test('returns false for a non-matrix', () => {
    expect(isMatrix(5)).toBe(false);
  });
});
const { isCollection, isDenseMatrix, isSparseMatrix } = require('./module');

describe('isCollection', () => {
  test('returns true if input is an array', () => {
    expect(isCollection([])).toBe(true);
  });

  test('returns true if input is a dense matrix', () => {
    const denseMatrix = { isDenseMatrix: true, constructor: { prototype: { isMatrix: true } } };
    expect(isCollection(denseMatrix)).toBe(true);
  });

  test('returns true if input is a sparse matrix', () => {
    const sparseMatrix = { isSparseMatrix: true, constructor: { prototype: { isMatrix: true } } };
    expect(isCollection(sparseMatrix)).toBe(true);
  });

  test('returns false if input is not an array or matrix', () => {
    expect(isCollection({})).toBe(false);
  });
});

describe('isDenseMatrix', () => {
  test('returns true if input is a dense matrix', () => {
    const denseMatrix = { isDenseMatrix: true, constructor: { prototype: { isMatrix: true } } };
    expect(isDenseMatrix(denseMatrix)).toBe(true);
  });

  test('returns false if input is not a dense matrix', () => {
    const notDenseMatrix = { isSparseMatrix: true, constructor: { prototype: { isMatrix: true } } };
    expect(isDenseMatrix(notDenseMatrix)).toBe(false);
  });
});

describe('isSparseMatrix', () => {
  test('returns true if input is a sparse matrix', () => {
    const sparseMatrix = { isSparseMatrix: true, constructor: { prototype: { isMatrix: true } } };
    expect(isSparseMatrix(sparseMatrix)).toBe(true);
  });

  test('returns false if input is not a sparse matrix', () => {
    const notSparseMatrix = { isDenseMatrix: true, constructor: { prototype: { isMatrix: true } } };
    expect(isSparseMatrix(notSparseMatrix)).toBe(false);
  });
});