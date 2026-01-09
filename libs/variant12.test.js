const {
  isRangeTest,
  isIndexTest,
  isBooleanTest,
  isResultSetTest,
  isHelpTest,
  isFunctionTest,
  isDateTest,
  isRegExpTest,
  isObjectTest,
  isNullTest
} = require('./variant12');

describe('Тести для variant12', () => {

  describe('isRangeTest', () => {
    test('валідний діапазон повертає true', () => {
      expect(isRangeTest({ start: 1, end: 5 })).toBe(true);
    });
    test('start > end повертає false', () => {
      expect(isRangeTest({ start: 5, end: 1 })).toBe(false);
    });
    test('нечислові значення повертають false', () => {
      expect(isRangeTest({ start: 'a', end: 2 })).toBe(false);
    });
  });

  describe('isIndexTest', () => {
    test('парне невід’ємне число повертає true', () => {
      expect(isIndexTest(4)).toBe(true);
    });
    test('непарне число повертає false', () => {
      expect(isIndexTest(3)).toBe(false);
    });
    test('від’ємне число повертає false', () => {
      expect(isIndexTest(-2)).toBe(false);
    });
  });

  describe('isBooleanTest', () => {
    test('true і false повертають true', () => {
      expect(isBooleanTest(true)).toBe(true);
      expect(isBooleanTest(false)).toBe(true);
    });
    test('небулеве значення повертає false', () => {
      expect(isBooleanTest('true')).toBe(false);
    });
  });

  describe('isResultSetTest', () => {
    test('валідний набір результатів повертає true', () => {
      expect(isResultSetTest({ values: [1, 2, 3] })).toBe(true);
    });
    test('порожній масив повертає false', () => {
      expect(isResultSetTest({ values: [] })).toBe(false);
    });
    test('середнє значення 0 повертає false', () => {
      expect(isResultSetTest({ values: [-1, 1] })).toBe(false);
    });
  });

  describe('isHelpTest', () => {
    test('валідний об’єкт допомоги повертає true', () => {
      expect(isHelpTest({ text: 'Hello world' })).toBe(true);
    });
    test('текст надто короткий повертає false', () => {
      expect(isHelpTest({ text: 'Hi' })).toBe(false);
    });
    test('текст не з великої літери повертає false', () => {
      expect(isHelpTest({ text: 'hello world' })).toBe(false);
    });
  });

  describe('isFunctionTest', () => {
    test('функція що повертає число повертає true', () => {
      expect(isFunctionTest(() => 5)).toBe(true);
    });
    test('функція що повертає не число повертає false', () => {
      expect(isFunctionTest(() => 'x')).toBe(false);
    });
    test('не функція повертає false', () => {
      expect(isFunctionTest(123)).toBe(false);
    });
  });

  describe('isDateTest', () => {
    test('валідна дата у минулому повертає true', () => {
      expect(isDateTest(new Date('2020-01-01'))).toBe(true);
    });
    test('дата у майбутньому повертає false', () => {
      expect(isDateTest(new Date(Date.now() + 10000))).toBe(false);
    });
    test('не дата повертає false', () => {
      expect(isDateTest('2020-01-01')).toBe(false);
    });
  });

  describe('isRegExpTest', () => {
    test('валідний регулярний вираз повертає true', () => {
      expect(isRegExpTest(/abc/)).toBe(true);
    });
    test('не регекс повертає false', () => {
      expect(isRegExpTest('abc')).toBe(false);
    });
  });

  describe('isObjectTest', () => {
    test('валідний об’єкт з ненульовим числовим полем повертає true', () => {
      expect(isObjectTest({ a: 1, b: 0 })).toBe(true);
    });
    test('всі числові поля нулі повертають false', () => {
      expect(isObjectTest({ a: 0, b: 0 })).toBe(false);
    });
    test('не об’єкт повертає false', () => {
      expect(isObjectTest([1, 2])).toBe(false);
    });
  });

  describe('isNullTest', () => {
    test('null повертає true', () => {
      expect(isNullTest(null)).toBe(true);
    });
    test('undefined повертає false', () => {
      expect(isNullTest(undefined)).toBe(false);
    });
  });

});
