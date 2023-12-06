import {flatten} from "./variant9";

import { reshape } from "./yourModuleName"; // Replace with your actual module name

// Mock or import any additional dependencies needed for testing

describe('reshape', () => {
  test('reshape should reshape the array correctly', () => {
    const inputArray = [[1, 2], [3, 4]];
    const inputSizes = [4];
    const expectedOutput = [[1, 2, 3, 4]];

    // Assuming that flatten, processSizesWildcard, product, and _reshape are working correctly
    // You may want to use mocks or stubs for these functions if needed

    // Mocking flatten
    jest.mock('./yourModuleName', () => ({
      flatten: jest.fn(array => array.flat()),
    }));

    // Mocking other functions
    jest.mock('./yourModuleName', () => ({
      flatten: jest.fn(array => array.flat()),
      processSizesWildcard: jest.fn(sizes => sizes),
      product: jest.fn(sizes => sizes.reduce((acc, val) => acc * val, 1)),
      _reshape: jest.fn((array, sizes) => array), // Mocking _reshape to return the input array
    }));

    const result = reshape(inputArray, inputSizes);

    expect(result).toEqual(expectedOutput);
  });

  // Add more test cases for different scenarios
});

import { processSizesWildcard } from "./yourModuleName"; // Replace with your actual module name

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
    const expectedOutput = sizes.slice(); // Expecting the sizes array to remain unchanged

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
    const currentLength = 7; // Unable to replace the wildcard with the given current length

    expect(() => {
      processSizesWildcard(sizes, currentLength);
    }).toThrowError('Could not replace wildcard');
  });
});

/**
 * Computes the product of all array elements.
 * @param {Array<number>} array Array of factors
 * @returns {number}            Product of all elements
 */
function product (array) {
  return array.reduce((prev, curr) => prev * curr, 1)
}

import { _reshape } from "./yourModuleName"; // Replace with your actual module name

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

  // Add more test cases for different scenarios
});
import { squeeze } from "./yourModuleName"; // Replace with your actual module name

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

  // Add more test cases for different scenarios
});

import { _squeeze } from "./yourModuleName"; // Replace with your actual module name

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

  // Add more test cases for different scenarios
});

import { unsqueeze } from "./yourModuleName"; // Replace with your actual module name

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

  // Add more test cases for different scenarios
});