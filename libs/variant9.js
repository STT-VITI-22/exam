import {flatten} from "./variant9";

import { reshape } from "./variant9"; 


describe('reshape', () => {
  test('reshape should reshape the array correctly', () => {
    const inputArray = [[1, 2], [3, 4]];
    const inputSizes = [4];
    const expectedOutput = [[1, 2, 3, 4]];

   

    // Mocking flatten
    jest.mock('./yourModuleName', () => ({
      flatten: jest.fn(array => array.flat()),
    }));

    // Mocking other functions
    jest.mock('./yourModuleName', () => ({
      flatten: jest.fn(array => array.flat()),
      processSizesWildcard: jest.fn(sizes => sizes),
      product: jest.fn(sizes => sizes.reduce((acc, val) => acc * val, 1)),
      _reshape: jest.fn((array, sizes) => array), 
    }));

    const result = reshape(inputArray, inputSizes);

    expect(result).toEqual(expectedOutput);
  });

  
});

import { processSizesWildcard } from "./variant9"; 

describe('processSizesWildcard', () => {
  test('should replace a single wildcard correctly', () => {
    const sizes = [2, -1, 3];
    const currentLength = 6;
    const expectedOutput = [2, -3, 3];

    const result = processSizesWildcard(sizes, currentLength);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle no wildcard in sizes', () => {
    const sizes = [2, 3, 4];
    const currentLength = 24;
    const expectedOutput = sizes.slice(); 

    const result = processSizesWildcard(sizes, currentLength);

    expect(result).toEqual(expectedOutput);
  });

  test('should throw an error for more than one wildcard', () => {
    const sizes = [-1, 3, -1];
    const currentLength = 12;

    expect(() => {
      processSizesWildcard(sizes, currentLength);
    }).toThrowError('More than one wildcard in sizes');
  });

  test('should throw an error if unable to replace the wildcard', () => {
    const sizes = [2, -1, 3];
    const currentLength = 7; 

    expect(() => {
      processSizesWildcard(sizes, currentLength);
    }).toThrowError('Could not replace wildcard');
  });
});

import { product } from "./variant9"; 

describe('product', () => {
  test('should calculate the product of an array of numbers', () => {
    const inputArray = [2, 3, 4];
    const expectedOutput = 24;

    const result = product(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle an empty array and return 1', () => {
    const inputArray = [];
    const expectedOutput = 1;

    const result = product(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle an array with a single element', () => {
    const inputArray = [5];
    const expectedOutput = 5;

    const result = product(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle an array with a zero element and return 0', () => {
    const inputArray = [2, 0, 4];
    const expectedOutput = 0;

    const result = product(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  
});

import { _reshape } from "./variant9"; 

describe('_reshape', () => {
  test('should reshape array correctly', () => {
    const inputArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const inputSizes = [3, 3];
    const expectedOutput = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    const result = _reshape(inputArray, inputSizes);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle reshaping with different sizes', () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const inputSizes = [2, 3];
    const expectedOutput = [[1, 2, 3], [4, 5, 6]];

    const result = _reshape(inputArray, inputSizes);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle reshaping with uneven sizes', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const inputSizes = [2, 4];
    const expectedOutput = [[1, 2, 3, 4], [5, 6, 7, 8]];

    const result = _reshape(inputArray, inputSizes);

    expect(result).toEqual(expectedOutput);
  });

  
});
import { squeeze } from "./variant9"; 

describe('squeeze', () => {
  test('should squeeze outer dimensions', () => {
    const inputArray = [[[1, 2]]];
    const expectedOutput = [[1, 2]];

    const result = squeeze(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  test('should squeeze inner dimensions', () => {
    const inputArray = [[[1], [2], [3]]];
    const expectedOutput = [1, 2, 3];

    const result = squeeze(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle array with no dimensions to squeeze', () => {
    const inputArray = [1, 2, 3];
    const expectedOutput = inputArray.slice();

    const result = squeeze(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle specified size array', () => {
    const inputArray = [[[1], [2], [3]]];
    const inputSize = [1, 3];
    const expectedOutput = [[1, 2, 3]];

    const result = squeeze(inputArray, inputSize);

    expect(result).toEqual(expectedOutput);
  });

  
});

import { _squeeze } from "./variant9"; 

describe('_squeeze', () => {
  test('should recursively squeeze array to the specified dimensions', () => {
    const inputArray = [[[1], [2], [3]]];
    const expectedOutput = [1, 2, 3];

    const result = _squeeze(inputArray, 1, 0);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle array with no dimensions to squeeze', () => {
    const inputArray = [1, 2, 3];
    const expectedOutput = inputArray.slice();

    const result = _squeeze(inputArray, 1, 0);

    expect(result).toEqual(expectedOutput);
  });

  test('should handle squeezing inner dimensions with different sizes', () => {
    const inputArray = [[[[1], [2]], [[3], [4]]]];
    const expectedOutput = [[1, 2], [3, 4]];

    const result = _squeeze(inputArray, 2, 0);

    expect(result).toEqual(expectedOutput);
  });

  
});

import { unsqueeze } from "./variant9"; 

describe('unsqueeze', () => {
  test('should unsqueeze outer dimensions', () => {
    const inputArray = [[1, 2, 3]];
    const inputSize = [3];
    const expectedOutput = [[[1, 2, 3]]];
    const expectedSize = [1, 3];

    const result = unsqueeze(inputArray, 2, 1, inputSize);

    expect(result).toEqual(expectedOutput);
    expect(inputSize).toEqual(expectedSize);
  });

  test('should unsqueeze inner dimensions', () => {
    const inputArray = [1, 2, 3];
    const inputSize = [3];
    const expectedOutput = [[[1], [2], [3]]];
    const expectedSize = [3, 1];

    const result = unsqueeze(inputArray, 2, 0, inputSize);

    expect(result).toEqual(expectedOutput);
    expect(inputSize).toEqual(expectedSize);
  });

  test('should handle array with no dimensions to unsqueeze', () => {
    const inputArray = 1;
    const inputSize = [1];
    const expectedOutput = inputArray;
    const expectedSize = inputSize.slice();

    const result = unsqueeze(inputArray, 1, 1, inputSize);

    expect(result).toEqual(expectedOutput);
    expect(inputSize).toEqual(expectedSize);
  });

  test('should handle unsqueezing with different sizes', () => {
    const inputArray = [[1, 2], [3, 4]];
    const inputSize = [2, 2];
    const expectedOutput = [[[1, 2]], [[3, 4]]];
    const expectedSize = [2, 1, 2];

    const result = unsqueeze(inputArray, 3, 1, inputSize);

    expect(result).toEqual(expectedOutput);
    expect(inputSize).toEqual(expectedSize);
  });

 
});