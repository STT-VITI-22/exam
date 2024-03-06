function isNumber (x) {
  return typeof x === 'number'
}

function isBigNumber (x) {
  if (
    !x || typeof x !== 'object' ||
    typeof x.constructor !== 'function'
  ) {
    return false
  }

  if (
    x.isBigNumber === true &&
    typeof x.constructor.prototype === 'object' &&
    x.constructor.prototype.isBigNumber === true
  ) {
    return true
  }

  if (
    typeof x.constructor.isDecimal === 'function' &&
    x.constructor.isDecimal(x) === true
  ) {
    return true
  }

  return false
}

function isComplex (x) {
  return (x && typeof x === 'object' && Object.getPrototypeOf(x).isComplex === true) || false
}

function isFraction (x) {
  return (x && typeof x === 'object' && Object.getPrototypeOf(x).isFraction === true) || false
}

function isUnit (x) {
  return (x && x.constructor.prototype.isUnit === true) || false
}

function isString (x) {
  return typeof x === 'string'
}

 const isArray = Array.isArray

 function isMatrix (x) {
  return (x && x.constructor.prototype.isMatrix === true) || false
}

/**
 * Test whether a value is a collection: an Array or Matrix
 * @param {*} x
 * @returns {boolean} isCollection
 */
 function isCollection (x) {
  return Array.isArray(x) || isMatrix(x)
}

 function isDenseMatrix (x) {
  return (x && x.isDenseMatrix && x.constructor.prototype.isMatrix === true) || false
}

 function isSparseMatrix (x) {
  return (x && x.isSparseMatrix && x.constructor.prototype.isMatrix === true) || false
}

// Test isNumber
test('isNumber correctly identifies numbers', () => {
    expect(isNumber(123)).toBe(true);
  });
  
  // Test isBigNumber
  test('isBigNumber correctly identifies big numbers', () => {
    const mockBigNumber = { isBigNumber: true };
    const mockDecimal = { isDecimal: (x) => x === mockBigNumber };
  
    expect(isBigNumber(123)).toBe(false);
    expect(isBigNumber('123')).toBe(false);
    expect(isBigNumber({})).toBe(false); 
  });
  

  test('isComplex, isFraction, isUnit identify respective types', () => {
    const mockComplex = { isComplex: true };
  
    expect(isComplex({})).toBe(false); 
    expect(isFraction({})).toBe(false);
    expect(isUnit({})).toBe(false);
  });
  
  // Test isString
  test('isString correctly identifies strings', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
    expect(isString(123)).toBe(false);
    expect(isString({})).toBe(false);
  });
  
  
  // Test isMatrix
  test('isMatrix correctly identifies matrices', () => {
    const mockMatrix = { isMatrix: true, constructor: { prototype: { isMatrix: true } } };
  
  
    expect(isMatrix(mockMatrix)).toBe(true); 
    expect(isMatrix({})).toBe(false); 
  });
  
  // Test isCollection
  test('isCollection correctly identifies collections', () => {

    expect(isCollection({})).toBe(false);
  });
  
  
test('isDenseMatrix, isSparseMatrix identify respective matrix types', () => {
    const mockDenseMatrix = { isDenseMatrix: true, isMatrix: true, constructor: { prototype: { isMatrix: true } } };
    const mockSparseMatrix = { isSparseMatrix: true, isMatrix: true, constructor: { prototype: { isMatrix: true } } };
  
    expect(isDenseMatrix(mockDenseMatrix)).toBe(true); 
    expect(isSparseMatrix(mockSparseMatrix)).toBe(true); 
    expect(isDenseMatrix({})).toBe(false); 
    expect(isSparseMatrix({})).toBe(false); 
  });