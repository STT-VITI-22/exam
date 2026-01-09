import {
  isUndefined,
  isAccessorNode,
  isArrayNode,
  isAssignmentNode,
  isBlockNode,
  isConditionalNode,
  isConstantNode,
  isOperatorNode,
  rule2Node,
  isFunctionAssignmentNode,
  isFunctionNode
} from './variant3.js';

describe('variant3 - Node type checking functions', () => {

  describe('isUndefined', () => {
    test('should return true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    test('should return false for null', () => {
      expect(isUndefined(null)).toBe(false);
    });

    test('should return false for defined values', () => {
      expect(isUndefined(0)).toBe(false);
      expect(isUndefined('')).toBe(false);
      expect(isUndefined(false)).toBe(false);
      expect(isUndefined({})).toBe(false);
      expect(isUndefined([])).toBe(false);
    });

    test('should return false for NaN', () => {
      expect(isUndefined(NaN)).toBe(false);
    });
  });

  describe('isAccessorNode', () => {
    test('should return true for valid AccessorNode', () => {
      const validAccessorNode = {
        isAccessorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isAccessorNode(validAccessorNode)).toBe(true);
    });

    test('should return false when isAccessorNode is false', () => {
      const invalidNode = {
        isAccessorNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isAccessorNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isAccessorNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isAccessorNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isAccessorNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isAccessorNode(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isAccessorNode(42)).toBe(false);
      expect(isAccessorNode('string')).toBe(false);
      expect(isAccessorNode(true)).toBe(false);
    });

    test('should return false when constructor is missing', () => {
      const invalidNode = {
        isAccessorNode: true
      };
      expect(isAccessorNode(invalidNode)).toBe(false);
    });
  });

  describe('isArrayNode', () => {
    test('should return true for valid ArrayNode', () => {
      const validArrayNode = {
        isArrayNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isArrayNode(validArrayNode)).toBe(true);
    });

    test('should return false when isArrayNode is false', () => {
      const invalidNode = {
        isArrayNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isArrayNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isArrayNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isArrayNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isArrayNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isArrayNode(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isArrayNode(42)).toBe(false);
      expect(isArrayNode('string')).toBe(false);
    });
  });

  describe('isAssignmentNode', () => {
    test('should return true for valid AssignmentNode', () => {
      const validAssignmentNode = {
        isAssignmentNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isAssignmentNode(validAssignmentNode)).toBe(true);
    });

    test('should return false when isAssignmentNode is false', () => {
      const invalidNode = {
        isAssignmentNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isAssignmentNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isAssignmentNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isAssignmentNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isAssignmentNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isAssignmentNode(undefined)).toBe(false);
    });
  });

  describe('isBlockNode', () => {
    test('should return true for valid BlockNode', () => {
      const validBlockNode = {
        isBlockNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isBlockNode(validBlockNode)).toBe(true);
    });

    test('should return false when isBlockNode is false', () => {
      const invalidNode = {
        isBlockNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isBlockNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isBlockNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isBlockNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isBlockNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isBlockNode(undefined)).toBe(false);
    });
  });

  describe('isConditionalNode', () => {
    test('should return true for valid ConditionalNode', () => {
      const validConditionalNode = {
        isConditionalNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isConditionalNode(validConditionalNode)).toBe(true);
    });

    test('should return false when isConditionalNode is false', () => {
      const invalidNode = {
        isConditionalNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isConditionalNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isConditionalNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isConditionalNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isConditionalNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isConditionalNode(undefined)).toBe(false);
    });
  });

  describe('isConstantNode', () => {
    test('should return true for valid ConstantNode', () => {
      const validConstantNode = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isConstantNode(validConstantNode)).toBe(true);
    });

    test('should return false when isConstantNode is false', () => {
      const invalidNode = {
        isConstantNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isConstantNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isConstantNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isConstantNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isConstantNode(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isConstantNode(42)).toBe(false);
      expect(isConstantNode('string')).toBe(false);
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

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isOperatorNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isOperatorNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isOperatorNode(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isOperatorNode(42)).toBe(false);
      expect(isOperatorNode('string')).toBe(false);
      expect(isOperatorNode(true)).toBe(false);
    });

    test('should return false for empty object', () => {
      expect(isOperatorNode({})).toBe(false);
    });
  });

  describe('rule2Node', () => {
    test('should return true for ConstantNode', () => {
      const constantNode = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(rule2Node(constantNode)).toBe(true);
    });

    test('should return true for OperatorNode with single ConstantNode arg and "-" operator', () => {
      const constantNode = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      const operatorNode = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        },
        args: [constantNode],
        op: '-'
      };
      expect(rule2Node(operatorNode)).toBe(true);
    });

    test('should return true for OperatorNode with single ConstantNode arg and "+" operator', () => {
      const constantNode = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      const operatorNode = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        },
        args: [constantNode],
        op: '+'
      };
      expect(rule2Node(operatorNode)).toBe(true);
    });

    test('should return true for OperatorNode with single ConstantNode arg and "~" operator', () => {
      const constantNode = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      const operatorNode = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        },
        args: [constantNode],
        op: '~'
      };
      expect(rule2Node(operatorNode)).toBe(true);
    });

    test('should return false for OperatorNode with invalid operator', () => {
      const constantNode = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      const operatorNode = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        },
        args: [constantNode],
        op: '*'
      };
      expect(rule2Node(operatorNode)).toBe(false);
    });

    test('should return false for OperatorNode with more than one arg', () => {
      const constantNode1 = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      const constantNode2 = {
        isConstantNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      const operatorNode = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        },
        args: [constantNode1, constantNode2],
        op: '-'
      };
      expect(rule2Node(operatorNode)).toBe(false);
    });

    test('should return false for OperatorNode with non-ConstantNode arg', () => {
      const nonConstantNode = {
        isConstantNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      const operatorNode = {
        isOperatorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        },
        args: [nonConstantNode],
        op: '-'
      };
      expect(rule2Node(operatorNode)).toBe(false);
    });

    test('should return false for non-ConstantNode and non-OperatorNode', () => {
      const invalidNode = {
        isConstantNode: false,
        isOperatorNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(rule2Node(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(rule2Node(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(rule2Node(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(rule2Node(42)).toBe(false);
      expect(rule2Node('string')).toBe(false);
    });
  });

  describe('isFunctionAssignmentNode', () => {
    test('should return true for valid FunctionAssignmentNode', () => {
      const validFunctionAssignmentNode = {
        isFunctionAssignmentNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isFunctionAssignmentNode(validFunctionAssignmentNode)).toBe(true);
    });

    test('should return false when isFunctionAssignmentNode is false', () => {
      const invalidNode = {
        isFunctionAssignmentNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isFunctionAssignmentNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isFunctionAssignmentNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isFunctionAssignmentNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isFunctionAssignmentNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isFunctionAssignmentNode(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isFunctionAssignmentNode(42)).toBe(false);
      expect(isFunctionAssignmentNode('string')).toBe(false);
    });
  });

  describe('isFunctionNode', () => {
    test('should return true for valid FunctionNode', () => {
      const validFunctionNode = {
        isFunctionNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isFunctionNode(validFunctionNode)).toBe(true);
    });

    test('should return false when isFunctionNode is false', () => {
      const invalidNode = {
        isFunctionNode: false,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      };
      expect(isFunctionNode(invalidNode)).toBe(false);
    });

    test('should return false when constructor.prototype.isNode is false', () => {
      const invalidNode = {
        isFunctionNode: true,
        constructor: {
          prototype: {
            isNode: false
          }
        }
      };
      expect(isFunctionNode(invalidNode)).toBe(false);
    });

    test('should return false for null', () => {
      expect(isFunctionNode(null)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(isFunctionNode(undefined)).toBe(false);
    });

    test('should return false for primitive values', () => {
      expect(isFunctionNode(42)).toBe(false);
      expect(isFunctionNode('string')).toBe(false);
      expect(isFunctionNode(true)).toBe(false);
    });

    test('should return false for empty object', () => {
      expect(isFunctionNode({})).toBe(false);
    });
  });
});