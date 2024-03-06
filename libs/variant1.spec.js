const lib = require('./variant1')

describe('Test suite for testing variant.js', () => {

  describe('Test suite for isNumber function', () => {
    it('should return true if number', () => {
      expect(lib.isNumber(5)).toEqual(true);
    });
    it('should return false if not number', () => {
      expect(lib.isNumber('5')).toEqual(false);
    });
  });


  describe('Test suite for isString function', () => {
    it('should return true if a string', () => {
      expect(lib.isString("dfwe")).toEqual(true);
    });
    it('should return false if not a string', () => {
      expect(lib.isString(5)).toEqual(false);
    });
  });

  describe('Test suite for isBigNumber function', () => {
    it('should return false for non-object types', () => {
      expect(lib.isBigNumber(123)).toBe(false);
      expect(lib.isBigNumber('123')).toBe(false);
      expect(lib.isBigNumber(null)).toBe(false);
      expect(lib.isBigNumber(undefined)).toBe(false);
      expect(lib.isBigNumber(() => {})).toBe(false);
    });

    it('should return true for objects marked as isBigNumber', () => {
      const bigNumberMock = {
        isBigNumber: true,
        constructor: function() {}
      };
      bigNumberMock.constructor.prototype = { isBigNumber: true };
      expect(lib.isBigNumber(bigNumberMock)).toBe(true);
    });

    it('should return true for objects with a decimal constructor that returns true on isDecimal call', () => {
      const decimalNumberMock = {
        constructor: {
          isDecimal: function(x) { return x === decimalNumberMock; }
        }
      };
      expect(lib.isBigNumber(decimalNumberMock)).toBe(true);
    });

    it('should return false for objects not marked as isBigNumber and without a decimal constructor', () => {
      const randomObject = { a: 1 };
      expect(lib.isBigNumber(randomObject)).toBe(false);
    });
  });

  describe('Test suite for isCollection function', () => {
    it('should return true if an array', () => {
      expect(lib.isCollection([5,4,3])).toEqual(true);
    });
     it('should return true if a matrix', () => {
       expect(lib.isCollection([
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
       ])).toEqual(true);
     });
     it('should return false if neither', () => {
       expect(lib.isCollection(5)).toEqual(false);
     });
  });

  describe('Matrix type check functions', () => {
    // Підготовка мок-об'єктів для тестування
    const denseMatrixMock = {
      isDenseMatrix: true,
      constructor: {
        prototype: {
          isMatrix: true
        }
      }
    };

    const sparseMatrixMock = {
      isSparseMatrix: true,
      constructor: {
        prototype: {
          isMatrix: true
        }
      }
    };

    const notAMatrix = {
      isDenseMatrix: false,
      isSparseMatrix: false
    };

    // Тести для isDenseMatrix
    it('isDenseMatrix should return true for dense matrix objects', () => {
      expect(lib.isDenseMatrix(denseMatrixMock)).toBe(true);
    });

    it('isDenseMatrix should return false for non-dense matrix objects', () => {
      expect(lib.isDenseMatrix(sparseMatrixMock)).toBe(false);
      expect(lib.isDenseMatrix(notAMatrix)).toBe(false);
    });

    // Тести для isSparseMatrix
    it('isSparseMatrix should return true for sparse matrix objects', () => {
      expect(lib.isSparseMatrix(sparseMatrixMock)).toBe(true);
    });

    it('isSparseMatrix should return false for non-sparse matrix objects', () => {
      expect(lib.isSparseMatrix(denseMatrixMock)).toBe(false);
      expect(lib.isSparseMatrix(notAMatrix)).toBe(false);
    });
  });

  describe('is Complex check functions', () => {
    // Мок-об'єкти для тестування
    const complexMock = {
      get isComplex() {
        return true;
      }
    };
    it('isComplex should return true for complex objects', () => {
      expect(lib.isComplex(complexMock)).toBe(true);
    });

    it('isComplex should return false for non-complex objects', () => {
      expect(lib.isComplex(2)).toBe(false);
      expect(lib.isComplex('notATypeMock')).toBe(false);
    });
  });
  describe('isFraction check functions', () => {
    const fractionMock = {
      get isFraction() {
        return true;
      }
    };
    it('isFraction should return true for fraction objects', () => {
      expect(lib.isFraction(fractionMock)).toBe(true);
    });

    it('isFraction should return false for non-fraction objects', () => {
      expect(lib.isFraction(3)).toBe(false);
      expect(lib.isFraction('notATypeMock')).toBe(false);
    });

    // Тести для isUnit

  });

  describe('isUnit check functions', () => {
    const unitMock = {
      constructor: {
        prototype: {
          isUnit: true
        }
      }
    };
    it('isUnit should return true for unit objects', () => {
      expect(lib.isUnit(unitMock)).toBe(true);
    });

    it('isUnit should return false for non-unit objects', () => {
      expect(lib.isUnit(2)).toBe(false);
      expect(lib.isUnit('notATypeMock')).toBe(false);
    });
  });
  describe('isMatrix check functions', () => {
    const matrixMock = {
      constructor: {
        prototype: {
          isMatrix: true
        }
      }
    };


    it('isMatrix should return true for matrix objects', () => {
      expect(lib.isMatrix(matrixMock)).toBe(true);
    });

    it('isMatrix should return false for non-matrix objects', () => {
      expect(lib.isMatrix('unitMock')).toBe(false);
      expect(lib.isMatrix(1)).toBe(false);
    });
  });

});
