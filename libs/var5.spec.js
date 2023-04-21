describe('Test suite for testing var5.spec.js', () => {

  describe('Test suite for testing isInteger function', () => {
    it('test isInteger', () => {
      assert.equal(isInteger(1), true)
    });
    it('return true integer values', () => {
      assert.equal(isInteger(0), true)
      assert.equal(isInteger(10), true)
      assert.equal(isInteger(-5), true)
    })

    it('return false integer values', () => {
      assert.equal(isInteger(1.5), false)
      assert.equal(isInteger('foo'), false)
    })
  });
  describe('Test suite for Calculate the sign of a number', () => {
    it('return 1 for positive numbers', () => {
      assert.strictEqual(sign(10), 1)
      assert.strictEqual(sign(0.5), 1)
    })

    it('return -1 for negative numbers', () => {
      assert.strictEqual(sign(-10), -1)
      assert.strictEqual(sign(-0.5), -1)
    })

    it('return 0 for zero', () => {
      assert.strictEqual(sign(0), 0)
      assert.strictEqual(sign(-0), 0)
    })

  });
  describe('log2', () => {
    it('return the correct value for positive numbers', () => {
      assert.strictEqual(log2(1), 0)
    })

    it(' return NaN for negative numbers', () => {
      assert(isNaN(log2(-1)))
    })

    it('should return -Infinity for zero', () => {
      assert.strictEqual(log2(0), -Infinity)
    })
  })



});
