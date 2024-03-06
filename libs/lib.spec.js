const assert = require('assert');
const variant2 = require('./variant2');

describe('Test suite for functions from variant2 module', () => {
  describe('isRange function', () => {
    it('should return true if the input is a range', () => {
      assert.strictEqual(variant2.isRange(new Range()), true);
    });

    it('should return false if the input is not a range', () => {
      assert.strictEqual(variant2.isRange(null), false);
      assert.strictEqual(variant2.isRange('string'), false);
      assert.strictEqual(variant2.isRange(123), false);
    });
  });

  describe('isIndex function', () => {
    it('should return true if the input is an index', () => {
      assert.strictEqual(variant2.isIndex(new Index()), true);
    });

    it('should return false if the input is not an index', () => {
      assert.strictEqual(variant2.isIndex(null), false);
      assert.strictEqual(variant2.isIndex('string'), false);
      assert.strictEqual(variant2.isIndex(123), false);
    });
  });

});
