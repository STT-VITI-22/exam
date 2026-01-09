import {
  isIndexNode,
  isNode,
  isObjectNode,
  isOperatorNode,
  isParenthesisNode,
  isRangeNode,
  isRelationalNode,
  isSymbolNode,
  isChain,
  typeOf
} from './variant4.js';

describe('variant4 - Node type checking functions', () => {

  describe('isIndexNode', () => {
    test('should return true for valid IndexNode', () => {
      const validIndexNode = {
        isIndexNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isIndexNode(validIndexNode)).toBe(true);
    });

    test('should return false when isIndexNode is false', () => {
      const invalidNode = {
        isIndexNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isIndexNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isIndexNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isIndexNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isIndexNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isIndexNode(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isIndexNode(42)).toBe(false);
      expect(isIndexNode('string')).toBe(false);
      expect(isIndexNode(true)).toBe(false);
    });
  });

  describe('isNode', () => {
    test('should return true for valid Node', () => {
      const validNode = {
        isNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isNode(validNode)).toBe(true);
    });

    test('should return false when isNode is false', () => {
      const invalidNode = {
        isNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isNode(undefined)).toBe(false);
    });
  });

  describe('isObjectNode', () => {
    test('should return true for valid ObjectNode', () => {
      const validObjectNode = {
        isObjectNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isObjectNode(validObjectNode)).toBe(true);
    });

    test('should return false when isObjectNode is false', () => {
      const invalidNode = {
        isObjectNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isObjectNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isObjectNode(null)).toBe(false);
    });
  });

  describe('isOperatorNode', () => {
    test('should return true for valid OperatorNode', () => {
      const validOperatorNode = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isOperatorNode(validOperatorNode)).toBe(true);
    });

    test('should return false when isOperatorNode is false', () => {
      const invalidNode = {
        isOperatorNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isOperatorNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isOperatorNode(null)).toBe(false);
    });
  });

  describe('isParenthesisNode', () => {
    test('should return true for valid ParenthesisNode', () => {
      const validParenthesisNode = {
        isParenthesisNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isParenthesisNode(validParenthesisNode)).toBe(true);
    });

    test('should return false when isParenthesisNode is false', () => {
      const invalidNode = {
        isParenthesisNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isParenthesisNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isParenthesisNode(null)).toBe(false);
    });
  });

  describe('isRangeNode', () => {
    test('should return true for valid RangeNode', () => {
      const validRangeNode = {
        isRangeNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isRangeNode(validRangeNode)).toBe(true);
    });

    test('should return false when isRangeNode is false', () => {
      const invalidNode = {
        isRangeNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isRangeNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isRangeNode(null)).toBe(false);
    });
  });

  describe('isRelationalNode', () => {
    test('should return true for valid RelationalNode', () => {
      const validRelationalNode = {
        isRelationalNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isRelationalNode(validRelationalNode)).toBe(true);
    });

    test('should return false when isRelationalNode is false', () => {
      const invalidNode = {
        isRelationalNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isRelationalNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isRelationalNode(null)).toBe(false);
    });
  });

  describe('isSymbolNode', () => {
    test('should return true for valid SymbolNode', () => {
      const validSymbolNode = {
        isSymbolNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isSymbolNode(validSymbolNode)).toBe(true);
    });

    test('should return false when isSymbolNode is false', () => {
      const invalidNode = {
        isSymbolNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isSymbolNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isSymbolNode(null)).toBe(false);
    });
  });

  describe('isChain', () => {
    test('should return true for valid Chain', () => {
      const validChain = {
        constructor: {
          prototype: {
            isChain: true
          }
        }
      };
      expect(isChain(validChain)).toBe(true);
    });

    test('should return false when isChain is false', () => {
      const invalidChain = {
        constructor: {
          prototype: {
            isChain: false
          }
        }
      };
      expect(isChain(invalidChain)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isChain(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isChain(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isChain(42)).toBe(false);
      expect(isChain('string')).toBe(false);
    });
  });

  describe('typeOf', () => {
    test('should return "null" for null', () => {
      expect(typeOf(null)).toBe('null');
    });

    test('should return "BigNumber" for BigNumber objects', () => {
      const bigNumber = {
        isBigNumber: true,
        constructor: function BigNumber() {
          this.isBigNumber = true;
        }
      };
      bigNumber.constructor.prototype = {
        isBigNumber: true
      };
      expect(typeOf(bigNumber)).toBe('BigNumber');
    });

    test('should return constructor name for objects with named constructors', () => {
      class MyClass {}
      const instance = new MyClass();
      expect(typeOf(instance)).toBe('MyClass');
    });

    test('should return "Object" for plain objects', () => {
      const plainObject = {};
      expect(typeOf(plainObject)).toBe('Object');
    });

    test('should return "string" for strings', () => {
      expect(typeOf('hello')).toBe('string');
      expect(typeOf('')).toBe('string');
    });

    test('should return "number" for numbers', () => {
      expect(typeOf(42)).toBe('number');
      expect(typeOf(3.14)).toBe('number');
      expect(typeOf(0)).toBe('number');
      expect(typeOf(-5)).toBe('number');
    });

    test('should return "boolean" for booleans', () => {
      expect(typeOf(true)).toBe('boolean');
      expect(typeOf(false)).toBe('boolean');
    });

    test('should return "function" for functions', () => {
      expect(typeOf(() => {})).toBe('function');
      expect(typeOf(function() {})).toBe('function');
    });

    test('should return "undefined" for undefined', () => {
      expect(typeOf(undefined)).toBe('undefined');
    });

    test('should return "bigint" for BigInt values', () => {
      expect(typeOf(BigInt(123))).toBe('bigint');
      expect(typeOf(123n)).toBe('bigint');
    });

    test('should return "symbol" for Symbol values', () => {
      expect(typeOf(Symbol('test'))).toBe('symbol');
    });

    test('should return "Array" for arrays', () => {
      expect(typeOf([])).toBe('Array');
      expect(typeOf([1, 2, 3])).toBe('Array');
    });

    test('should return "Object" for objects without constructor.name', () => {
      const obj = Object.create(null);
      obj.constructor = {};
      expect(typeOf(obj)).toBe('Object');
    });
  });
});
