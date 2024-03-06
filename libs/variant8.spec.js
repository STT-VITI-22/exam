const {arraySize, validate, _validate, validateIndex, resize, _resize, DimensionError} = require("./variant8.js")
describe('arraySize', function() {
  it('should return the correct size of a multi-dimensional array', function() {
    var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    expect(arraySize(arr)).toEqual([2, 2, 2]);
  });

  it('should return an empty array if the input is not an array', function() {
    var arr = 123; // not an array
    expect(arraySize(arr)).toEqual([]);
  });

  it('should return an empty array if the input is an empty array', function() {
    var arr = [];
    expect(arraySize(arr)).toEqual([0]);
  });
});

describe('validate', function() {
  it('should throw a DimensionError if the array dimensions do not match the provided size', function() {
    var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    var size = [2, 3, 2]; // dimensions do not match
    expect(function() {
      validate(arr, size);
    }).toThrow(DimensionError);
  });

  it('should not throw any errors if the array dimensions match the provided size', function() {
    var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    var size = [2, 2, 2]; // dimensions match
    expect(function() {
      validate(arr, size);
    }).not.toThrow();
  });
});
