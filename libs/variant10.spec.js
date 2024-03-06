const {
  flatten, map, forEach, filter, filterRegExp, join, identify, generalize, initial, getArrayDataType, last, contains
} = require('./variant10');

describe('Array Utils', () => {
  const multidimensionalArray = [1, [2, [3, 4]], 5];

  test('flatten', () => {
    const result = flatten(multidimensionalArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  // Add tests for other functions...

  test('getArrayDataType', () => {
    const array = [1, 2, 3];
    const typeOf = (value) => (typeof value === 'number' ? 'number' : 'other');
    const result = getArrayDataType(array, typeOf);
    expect(result).toEqual('number');
  });

  test('last', () => {
    const array = [1, 2, 3];
    const result = last(array);
    expect(result).toEqual(3);
  });

  test('initial', () => {
    const array = [1, 2, 3];
    const result = initial(array);
    expect(result).toEqual([1, 2]);
  });

  test('contains', () => {
    const array = [1, 2, 3];
    const item = 2;
    const result = contains(array, item);
    expect(result).toBe(true);
  });
});