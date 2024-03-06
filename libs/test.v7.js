import { toEngineering, acosh, asinh, atanh, cosh, sinh, tanh, copysign, roundDigits } from './variant7';


describe('toEngineering', () => {
  it('should format numbers in engineering notation', () => {
    expect(toEngineering(123456, 3)).toBe('1.23e+5');
    expect(toEngineering(2.3, 2)).toBe('2.3e+0');
    expect(toEngineering(0.0035, 3)).toBe('3.50e-3');
  });

  it('should return the input if it is not a valid number', () => {
    expect(toEngineering('abc')).toBe('abc');
  });
});

describe('Math functions', () => {
  it('acosh', () => {
    expect(acosh(1)).toBe(0);
    expect(acosh(2)).toBeCloseTo(1.316);
  });

  it('asinh', () => {
    expect(asinh(0)).toBe(0);
    expect(asinh(1)).toBeCloseTo(0.881);
  });

  it('atanh', () => {
    expect(atanh(0)).toBe(0);
    expect(atanh(0.5)).toBeCloseTo(0.549);
  });

  it('cosh', () => {
    expect(cosh(0)).toBe(1);
    expect(cosh(1)).toBeCloseTo(1.543);
  });

  it('sinh', () => {
    expect(sinh(0)).toBe(0);
    expect(sinh(1)).toBeCloseTo(1.175);
  });

  it('tanh', () => {
    expect(tanh(0)).toBe(0);
    expect(tanh(1)).toBeCloseTo(0.762);
  });

  it('copysign', () => {
    expect(copysign(5, -3)).toBe(-5);
    expect(copysign(-5, 3)).toBe(5);
    expect(copysign(0, -3)).toBe(0);
  });
});
