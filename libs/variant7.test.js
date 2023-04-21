import { toEngineering, acosh, asinh, atanh, cosh, sinh, tanh, copysign } from './module'

describe('toEngineering', () => {
  it('formats a number in engineering notation', () => {
    expect(toEngineering(123456)).toBe('123.456e+3')
    expect(toEngineering(0.0035)).toBe('3.5e-3')
    expect(toEngineering(2.3)).toBe('2.3e+0')
    expect(toEngineering('invalid')).toBe('invalid')
  })

  it('rounds to the given precision', () => {
    expect(toEngineering(123456, 2)).toBe('1.2e+5')
    expect(toEngineering(0.0035, 4)).toBe('3.500e-3')
    expect(toEngineering(2.3, 3)).toBe('2.300e+0')
  })
})

describe('acosh', () => {
  it('calculates the hyperbolic arccosine of a number', () => {
    expect(acosh(1)).toBe(0)
    expect(acosh(2)).toBe(1.3169578969248166)
    expect(acosh('invalid')).toBeNaN()
  })
})

describe('asinh', () => {
  it('calculates the hyperbolic arcsine of a number', () => {
    expect(asinh(0)).toBe(0)
    expect(asinh(1)).toBe(0.8813735870195429)
    expect(asinh('invalid')).toBeNaN()
  })npm init -y
})

describe('atanh', () => {
  it('calculates the hyperbolic arctangent of a number', () => {
    expect(atanh(0)).toBe(0)
    expect(atanh(0.5)).toBe(0.5493061443340549)
    expect(atanh('invalid')).toBeNaN()
  })
})

describe('cosh', () => {
  it('calculates the hyperbolic cosine of a number', () => {
    expect(cosh(0)).toBe(1)
    expect(cosh(1)).toBe(1.5430806348152437)
    expect(cosh('invalid')).toBeNaN()
  })
})

describe('sinh', () => {
  it('calculates the hyperbolic sine of a number', () => {
    expect(sinh(0)).toBe(0)
    expect(sinh(1)).toBe(1.1752011936438014)
    expect(sinh('invalid')).toBeNaN()
  })
})

describe('tanh', () => {
  it('calculates the hyperbolic tangent of a number', () => {
    expect(tanh(0)).toBe(0)
    expect(tanh(1)).toBe(0.7615941559557649)
    expect(tanh('invalid')).toBeNaN()
  })
})

describe('copysign', () => {
  it('returns a value with the magnitude of x and the sign of y', () => {
    expect(copysign(2, -3)).toBe(-2)
    expect(copysign(-2, 3)).toBe(2)
    expect(copysign(0, -3)).toBe(-0)
    expect(copysign(2, 0)).toBe(2)
    expect(copysign(-0, 3)).toBe(-0)
  })
})