describe('isUndefined', () => {
    it('returns true for undefined input', () => {
      expect(isUndefined(undefined)).to.be.true
    })
    
    it('returns false for defined input', () => {
      expect(isUndefined(null)).to.be.false
      expect(isUndefined(0)).to.be.false
      expect(isUndefined(false)).to.be.false
      expect(isUndefined('')).to.be.false
      expect(isUndefined([])).to.be.false
      expect(isUndefined({})).to.be.false
    })
  })

  describe('isAccessorNode', () => {
    it('returns true for an accessor node', () => {
      const node = {
        isAccessorNode: true,
        constructor: {
          prototype: {
            isNode: true
          }
        }
      }
      expect(isAccessorNode(node)).to.be.true
    })
    
    it('returns false for non-accessor nodes', () => {
      expect(isAccessorNode(null)).to.be.false
      expect(isAccessorNode(0)).to.be.false
      expect(isAccessorNode(false)).to.be.false
      expect(isAccessorNode('')).to.be.false
      expect(isAccessorNode([])).to.be.false
      expect(isAccessorNode({})).to.be.false
    })
  })

  describe('isArrayNode', () => {
    it('should return true if argument is an ArrayNode object', () => {
      const node = new mathjs.expression.node.ArrayNode([])
      assert.strictEqual(isArrayNode(node), true)
    })
  
    it('should return false if argument is not an ArrayNode object', () => {
      const node = new mathjs.expression.node.ConstantNode(3)
      assert.strictEqual(isArrayNode(node), false)
      assert.strictEqual(isArrayNode(null), false)
      assert.strictEqual(isArrayNode(undefined), false)
      assert.strictEqual(isArrayNode({}), false)
    })
  })

  describe('isAssignmentNode', function () {
    it('should return true for an assignment node', function () {
      const node = {
        isAssignmentNode: true,
        constructor: { prototype: { isNode: true } }
      };
      assert.strictEqual(isAssignmentNode(node), true);
    });
  
    it('should return false for a non-assignment node', function () {
      const node = { isAssignmentNode: false };
      assert.strictEqual(isAssignmentNode(node), false);
    });
  
    it('should return false for a null or undefined node', function () {
      assert.strictEqual(isAssignmentNode(null), false);
      assert.strictEqual(isAssignmentNode(undefined), false);
    });
  });

  describe('isBlockNode', function() {
    it('should return true for a valid BlockNode', function() {
      const blockNode = new BlockNode([])
      assert.strictEqual(isBlockNode(blockNode), true)
    })
  
    it('should return false for an invalid BlockNode', function() {
      const notBlockNode = {}
      assert.strictEqual(isBlockNode(notBlockNode), false)
    })
  
    it('should return false for null', function() {
      assert.strictEqual(isBlockNode(null), false)
    })
  
    it('should return false for undefined', function() {
      assert.strictEqual(isBlockNode(undefined), false)
    })
  })

  describe('isConditionalNode', () => {
    it('should return true for a conditional node', () => {
      const node = new math.expression.node.ConditionalNode([], [], [], []);
      assert.isTrue(isConditionalNode(node));
    });
  
    it('should return false for non-conditional nodes', () => {
      const node = new math.expression.node.ConstantNode(2);
      assert.isFalse(isConditionalNode(node));
    });
  
    it('should return false for null or undefined input', () => {
      assert.isFalse(isConditionalNode(null));
      assert.isFalse(isConditionalNode(undefined));
    });
  });
  
  
  
  
  
  
  
  