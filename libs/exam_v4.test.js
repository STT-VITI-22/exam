
const {
    isBigNumber,
    isIndexNode,
    isNode,
    isObjectNode,
    isOperatorNode,
    isParenthesisNode,
    isRangeNode,
    isRelationalNode,
    isSymbolNode,
    isChain,
    typeOf,
  } = require ('./variant4.js');


  describe('isBigNumber', () => {
    test('should return true if input is a Big Number', () => {
    });
    test('should return false if input is not a Big Number', () => {
    });
  });

  describe('isIndexNode', () => {
    test('should return true if input is an index node', () => {
    });
    test('should return false if input is not an index node', () => {
    });
  });
  describe('isNode', () => {
    test('should return true if input is a generic node', () => {
    });
    test('should return false if input is not a generic node', () => {
    });
  });
  
  describe('isObjectNode', () => {
    test('should return true if input is an object node', () => {
    });
    test('should return false if input is not an object node', () => {
    });
  });

  describe('isOperatorNode', () => {
    test('should return true if input is an operator node', () => {
      const input = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isOperatorNode(input)).toBe(true);
    });
    test('should return false if input is not an operator node', () => {
      const input = {
        isOperatorNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isOperatorNode(input)).toBe(false);
    });
  });
  
  describe('isParenthesisNode', () => {
    test('should return true if input is a parenthesis node', () => {
      const input = {
        isParenthesisNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isParenthesisNode(input)).toBe(true);
    });
    test('should return false if input is not a parenthesis node', () => {
      const input = {
        isParenthesisNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isParenthesisNode(input)).toBe(false);
    });
  });

  describe('isRangeNode', () => {
    test('should return true if input is a range node', () => {
      const input = {
        isRangeNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isRangeNode(input)).toBe(true);
    });
    test('should return false if input is not a range node', () => {
      const input = {
        isRangeNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isRangeNode(input)).toBe(false);
    });
  });
  
  describe('isRelationalNode', () => {
    test('should return true if input is a relational node', () => {
      const input = {
        isRelationalNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isRelationalNode(input)).toBe(true);
    });
    test('should return false if input is not a relational node', () => {
      const input = {
        isRelationalNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isRelationalNode(input)).toBe(false);
    });
  });
  
  describe('isSymbolNode', () => {
    test('should return true if input is a symbol node', () => {
      const input = {
        isSymbolNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isSymbolNode(input)).toBe(true);
    });
    test('should return false if input is not a symbol node', () => {
      const input = {
        isSymbolNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isSymbolNode(input)).toBe(false);
    });
  });
  
  describe('isChain', () => {
    test('should return true if input is a chain', () => {
      const input = {
        constructor: {
          prototype: {
            isChain: true
          }
        }
      };
      expect(isChain(input)).toBe(true);
    });
    test('should return false if input is not a chain', () => {
      const input = {
        constructor: {
          prototype: {
            isChain: false
          }
        }
      };
      expect(isChain(input)).toBe(false);
    });
  });
  
  describe('typeOf', () => {
    test('should return the correct type of the input', () => {
      expect(typeOf(5)).toBe('number');
      expect(typeOf('hello')).toBe('string');
      expect(typeOf(true)).toBe('boolean');
      expect(typeOf(null)).toBe('null');
      expect(typeOf([])).toBe('Array');
      expect(typeOf({})).toBe('Object');
    });
  });
 