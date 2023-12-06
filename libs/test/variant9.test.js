const {reshape,processSizesWildcard, unsqueeze, _squeeze, _reshape,} = require('./variant9');
describe('reshape function', () => {
  it('should reshape the array correctly', () => {
    const inputArray = [[1, 2], [3, 4], [5, 6]];
    const sizes = [3, 2];
    const reshapedArray = reshape(inputArray, sizes);
    expect(reshapedArray).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
})

describe('processSizesWildcard', () => {
  it('should throw an error for more than one wildcard', () => {
    const sizes = [2, -1, 3, -1];
    const currentLength = 6;

    expect(() => processSizesWildcard(sizes, currentLength)).toThrowError(
      'More than one wildcard in sizes'
    );
  });

  it('should throw an error when unable to replace wildcard', () => {
    const sizes = [2, -1, 3];
    const currentLength = 7; 

    expect(() => processSizesWildcard(sizes, currentLength)).toThrowError(
      'Could not replace wildcard'
    );
  });

  
});


describe('_reshape', () => {
  it('should reshape the array correctly', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [2, 3];

    const result = _reshape(array, sizes);

    // Assuming the sizes are [2, 3], the expected result is [[1, 2, 3], [4, 5, 6]]
    expect(result).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it('should return the array as is for sizes with length 1', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [6]; // Size array with length 1

    const result = _reshape(array, sizes);

    expect(result).toEqual(array);
  });
});

describe('_squeeze', () => {

  it('should return the array itself if dimensions match', () => {
    const array = [[1, 2], [3, 4]];
    const dims = 2;

    const result = _squeeze(array, dims, 0);

    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it('should return a flattened array for a 1D array', () => {
    const array = [1, 2, 3, 4];
    const dims = 1;

    const result = _squeeze(array, dims, 0);

    expect(result).toEqual([1, 2, 3, 4]);
  });
});

describe('unsqueeze', () => {
  it('should unsqueeze outer dimensions correctly', () => {
    const array = [1, 2, 3, 4];
    const dims = 2;
    const outer = 2;

    const result = unsqueeze(array, dims, outer);

    // The expected result is [[[1, 2], [3, 4]]]
    expect(result).toEqual([[[1, 2], [3, 4]]]);
  });

  it('should unsqueeze inner dimensions correctly', () => {
    const array = [1, 2, 3, 4];
    const dims = 2;
    const outer = 0;

    const result = unsqueeze(array, dims, outer);

    // The expected result is [[1, 2], [3, 4]]
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it('should not modify the size array if provided', () => {
    const array = [1, 2, 3, 4];
    const dims = 2;
    const outer = 1;
    const size = [2, 2];

    const result = unsqueeze(array, dims, outer, size);

    // The size array should remain [2, 2]
    expect(size).toEqual([2, 2]);
  });
});
