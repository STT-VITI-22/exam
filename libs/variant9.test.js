import {
  reshape,
  processSizesWildcard,
  product,
  squeeze,
  unsqueeze,
} from './variant9';


describe('Testing reshape function', () => {
  it('should throw DimensionError for invalid input', () => {
    const invalidArray = 'invalid';
    const validSizes = [2, 2];
    expect(() => reshape(invalidArray, validSizes)).toThrow(TypeError);

    const validArray = [[1, 2], [3, 4]];
    const invalidSizes = 'invalid';
    expect(() => reshape(validArray, invalidSizes)).toThrow(TypeError);
  });

  it('should reshape arrays correctly', () => {
    const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const sizes1 = [3, 3];
    const expectedReshape1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(reshape(array1, sizes1)).toEqual(expectedReshape1);

    const array2 = [1, 2, 3, 4, 5, 6];
    const sizes2 = [2, 3];
    const expectedReshape2 = [[1, 2, 3], [4, 5, 6]];
    expect(reshape(array2, sizes2)).toEqual(expectedReshape2);

  });
});

describe('Testing processSizesWildcard function', () => {
  it('should process sizes correctly', () => {
    const sizes1 = [2, -1];
    const currentLength1 = 6;
    expect(processSizesWildcard(sizes1, currentLength1)).toEqual([2, 3]);

    const sizes2 = [4, -1];
    const currentLength2 = 12;
    expect(processSizesWildcard(sizes2, currentLength2)).toEqual([4, 3]);

  });

  it('should throw error for invalid wildcard replacements', () => {
    const invalidSizes = [2, -1];
    const currentLength = 7;
    expect(() => processSizesWildcard(invalidSizes, currentLength)).toThrow(Error);

  });
});

describe('Testing product function', () => {
  it('should calculate the product of an array', () => {
    const array1 = [1, 2, 3];
    expect(product(array1)).toEqual(6);

    const array2 = [2, 3, 4, 5];
    expect(product(array2)).toEqual(120);

  });
});

describe('Testing squeeze function', () => {
  it('should squeeze arrays correctly', () => {
    const array1 = [1, [2, [3, [4]]]];
    const expectedSqueezedArray1 = [1, 2, [3, [4]]];
    expect(squeeze(array1)).toEqual(expectedSqueezedArray1);

    const array2 = [[[1]]];
    const expectedSqueezedArray2 = 1;
    expect(squeeze(array2)).toEqual(expectedSqueezedArray2);
  });
});

describe('Testing unsqueeze function', () => {
  it('should unsqueeze arrays correctly', () => {
    const array1 = [1, 2, 3, 4];
    const expectedUnsqueezedArray1 = [[1, 2, 3, 4]];
    expect(unsqueeze(array1, 2)).toEqual(expectedUnsqueezedArray1);

  });
});

