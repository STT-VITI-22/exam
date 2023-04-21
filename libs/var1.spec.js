const var1 = require('variant1')

describe('Test suite for testing variant1', ()=>{
  describe('isNumber', () => {
    it('should return true for numbers', () => {
       expect(var1.isNumber(40).toStrictEqual(true))
    })
  });

  describe('isBigNumber', () => {
    it('should return true for numbers', () => {
      expect(isBigNumber(null)).toStrictEqual(false)
      expect(isBigNumber(undefined)).toStrictEqual(false)
      expect(isBigNumber('string')).toStrictEqual(false)
      expect(isBigNumber(123)).toStrictEqual(false)
    })
  })
  describe('isComplex function', () => {
    it('returns true if given a complex number', () => {
    const complexNum = { re: 1, im: 2, isComplex: true };
    expect(isComplex(complexNum)).toBe(true);
  });

  it('returns false if given a non-complex number', () => {
    expect(isComplex(42)).toBe(false);
    expect(isComplex('hello')).toBe(false);
    expect(isComplex(null)).toBe(false);
    expect(isComplex(undefined)).toBe(false);
    expect(isComplex({})).toBe(false);
  });
});
})
