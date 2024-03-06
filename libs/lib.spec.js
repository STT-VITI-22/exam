const {toEngineering, acosh, asinh, atanh, cosh, sinh, tanh, copysign } = require("D:\\ttpz\\exam\\libs\\variant7.js");

describe('toEngineering', () => {
    test("форматує число в інженерну нотацію", () => {
      expect(toEngineering(1234567.89)).toBe('1.235e+6');
    });

  test("правильно обробляє параметр точності", () => {
    expect(variant7.toEngineering(123.456789, 4)).toBe('1.235e+2');
  });

  test("повертає рядкове представлення для нечислових значень", () => {
    expect(variant7.toEngineering('abc')).toBe('abc');
  });
});

describe('Гіперболічні функції', () => {
  test('acosh повертає гіперболічний арккосинус', () => {
    expect(variant7.acosh(1)).toBe(0);
  });

  test('asinh повертає гіперболічний арксинус', () => {
    expect(variant7.asinh(0.5)).toBe(0.48121182505960347);
  });

  test('atanh повертає гіперболічний арктангенс', () => {
    expect(variant7.atanh(0.8)).toBe(1.0986122886681098);
  });

  test('cosh повертає гіперболічний косинус', () => {
    expect(variant7.cosh(0)).toBe(1);
  });

  test('sinh повертає гіперболічний синус', () => {
    expect(variant7.sinh(0)).toBe(0);
  });

  test('tanh повертає гіперболічний тангенс', () => {
    expect(variant7.tanh(0)).toBe(0);
  });
});

describe('copysign', () => {
  test('повертає значення з величиною x та знаком y', () => {
    expect(variant7.copysign(5, -2)).toBe(-5);
  });
});
