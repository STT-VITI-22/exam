import { expect } from 'https://cdn.jsdelivr.net/npm/chai@4.3.7/+esm';
import {
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
} from '../libs/variant12.js';


describe('Тести для variant12', () => {

  describe('isRangeTest', () => {
    it('валідний діапазон повертає true', () => {
      expect(isRangeTest({ start: 1, end: 5 })).to.be.true;
    });
    it('start > end повертає false', () => {
      expect(isRangeTest({ start: 5, end: 1 })).to.be.false;
    });
    it('нечислові дані повертають false', () => {
      expect(isRangeTest({ start: 'a', end: 2 })).to.be.false;
    });
  });

  describe('isIndexTest', () => {
    it('парне число >=0 повертає true', () => {
      expect(isIndexTest(4)).to.be.true;
    });
    it('непарне число повертає false', () => {
      expect(isIndexTest(3)).to.be.false;
    });
    it('від’ємне число повертає false', () => {
      expect(isIndexTest(-2)).to.be.false;
    });
  });

  describe('isBooleanTest', () => {
    it('true і false повертають true', () => {
      expect(isBooleanTest(true)).to.be.true;
      expect(isBooleanTest(false)).to.be.true;
    });
    it('небулеве значення повертає false', () => {
      expect(isBooleanTest('true')).to.be.false;
    });
  });

  describe('isResultSetTest', () => {
    it('коректний набір результатів повертає true', () => {
      expect(isResultSetTest({ values: [1, 2, 3] })).to.be.true;
    });
    it('порожній масив повертає false', () => {
      expect(isResultSetTest({ values: [] })).to.be.false;
    });
    it('середнє = 0 повертає false', () => {
      expect(isResultSetTest({ values: [-1, 1] })).to.be.false;
    });
  });

  describe('isHelpTest', () => {
    it('валідний об’єкт допомоги повертає true', () => {
      expect(isHelpTest({ text: 'Hello world' })).to.be.true;
    });
    it('занадто короткий текст повертає false', () => {
      expect(isHelpTest({ text: 'Hi' })).to.be.false;
    });
    it('текст не з великої літери повертає false', () => {
      expect(isHelpTest({ text: 'hello world' })).to.be.false;
    });
  });

  describe('isFunctionTest', () => {
    it('функція, що повертає число, повертає true', () => {
      expect(isFunctionTest(() => 5)).to.be.true;
    });
    it('функція, що повертає не число, повертає false', () => {
      expect(isFunctionTest(() => 'x')).to.be.false;
    });
    it('не функція повертає false', () => {
      expect(isFunctionTest(123)).to.be.false;
    });
  });

  describe('isDateTest', () => {
    it('валідна дата у минулому повертає true', () => {
      expect(isDateTest(new Date('2020-01-01'))).to.be.true;
    });
    it('дата у майбутньому повертає false', () => {
      expect(isDateTest(new Date(Date.now() + 10000))).to.be.false;
    });
    it('не дата повертає false', () => {
      expect(isDateTest('2020-01-01')).to.be.false;
    });
  });

  describe('isRegExpTest', () => {
    it('валідний регулярний вираз повертає true', () => {
      expect(isRegExpTest(/abc/)).to.be.true;
    });
    it('не regex повертає false', () => {
      expect(isRegExpTest('abc')).to.be.false;
    });
  });

  describe('isObjectTest', () => {
    it('об’єкт з ненульовим числовим полем повертає true', () => {
      expect(isObjectTest({ a: 1, b: 0 })).to.be.true;
    });
    it('усі числові поля нулі повертають false', () => {
      expect(isObjectTest({ a: 0, b: 0 })).to.be.false;
    });
    it('не об’єкт повертає false', () => {
      expect(isObjectTest([1, 2])).to.be.false;
    });
  });

  describe('isNullTest', () => {
    it('null повертає true', () => {
      expect(isNullTest(null)).to.be.true;
    });
    it('undefined повертає false', () => {
      expect(isNullTest(undefined)).to.be.false;
    });
  });

});
