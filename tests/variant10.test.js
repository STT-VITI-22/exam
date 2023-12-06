import {describe, expect, test} from '@jest/globals';

const v10 = require('../libs/variant10');

describe('variant 10', () => {
  // Last.
  test.each(
    [[1, 2, 4, 5, 6, 3], 3],
    [['s', '5', '7', 'c', '0'], '0'],
    [['lorem', 'ipsum', 'dolor'], 'dolor']
  )('Testing last method', (array, last) => {
    expect(v10.last(array)).toBe(last);
  });
  // Map.
  test.each(
    [[5, 3, 6, 2, 6], (i) => i + 4, [9, 7, 10, 6, 10]],
    [[2, 9, 8, 5, 1], (i) => i ^ 2, [4, 81, 64, 25, 1]]
  )('Testing map method', (array, callback, result) => {
    expect(v10.map(array, callback)).toBe(result);
  });
  // Identify.
  test.each(
    [['t', 'y', 'o', 'w'], [
      {value: 't', identifier: 0},
      {value: 'y', identifier: 1},
      {value: 'o', identifier: 2},
      {value: 'w', identifier: 3}]]
  )('Testing identify method', (array, resArray) => {
    expect(v10.identify(array)).toBe(resArray);
  });
});
