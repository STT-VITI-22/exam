const { toExponential } = require('C:\Users\User\Documents\GitHub\exam\libs\variant6.js');

describe('toExponential', () => {
  it('should return string value if value is not a finite number', () => {
    expect(toExponential(NaN, 2)).toBe('NaN');
    expect(toExponential(Infinity, 2)).toBe('Infinity');
  });

  it('should return the value in exponential notation with the given precision', () => {
    expect(toExponential(123.456789, 2)).toBe('1.23e+2');
    expect(toExponential(123.456789, 5)).toBe('1.23457e+2');
  });

  it('should return the value in exponential notation with the default precision if precision is not given', () => {
    expect(toExponential(123.456789)).toBe('1.23456789e+2');
    expect(toExponential(0.000123456789)).toBe('1.23456789e-4');
  });
});

const { toPrecision } = require('C:\Users\User\Documents\GitHub\exam\libs\variant6.js')

describe('toPrecision', () => {
  it('returns the input value as string if it is not a finite number', () => {
    expect(toPrecision(NaN)).toBe('NaN')
    expect(toPrecision(Infinity)).toBe('Infinity')
    expect(toPrecision(-Infinity)).toBe('-Infinity')
    expect(toPrecision('not a number')).toBe('not a number')
    expect(toPrecision(undefined)).toBe('undefined')
    expect(toPrecision(null)).toBe('null')
    expect(toPrecision({})).toBe('[object Object]')
    expect(toPrecision([])).toBe('')
  })

  it('returns exponential notation if the value is outside the specified range', () => {
    expect(toPrecision(0.0000123456789, 5, { lowerExp: -3, upperExp: 5 })).toBe('1.23457e-5')
    expect(toPrecision(98765432100, 5, { lowerExp: -3, upperExp: 5 })).toBe('9.8765e+10')
  })

  it('returns the value rounded to the specified precision', () => {
    expect(toPrecision(1234.56789, 2)).toBe('1200')
    expect(toPrecision(1234.56789, 5)).toBe('1234.6')
    expect(toPrecision(1234.56789, 8)).toBe('1234.56789')
    expect(toPrecision(0.123456789, 3)).toBe('0.123')
    expect(toPrecision(0.123456789, 6)).toBe('0.123457')
  })

  it('returns the value with trailing zeros if necessary', () => {
    expect(toPrecision(1.23, 5)).toBe('1.2300')
    expect(toPrecision(123, 3)).toBe('123')
    expect(toPrecision(0.0123, 5)).toBe('0.012300')
  })

  it('returns the value with leading zeros if necessary', () => {
    expect(toPrecision(0.00123, 5)).toBe('0.0012300')
    expect(toPrecision(0.123, 2)).toBe('0.12')
    expect(toPrecision(1.23, 1)).toBe('1')
  })

  it('returns the value with a decimal point if necessary', () => {
    expect(toPrecision(1234, 3)).toBe('1230')
    expect(toPrecision(0.123, 3)).toBe('0.123')
    expect(toPrecision(1.23, 4)).toBe('1.230')
  })

  it('returns the value with the correct sign', () => {
    expect(toPrecision(1234.56789, 5)).toBe('1234.6')
    expect(toPrecision(-1234.56789, 5)).toBe('-1234.6')
  })
})

const { roundDigits } = require('C:\Users\User\Documents\GitHub\exam\libs\variant6.js')

describe('roundDigits', () => {
  test('should round the given number to the specified number of digits', () => {
    const split = {
      sign: '',
      coefficients: [1, 2, 3, 4, 5],
      exponent: -4
    }
    const precision = 3

    const rounded = roundDigits(split, precision)

    expect(rounded).toEqual({
      sign: '',
      coefficients: [1, 2, 4],
      exponent: -4
    })
  })

  test('should handle leading zeros', () => {
    const split = {
      sign: '',
      coefficients: [0, 1, 2, 3, 4, 5],
      exponent: -4
    }
    const precision = 3

    const rounded = roundDigits(split, precision)

    expect(rounded).toEqual({
      sign: '',
      coefficients: [0, 1, 2],
      exponent: -4
    })
  })

  test('should handle rounding up to the next digit', () => {
    const split = {
      sign: '',
      coefficients: [1, 2, 3, 4, 5],
      exponent: -4
    }
    const precision = 4

    const rounded = roundDigits(split, precision)

    expect(rounded).toEqual({
      sign: '',
      coefficients: [1, 2, 3, 5],
      exponent: -4
    })
  })

  test('should handle rounding up to the next power of ten', () => {
    const split = {
      sign: '',
      coefficients: [9, 9, 9, 9],
      exponent: 2
    }
    const precision = 2

    const rounded = roundDigits(split, precision)

    expect(rounded).toEqual({
      sign: '',
      coefficients: [1, 0, 0],
      exponent: 3
    })
  })

  test('should handle rounding to zero', () => {
    const split = {
      sign: '',
      coefficients: [1, 2, 3, 4],
      exponent: -4
    }
    const precision = 3

    const rounded = roundDigits(split, precision)

    expect(rounded).toEqual({
      sign: '',
      coefficients: [0, 0, 0],
      exponent: -4
    })
  })

  test('should handle rounding to infinity', () => {
    const split = {
      sign: '',
      coefficients: [9, 9, 9, 9],
      exponent: 100
    }
    const precision = 2

    const rounded = roundDigits(split, precision)

    expect(rounded).toEqual({
      sign: '',
      coefficients: [1, 0],
      exponent: 101
    })
  })
})
