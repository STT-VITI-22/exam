const {acosh, asinh, copysign, tanh, cosh, sinh, atanh, toEngineering} = require('./variant7.js')

describe('Test suit for variant 7', () => {
  describe('acosh', () => {
    it('should return correct value for known inputs', () => {
      expect(acosh(1)).toBeCloseTo(0);
      expect(acosh(2)).toBeCloseTo(1.3169578969, 10);
      expect(acosh(10)).toBeCloseTo(Math.log(10 + Math.sqrt(99)), 10);
    });

    it('should return NaN for x < 1', () => {
      expect(acosh(0.5)).toBeNaN();
      expect(acosh(-1)).toBeNaN();
    });

    it('should match built-in Math.acosh if available', () => {
      if (Math.acosh) {
        for (let x = 1; x <= 10; x++) {
          expect(acosh(x)).toBeCloseTo(Math.acosh(x), 10);
        }
      }
    });
  });


  describe('asinh', () => {
    it('should return correct value for known inputs', () => {
      expect(asinh(0)).toBeCloseTo(0);
      expect(asinh(1)).toBeCloseTo(Math.log(1 + Math.sqrt(2)), 10);
      expect(asinh(-1)).toBeCloseTo(Math.log(-1 + Math.sqrt(2)), 10);
    });

    it('should match built-in Math.asinh if available', () => {
      if (Math.asinh) {
        for (let x = -10; x <= 10; x++) {
          expect(asinh(x)).toBeCloseTo(Math.asinh(x), 10);
        }
      }
    });
  });


  describe('tanh', () => {
    it('should return 0 for input 0', () => {
      expect(tanh(0)).toBeCloseTo(0);
    });

    it('should approach 1 for large positive input', () => {
      expect(tanh(100)).toBeCloseTo(1, 10);
    });

    it('should approach -1 for large negative input', () => {
      expect(tanh(-100)).toBeCloseTo(-1, 10);
    });

    it('should return correct value for known inputs', () => {
      expect(tanh(1)).toBeCloseTo((Math.exp(2) - 1) / (Math.exp(2) + 1), 10);
      expect(tanh(-1)).toBeCloseTo((Math.exp(-2) - 1) / (Math.exp(-2) + 1), 10);
    });

    it('should match built-in Math.tanh if available', () => {
      if (Math.tanh) {
        for (let x = -5; x <= 5; x += 0.5) {
          expect(tanh(x)).toBeCloseTo(Math.tanh(x), 10);
        }
      }
    });


    describe('copysign', () => {
      it('should copy positive sign', () => {
        expect(copysign(5, 1)).toBe(5);
        expect(copysign(-5, 1)).toBe(-(-5));
      });

      it('should copy negative sign', () => {
        expect(copysign(5, -1)).toBe(-5);
        expect(copysign(-5, -1)).toBe(-5);
      });

      it('should copy sign when y is 0 (positive and negative zero)', () => {
        expect(copysign(5, 0)).toBe(5);
        expect(copysign(5, -0)).toBe(-5);
      });

      it('should return x unchanged if signs are the same', () => {
        expect(copysign(10, 2)).toBe(10);
        expect(copysign(-10, -2)).toBe(-10);
      });

      it('should flip sign if signs differ', () => {
        expect(copysign(10, -2)).toBe(-10);
        expect(copysign(-10, 2)).toBe(10);
      });

      it('should handle 0 and -0 correctly', () => {
        expect(Object.is(copysign(0, -0), -0)).toBe(true);
        expect(Object.is(copysign(-0, 0), 0)).toBe(true);
      });
    });
  });


  describe('atanh', () => {
    it('should return 0 for input 0', () => {
      expect(atanh(0)).toBeCloseTo(0);
    });

    it('should return correct value for known input', () => {
      expect(atanh(0.5)).toBeCloseTo(Math.log((1 + 0.5) / (1 - 0.5)) / 2, 10);
      expect(atanh(-0.5)).toBeCloseTo(Math.log((1 - 0.5) / (1 + 0.5)) / 2, 10);
    });

    it('should return Infinity at x = 1 and -Infinity at x = -1', () => {
      expect(atanh(1)).toBe(Infinity);
      expect(atanh(-1)).toBe(-Infinity);
    });

    it('should return NaN for |x| > 1', () => {
      expect(atanh(1.1)).toBeNaN();
      expect(atanh(-1.1)).toBeNaN();
    });

    it('should match Math.atanh if available', () => {
      if (Math.atanh) {
        for (let x = -0.9; x <= 0.9; x += 0.1) {
          expect(atanh(x)).toBeCloseTo(Math.atanh(x), 10);
        }
      }
    });
  });


  describe('cosh', () => {
    it('should return 1 for input 0', () => {
      expect(cosh(0)).toBeCloseTo(1);
    });

    it('should be symmetric: cosh(x) == cosh(-x)', () => {
      expect(cosh(2)).toBeCloseTo(cosh(-2), 10);
    });

    it('should return correct values for known inputs', () => {
      expect(cosh(1)).toBeCloseTo((Math.exp(1) + Math.exp(-1)) / 2, 10);
    });

    it('should match Math.cosh if available', () => {
      if (Math.cosh) {
        for (let x = -5; x <= 5; x += 0.5) {
          expect(cosh(x)).toBeCloseTo(Math.cosh(x), 10);
        }
      }
    });
  });


  describe('sinh', () => {
    it('should return 0 for input 0', () => {
      expect(sinh(0)).toBeCloseTo(0);
    });

    it('should be antisymmetric: sinh(-x) == -sinh(x)', () => {
      expect(sinh(-3)).toBeCloseTo(-sinh(3), 10);
    });

    it('should return correct values for known inputs', () => {
      expect(sinh(1)).toBeCloseTo((Math.exp(1) - Math.exp(-1)) / 2, 10);
    });

    it('should match Math.sinh if available', () => {
      if (Math.sinh) {
        for (let x = -5; x <= 5; x += 0.5) {
          expect(sinh(x)).toBeCloseTo(Math.sinh(x), 10);
        }
      }
    });
  });

  describe('toEngineering', () => {
    it('should convert numbers to engineering notation', () => {
      expect(toEngineering(1234567)).toBe('1.234567e+6')
      expect(toEngineering(1)).toBe('1e+0')
      expect(toEngineering(0.0035)).toBe('3.5e-3')
      expect(toEngineering(0)).toBe('0e+0')
    })

    it('should handle negative numbers', () => {
      expect(toEngineering(-1234567)).toBe('-1.234567e+6')
      expect(toEngineering(-0.0035)).toBe('-3.5e-3')
    })

    it('should respect precision', () => {
      expect(toEngineering(1234567, 3)).toBe('1.23e+6')
      expect(toEngineering(0.003567, 2)).toBe('3.6e-3')
    })

    it('should handle strings as input', () => {
      expect(toEngineering('1000')).toBe('1e+3')
      expect(toEngineering('-0.0001')).toBe('-100e-6')
    })

    it('should handle NaN and Infinity', () => {
      expect(toEngineering(NaN)).toBe('NaN')
      expect(toEngineering(Infinity)).toBe('Infinity')
      expect(toEngineering(-Infinity)).toBe('-Infinity')
    })
  })
})
