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
} from './variant3';

describe('variant3', () => {
  describe('isUndefined', () => {
    test('returns true for undefined value', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    test('returns false for defined value', () => {
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined(0)).toBe(false);
      expect(isUndefined('')).toBe(false);
      expect(isUndefined(false)).toBe(false);
    });
  });

  describe('isAccessorNode', () => {
    test('returns true for accessor node', () => {
      const accessorNode = {isAccessorNode: true, constructor: {prototype: {isNode: true}}};
      expect(isAccessorNode(accessorNode)).toBe(true);
    });

    test('returns false for non-accessor node', () => {
      const nonAccessorNode = {isAccessorNode: false, constructor: {prototype: {isNode: false}}};
      expect(isAccessorNode(nonAccessorNode)).toBe(false);
    });
  });

  describe('isArrayNode', () => {
    test('returns true for array node', () => {
      const arrayNode = {isArrayNode: true, constructor: {prototype: {isNode: true}}};
      expect(isArrayNode(arrayNode)).toBe(true);
    });

    test('returns false for non-array node', () => {
      const nonArrayNode = {isArrayNode: false, constructor: {prototype: {isNode: false}}};
      expect(isArrayNode(nonArrayNode)).toBe(false);
    });
  });

  describe('isAssignmentNode', () => {
    test('returns true for assignment node', () => {
      const assignmentNode = {isAssignmentNode: true, constructor: {prototype: {isNode: true}}};
      expect(isAssignmentNode(assignmentNode)).toBe(true);
    });

    test('returns false for non-assignment node', () => {
      const nonAssignmentNode = {isAssignmentNode: false, constructor: {prototype: {isNode: false}}};
      expect(isAssignmentNode(nonAssignmentNode)).toBe(false);
    });
  });

  describe('isBlockNode', () => {
    test('returns true for block node', () => {
      const blockNode = {isBlockNode: true, constructor: {prototype: {isNode: true}}};
      expect(isBlockNode(blockNode)).toBe(true);
    });

    test('returns false for non-block node', () => {
      const nonBlockNode = {isBlockNode: false, constructor: {prototype: {isNode: false}}};
      expect(isBlockNode(nonBlockNode)).toBe(false);
    });
  });

  describe('isConditionalNode', () => {
    test('returns true for conditional node', () => {
      const conditionalNode = {isConditionalNode: true, constructor: {prototype: {isNode: true}}};
      expect(isConditionalNode(conditionalNode)).toBe(true);
    });

    test('returns false for non-conditional node', () => {
      const nonConditionalNode = {isConditionalNode: false, constructor: {prototype: {isNode: false}}};
      expect(isConditionalNode(nonConditionalNode)).toBe(false);
    });
  });

  describe('isConstantNode', () => {
    test('returns true for constant node', () => {
      const constantNode = {isConstantNode: true, constructor: {prototype: {isNode: true}}};
      expect(isConstantNode(constantNode)).toBe(true);
    });

    test('returns false for non-constant node', () => {
      const nonConstantNode = {isConstantNode: false, constructor: {prototype: {isNode: false}}};
      expect(isConstantNode(nonConstantNode)).toBe(false);
    });
  });
  describe('rule2Node', () => {
    test('returns true for rule2 node', () => {
      const constantNode = {isConstantNode: true, constructor: {prototype: {isNode: true}}};
      const operatorNode = {op: '-', args: [constantNode], constructor: {prototype: {isNode: true}}};
      expect(rule2Node(operatorNode)).toBe(true);
    });

    test('returns false for non-rule2 node', () => {
      const constantNode = {isConstantNode: false, constructor: {prototype: {isNode: false}}};
      const operatorNode = {op: '+', args: [constantNode], constructor: {prototype: {isNode: false}}};
      expect(rule2Node(operatorNode)).toBe(false);
    });
  });

  describe('isFunctionAssignmentNode', () => {
    test('returns true for function assignment node', () => {
      const functionAssignmentNode = {isFunctionAssignmentNode: true, constructor: {prototype: {isNode: true}}};
      expect(isFunctionAssignmentNode(functionAssignmentNode)).toBe(true);
    });

    test('returns false for non-function assignment node', () => {
      const nonFunctionAssignmentNode = {isFunctionAssignmentNode: false, constructor: {prototype: {isNode: false}}};
      expect(isFunctionAssignmentNode(nonFunctionAssignmentNode)).toBe(false);
    });
  });

  describe('isFunctionNode', () => {
    test('returns true for function node', () => {
      const functionNode = {isFunctionNode: true, constructor: {prototype: {isNode: true}}};
      expect(isFunctionNode(functionNode)).toBe(true);
    });

    test('returns false for non-function node', () => {
      const nonFunctionNode = {isFunctionNode: false, constructor: {prototype: {isNode: false}}};
      expect(isFunctionNode(nonFunctionNode)).toBe(false);
    });
  });
})
