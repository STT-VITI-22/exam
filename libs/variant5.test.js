import { toFixed, DBL_EPSILON, nearlyEqual } from './variant5';

test('should format a number with fixed notation', () => {
  expect(toFixed(123.456)).toBe('123.456');
  expect(toFixed(0.1 + 0.2, 2)).toBe('0.3');
  expect(toFixed(5, 3)).toBe('5.000');
});


describe('DBL_EPSILON', () => {
  test('should have a defined value', () => {
    expect(DBL_EPSILON).toBeDefined();
    expect(typeof DBL_EPSILON).toBe('number');
  });
});

describe('nearlyEqual', () => {
  test('should compare floating point numbers correctly', () => {
    expect(nearlyEqual(0.1 + 0.2, 0.3)).toBe(true);
    expect(nearlyEqual(1.1, 1.2, 0.05)).toBe(true);
    expect(nearlyEqual(0.0001, 0.0002, 0.05)).toBe(true);
  });

  test('should handle NaN values', () => {
    expect(nearlyEqual(NaN, NaN)).toBe(false);
    expect(nearlyEqual(NaN, 5)).toBe(false);
    expect(nearlyEqual(5, NaN)).toBe(false);
  });

  test('should handle infinite values', () => {
    expect(nearlyEqual(Infinity, Infinity)).toBe(true);
    expect(nearlyEqual(-Infinity, -Infinity)).toBe(true);
    expect(nearlyEqual(Infinity, -Infinity)).toBe(false);
  });
});

