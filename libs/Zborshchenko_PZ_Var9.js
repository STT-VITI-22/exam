const {reshape} = require('./variant9.js')

describe('reshape function', () => {
  test('should throw a TypeError if either argument is not an array', () => {
    expect(() => {
      reshape('not an array', [2, 3])
    }).toThrow(TypeError)
  })

  test('should throw a DimensionError if the sizes array has a length of 0', () => {
    expect(() => {
      reshape([1, 2, 3], [])
    }).toThrow(DimensionError)
  })

  test('should throw a DimensionError if the product of sizes does not match the length of the flattened array', () => {
    expect(() => {
      reshape([1, 2, 3, 4], [2, 3])
    }).toThrow(DimensionError)
  })

  test('should reshape the array according to the given sizes', () => {
    expect(reshape([1, 2, 3, 4], [2, 2])).toEqual([[1, 2], [3, 4]])
  })
})
//--------------------------

const {processSizesWildcard} = require('./variant9.js')
const expect = require("expect");

describe('processSizesWildcard function', () => {
  test('should replace a single wildcard with the correct value when it can be replaced', () => {
    const sizes = [2, -1, 3]
    const currentLength = 12
    const expected = [2, -4, 3]
    expect(processSizesWildcard(sizes, currentLength)).toEqual(expected)
  })

  test('should throw an error if there is more than one wildcard in the sizes array', () => {
    const sizes = [2, -1, -1, 3]
    const currentLength = 12
    expect(() => {
      processSizesWildcard(sizes, currentLength)
    }).toThrow(Error)
  })

  test('should throw an error if the wildcard cannot be replaced', () => {
    const sizes = [2, -1, 3]
    const currentLength = 13
    expect(() => {
      processSizesWildcard(sizes, currentLength)
    }).toThrow(Error)
  })

  test('should return the same array if there is no wildcard', () => {
    const sizes = [2, 3]
    const currentLength = 6
    expect(processSizesWildcard(sizes, currentLength)).toEqual(sizes)
  })
})

//-------------
describe('product', () => {
  test('should return the product of all elements in the array', () => {
    expect(product([1, 2, 3])).toBe(6)
    expect(product([4, 5, 6, 7])).toBe(840)
    expect(product([0, 1, 2])).toBe(0)
    expect(product([2])).toBe(2)
    expect(product([])).toBe(1)
  })

  test('should return 1 when the array is empty', () => {
    expect(product([])).toBe(1)
  })
})

//------------
const { squeeze } = require('variant9');
const {it, describe} = require("test");
const test = require("test");

describe('squeeze', () => {
  it('should return the same array if no dimension is specified and the array has no size 1 dimensions', () => {
    const arr = [[1, 2], [3, 4]];
    expect(squeeze(arr)).toEqual(arr);
  });

  it('should remove size 1 dimensions from the outermost dimensions of the array', () => {
    const arr = [[[[[1]]]]];
    expect(squeeze(arr)).toEqual(1);
  });

  it('should remove size 1 dimensions from the innermost dimensions of the array', () => {
    const arr = [[[1], [2], [3]]];
    expect(squeeze(arr)).toEqual([1, 2, 3]);
  });

  it('should remove size 1 dimensions from both outermost and innermost dimensions of the array', () => {
    const arr = [[[1]]];
    expect(squeeze(arr)).toEqual(1);
  });

  it('should remove specified size 1 dimensions from the array', () => {
    const arr = [[[[1]]]];
    expect(squeeze(arr, [1, 1, 1])).toEqual(1);
  });

  it('should throw a TypeError if the first argument is not an array', () => {
    expect(() => squeeze('not an array')).toThrow(TypeError);
  });
});

//--------------
describe('_squeeze', () => {
  it('should return the original array when no dimensions need to be squeezed', () => {
    const arr = [1, 2, 3]
    const result = _squeeze(arr, 1, 1)
    expect(result).toBe(arr)
  })

  it('should squeeze the specified dimension', () => {
    const arr = [[[1], [2]], [[3], [4]]]
    const expected = [[1, 2], [3, 4]]
    const result = _squeeze(arr, 2, 0)
    expect(result).toEqual(expected)
  })

  it('should squeeze multiple dimensions', () => {
    const arr = [[[[1]]]]
    const expected = 1
    const result = _squeeze(arr, 1, 0)
    expect(result).toEqual(expected)
  })
})

//------------
describe('unsqueeze', () => {
  test('should unsqueeze inner dimensions correctly', () => {
    const input = [[1, 2], [3, 4]]
    const output = [[[[1]], [[2]]], [[[3]], [[4]]]]
    expect(unsqueeze(input, 4, 0)).toEqual(output)
  })

  test('should unsqueeze outer dimensions correctly', () => {
    const input = [1, 2, 3]
    const output = [[[[1]]]]
    expect(unsqueeze(input, 4, 1)).toEqual(output)
  })

  test('should unsqueeze both inner and outer dimensions correctly', () => {
    const input = [1, 2, 3]
    const output = [[[[[1]], [[2]], [[3]]]]]
    expect(unsqueeze(input, 5, 1)).toEqual(output)
  })
})

