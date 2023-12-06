const { expect } = require('chai');
const { isRange, isIndex, isBoolean, isResultSet, isHelp, isFunction, isDate, isRegExp, isObject, isNull } = require('./variant2.js');

describe('Variant 2 Functions', () => {
  describe('isRange function', () => {
    it('should return false for a non-range value', () => {
      expect(isRange(5)).to.be.false;
      expect(isRange('abc')).to.be.false;
      expect(isRange([1, 2, 3])).to.be.false;
    });

  
  });

  describe('isIndex function', () => {
    it('should return false for a non-index value', () => {
      expect(isIndex(5)).to.be.false;
      expect(isIndex('abc')).to.be.false;
      expect(isIndex({ isIndex: false })).to.be.false;
    });

  
  });

  describe('isBoolean function', () => {
    it('should return true for a boolean value', () => {
      expect(isBoolean(true)).to.be.true;
      expect(isBoolean(false)).to.be.true;
    });

    it('should return false for non-boolean values', () => {
      expect(isBoolean('true')).to.be.false;
      expect(isBoolean(1)).to.be.false;
    });
  });

  describe('isResultSet function', () => {
    it('should return false for a non-result set value', () => {
      expect(isResultSet(5)).to.be.false;
      expect(isResultSet('abc')).to.be.false;
    });

   
  });

  describe('isHelp function', () => {
    it('should return false for a non-help value', () => {
      expect(isHelp(5)).to.be.false;
      expect(isHelp('abc')).to.be.false;
    });

   
  });

  describe('isFunction function', () => {
    it('should return true for a function', () => {
      expect(isFunction(() => {})).to.be.true;
    });

    it('should return false for non-function values', () => {
      expect(isFunction('function')).to.be.false;
      expect(isFunction(42)).to.be.false;
    });
  });

  describe('isDate function', () => {
    it('should return true for a Date object', () => {
      expect(isDate(new Date())).to.be.true;
    });

    it('should return false for non-Date values', () => {
      expect(isDate('2023-12-06')).to.be.false;
      expect(isDate(42)).to.be.false;
    });
  });

  describe('isRegExp function', () => {
    it('should return true for a RegExp object', () => {
      expect(isRegExp(/test/)).to.be.true;
    });

    it('should return false for non-RegExp values', () => {
      expect(isRegExp('regexp')).to.be.false;
      expect(isRegExp(42)).to.be.false;
    });
  });

  describe('isObject function', () => {
    it('should return true for a plain object', () => {
      expect(isObject({ key: 'value' })).to.be.true;
    });

    it('should return false for non-object values or complex objects', () => {
      expect(isObject('string')).to.be.false;
      expect(isObject(42)).to.be.false;
      expect(isObject([1, 2, 3])).to.be.false;
      expect(isObject(new Date())).to.be.false;
    });
  });

  describe('isNull function', () => {
    it('should return true for null', () => {
      expect(isNull(null)).to.be.true;
    });

    it('should return false for non-null values', () => {
      expect(isNull(undefined)).to.be.false;
      expect(isNull('null')).to.be.false;
      expect(isNull(0)).to.be.false;
    });
  });
});