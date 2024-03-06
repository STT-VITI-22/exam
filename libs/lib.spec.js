import variant2 from './variant2.js';
import assert from 'assert';
import { isRange, isIndex, isBoolean, isResultSet, isHelp, isFunction, isDate, isRegExp, isObject, isNull, isComplex, isFraction } from 'from ./variant2.js';
describe('isIndex function', () => {
  it('should return true if the input is an index', () => {
    assert.strictEqual(variant2.isIndex(new Index()), true);
  });

  it('should return false if the input is not a range', () => {
    assert.strictEqual(variant2.isRange(null), false);
    assert.strictEqual(variant2.isRange('string'), false);
    assert.strictEqual(variant2.isRange(123), false);
  });

  it('should return false if the input is not an index', () => {
    assert.strictEqual(variant2.isIndex(null), false);
    assert.strictEqual(variant2.isIndex('string'), false);
    assert.strictEqual(variant2.isIndex(123), false);
  });

  it('should return true if the input is a boolean', () => {
    assert.strictEqual(variant2.isBoolean(true), true);
  });

  it('should return false if the input is not a boolean', () => {
    assert.strictEqual(variant2.isBoolean(123), false);
    assert.strictEqual(variant2.isBoolean('string'), false);
    assert.strictEqual(variant2.isBoolean(null), false);
  });

  it('should return true if the input is a result set', () => {
    const input = { constructor: { prototype: { isResultSet: true } } };
    assert.strictEqual(variant2.isResultSet(input), true);
  });

  it('should return false if the input is not a result set', () => {
    assert.strictEqual(variant2.isResultSet({}), false);
    assert.strictEqual(variant2.isResultSet(null), false);
    assert.strictEqual(variant2.isResultSet(123), false);
    assert.strictEqual(variant2.isResultSet('resultSet'), false);
    assert.strictEqual(variant2.isResultSet(undefined), false);
  });

  describe('isHelp function', () => {
    it('should return true if the input is a help', () => {
      const input = { constructor: { prototype: { isHelp: true } } };
      assert.strictEqual(variant2.isHelp(input), true);
    });

    it('should return false if the input is not a help', () => {
      assert.strictEqual(variant2.isHelp({}), false);
      assert.strictEqual(variant2.isHelp(null), false);
    });
  });
});
