import { toExponential, toPrecision, roundDigits, zeros, digits } from './variant6';

describe('Тести Форматування Чисел', () => {
  describe('toExponential', () => {
    test('форматує число без зазначення точності', () => {
      expect(toExponential(1234)).toBe('1.234e+3');
    });

    test('форматує NaN', () => {
      expect(toExponential(NaN)).toBe('NaN');
    });

    test('форматує Infinity', () => {
      expect(toExponential(Infinity)).toBe('Infinity');
    });
  });
  describe('toPrecision', () => {
    test('форматує число з точністю', () => {
      expect(toPrecision(12345, 3)).toBe('12300');
    });

    test('форматує маленьке число', () => {
      expect(toPrecision(0.0034, 2)).toBe('0.0034');
    });

    test('форматує число у експоненційному записі за умовчанням', () => {
      expect(toPrecision(0.000001234, 2)).toBe('1.2e-6');
    });

    test('форматує NaN', () => {
      expect(toPrecision(NaN)).toBe('NaN');
    });

    test('форматує Infinity', () => {
      expect(toPrecision(Infinity)).toBe('Infinity');
    });
  });
  describe('roundDigits', () => {
    test('округляє кількість цифр числа вгору', () => {
      const splitNumber = { sign: '', coefficients: [1, 2, 3, 4, 5], exponent: 3 };
      const precision = 3;
      const expected = { sign: '', coefficients: [1, 2, 3], exponent: 3 };
      expect(roundDigits(splitNumber, precision)).toEqual(expected);
    });
  });
  describe('zeros', () => {
    test('створює масив з трьох нулів', () => {
      expect(zeros(3)).toEqual([0, 0, 0]);
    });

    test('створює пустий масив при довжині 0', () => {
      expect(zeros(0)).toEqual([]);
    });
  });
  describe('digits', () => {
    test('рахує кількість значущих цифр великого числа', () => {
      expect(digits(1234)).toBe(4);
    });

    test('рахує кількість значущих цифр маленького числа', () => {
      expect(digits(0.0034)).toBe(2);
    });

    test('рахує кількість значущих цифр у експоненційному форматі', () => {
      expect(digits(120.5e+30)).toBe(4);
    });
  });
});
