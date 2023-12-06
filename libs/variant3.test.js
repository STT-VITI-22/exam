import {
    isUndefined,
    isAccessorNode,
    isArrayNode,
    isAssignmentNode,
    isBlockNode,
    isConditionalNode,
    isConstantNode,
    rule2Node,
    isFunctionAssignmentNode,
    isFunctionNode
  } from '../libs/variant3';
  
  describe('isUndefined', () => {
    it('returns true for undefined', () => {
      expect(isUndefined(undefined)).toBeTruthy();
    });
  
    it('returns false for null', () => {
      expect(isUndefined(null)).toBeFalsy();
    });
  
    it('returns false for a number', () => {
      expect(isUndefined(5)).toBeFalsy();
    });
  });
  
  describe('isAccessorNode', () => {
    it('returns true for a valid accessor node', () => {
      const node = { isAccessorNode: true, constructor: { prototype: { isNode: true } } };
      expect(isAccessorNode(node)).toBeTruthy();
    });
  
    it('returns false for an invalid node', () => {
      const node = { isAccessorNode: false, constructor: { prototype: { isNode: true } } };
      expect(isAccessorNode(node)).toBeFalsy();
    });
  });
  
  describe('isArrayNode', () => {
    it('returns true for a valid array node', () => {
      const node = { isArrayNode: true, constructor: { prototype: { isNode: true } } };
      expect(isArrayNode(node)).toBeTruthy();
    });
  
    it('returns false for an invalid node', () => {
      const node = { isArrayNode: false, constructor: { prototype: { isNode: true } } };
      expect(isArrayNode(node)).toBeFalsy();
    });
  });
  
  describe('isAssignmentNode', () => {
    it('returns true for a valid assignment node', () => {
      const node = { isAssignmentNode: true, constructor: { prototype: { isNode: true } } };
      expect(isAssignmentNode(node)).toBeTruthy();
    });
  
    it('returns false for an invalid node', () => {
      const node = { isAssignmentNode: false, constructor: { prototype: { isNode: true } } };
      expect(isAssignmentNode(node)).toBeFalsy();
    });
  });
  
  describe('isBlockNode', () => {
    it('returns true for a valid block node', () => {
      const node = { isBlockNode: true, constructor: { prototype: { isNode: true } } };
      expect(isBlockNode(node)).toBeTruthy();
    });
  
    it('returns false for an invalid node', () => {
      const node = { isBlockNode: false, constructor: { prototype: { isNode: true } } };
      expect(isBlockNode(node)).toBeFalsy();
    });
  });
  
  describe('isConditionalNode', () => {
    it('returns true for a valid conditional node', () => {
      const node = { isConditionalNode: true, constructor: { prototype: { isNode: true } } };
      expect(isConditionalNode(node)).toBeTruthy();
    });
  
    it('returns false for an invalid node', () => {
      const node = { isConditionalNode: false, constructor: { prototype: { isNode: true } } };
      expect(isConditionalNode(node)).toBeFalsy();
    });
  });
  
  describe('isConstantNode', () => {
    it('returns true for a valid constant node', () => {
      const node = { isConstantNode: true, constructor: { prototype: { isNode: true } } };
      expect(isConstantNode(node)).toBeTruthy();
    });
  
    it('returns false for an invalid node', () => {
      const node = { isConstantNode: false, constructor: { prototype: { isNode: true } } };
      expect(isConstantNode(node)).toBeFalsy();
    });
  });
  
  describe('rule2Node', () => {
    it('returns false for an OperatorNode with non-ConstantNode argument', () => {
      const node = {
        isOperatorNode: true,
        args: [{ isConstantNode: false }],
        op: '+',
      };
      expect(rule2Node(node)).toBeFalsy();
    });
  });
  
  // Test cases for isFunctionAssignmentNode
  describe('isFunctionAssignmentNode', () => {
    it('returns true for a valid FunctionAssignmentNode', () => {
      const node = { isFunctionAssignmentNode: true, constructor: { prototype: { isNode: true } } };
      expect(isFunctionAssignmentNode(node)).toBeTruthy();
    });
    it('returns false for an invalid node', () => {
        const node = { isFunctionAssignmentNode: false, constructor: { prototype: { isNode: true } } };
        expect(isFunctionAssignmentNode(node)).toBeFalsy();
      });
    });
    // Test cases for isFunctionNode
    describe('isFunctionNode', () => {
      it('returns true for a valid FunctionNode', () => {
        const node = { isFunctionNode: true, constructor: { prototype: { isNode: true } } };
        expect(isFunctionNode(node)).toBeTruthy();
      });
    
      it('returns false for an invalid node', () => {
        const node = { isFunctionNode: false, constructor: { prototype: { isNode: true } } };
        expect(isFunctionNode(node)).toBeFalsy();
      });
    });