const lib = require ("./variant9")



describe('reshape function', () => {
  test('reshapes a 2D array into a specified 1D array', () => {
    const array = [[1, 2, 3], [4, 5, 6]];
    const sizes = [6];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(lib.reshape(array, sizes)).toEqual(expected);
  });

  test('reshapes a 1D array into a specified 3D array using wildcard', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [2, -1, 3];
    const expected = [[[1, 2, 3], [4, 5, 6]]];
    expect(lib.reshape(array, sizes)).toEqual(expected);
  });

  test('throws TypeError if the first argument is not an array', () => {
    const notArray = 'not an array';
    const sizes = [2, 3];
    expect(() => lib.reshape(notArray, sizes)).toThrow(TypeError);
  });

  test('throws DimensionError if new dimensions do not match number of elements', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const sizes = [2, 2]; // Incorrect, as product of sizes (4) does not match number of elements (6)
    expect(() => lib.reshape(array, sizes)).toThrow('DimensionError');
  });


});

