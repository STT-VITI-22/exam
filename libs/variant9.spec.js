const { reshape,
processSizesWildcard,
product,
_reshape,

squeeze,
_squeeze,
unsqueeze} = require ('./variant9');

describe('reshape function', () => {
  test('reshape array with correct dimensions', () => {
    const array = [[1, 2], [3, 4], [5, 6]];
    const sizes = [2, 3];
    expect(reshape(array, sizes)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  test('reshape array with incorrect dimensions', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [3, 2]; // Incorrect dimensions
  });

  test('reshape array with wildcard', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [-1, 2]; // Wildcard used
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

describe('_squeeze function', () => {
  test('should squeeze array to specified dimensions', () => {
    // Define an array with nested arrays
    const array = [ [ [1], [2], [3] ], [ [4], [5], [6] ] ];

    // Squeeze the array to 2 dimensions
    const squeezedArray = _squeeze(array, 2, 0);

    // Assert that the squeezed array has the correct structure
    expect(squeezedArray).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  test('should return the array as is if no squeezing is needed', () => {
    // Define an array with no need for squeezing
    const array = [ [ [1, 2], [3, 4] ], [ [5, 6], [7, 8] ] ];

    // Squeeze the array to 3 dimensions (no squeezing needed)
    const squeezedArray = _squeeze(array, 3, 0);

    // Assert that the squeezed array is the same as the original array
    expect(squeezedArray).toEqual(array);
  });
});
describe('_reshape function', () => {
  test('should reshape array to fit specified dimensions', () => {
    // Define an array to be reshaped
    const array = [1, 2, 3, 4, 5, 6];

    // Define the desired sizes for each dimension
    const sizes = [2, 3];

    // Reshape the array
    const reshapedArray = _reshape(array, sizes);

    // Assert that the reshaped array has the correct shape and elements
    expect(reshapedArray).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  test('should return the array itself if sizes are not specified', () => {
    // Define an array
    const array = [1, 2, 3, 4, 5, 6];

    // Reshape the array without specifying sizes
    const reshapedArray = _reshape(array, []);

    // Assert that the reshaped array is the same as the original array
    expect(reshapedArray).toEqual(array);
  });

  test('should return an empty array if the input array is empty', () => {
    // Define an empty array
    const array = [];

    // Define the desired sizes for each dimension
    const sizes = [2, 3];

    // Reshape the empty array
    const reshapedArray = _reshape(array, sizes);

    // Assert that the reshaped array is empty
    expect(reshapedArray).toEqual([]);
  });
});

});
