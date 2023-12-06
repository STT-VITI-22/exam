const { isIndexNode, typeOf, isNode} = require('./variant4');


describe('variant4 Functions', () => {
  describe('isIndexNode', () => {
    it('should return true for IndexNode', () => {
      const node = { isIndexNode: true, constructor: { prototype: { isNode: true } } };
      expect(isIndexNode(node)).toBe(true);
    });

    it('should return false for non-IndexNode', () => {
      const notNode = { isIndexNode: false };
      expect(isIndexNode(notNode)).toBe(false);
    });
  });

  describe('isNode', () => {
    it('should return true for Node', () => {
      const node = { isNode: true, constructor: { prototype: { isNode: true } } };
      expect(isNode(node)).toBe(true);
    });

  });

  describe('typeOf', () => {
    it('should identify different types correctly', () => {
      expect(typeOf(null)).toBe('null');
      expect(typeOf(5)).toBe('number');
      expect(typeOf('hello')).toBe('string');
    });
  });
});
