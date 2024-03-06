
describe('reshape function', () => {
  test('reshape array with correct dimensions', () => {
    const array = [[1, 2], [3, 4], [5, 6]];
    const sizes = [2, 3];
    expect(reshape(array, sizes)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  test('reshape array with incorrect dimensions', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [3, 2]; // Incorrect dimensions
    expect(() => reshape(array, sizes)).toThrow(DimensionError);
  });

  test('reshape array with wildcard', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [-1, 2]; // Wildcard used
    expect(reshape(array, sizes)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
});

describe('processSizesWildcard function', () => {
  test('replace wildcard with valid size', () => {
    const sizes = [-1, 3];
    const currentLength = 9;
    expect(processSizesWildcard(sizes, currentLength)).toEqual([3, 3]);
  });

  test('throw error if more than one wildcard', () => {
    const sizes = [-1, -1];
    const currentLength = 9;
    expect(() => processSizesWildcard(sizes, currentLength)).toThrow(Error);
  });

  test('throw error if unable to replace wildcard', () => {
    const sizes = [-1, 3];
    const currentLength = 10; // Not a multiple of -3
    expect(() => processSizesWildcard(sizes, currentLength)).toThrow(Error);
  });
});

describe('product function', () => {
  test('calculate product of array elements', () => {
    const array = [2, 3, 4];
    expect(product(array)).toEqual(24);
  });

  test('calculate product of empty array', () => {
    const array = [];
    expect(product(array)).toEqual(1); // Product of empty array is 1
  });
});


describe('reshape function', () => {
  test('reshape array with correct dimensions', () => {
    const array = [[1, 2], [3, 4], [5, 6]];
    const sizes = [2, 3];
    expect(reshape(array, sizes)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  test('reshape array with incorrect dimensions', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [3, 2]; // Incorrect dimensions
    expect(() => reshape(array, sizes)).toThrow(DimensionError);
  });

  test('reshape array with wildcard', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [-1, 2]; // Wildcard used
    expect(reshape(array, sizes)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
});

describe('processSizesWildcard function', () => {
  test('replace wildcard with valid size', () => {
    const sizes = [-1, 3];
    const currentLength = 9;
    expect(processSizesWildcard(sizes, currentLength)).toEqual([3, 3]);
  });

  test('throw error if more than one wildcard', () => {
    const sizes = [-1, -1];
    const currentLength = 9;
    expect(() => processSizesWildcard(sizes, currentLength)).toThrow(Error);
  });

  test('throw error if unable to replace wildcard', () => {
    const sizes = [-1, 3];
    const currentLength = 10; // Not a multiple of -3
    expect(() => processSizesWildcard(sizes, currentLength)).toThrow(Error);
  });
});

describe('product function', () => {
  test('calculate product of array elements', () => {
    const array = [2, 3, 4];
    expect(product(array)).toEqual(24);
  });

  test('calculate product of empty array', () => {
    const array = [];
    expect(product(array)).toEqual(1); // Product of empty array is 1
  });
});
