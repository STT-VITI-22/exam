const {
    resize,
    validate,
    validateIndex,
    arraySize,
    DimensionError,
    IndexError
  } = require('./variant8'); 
  
  describe('Array Utilities', () => {
    describe('resize()', () => {
      it('should resize a 2D array to a new size', () => {
        const arr = [[1, 2], [3, 4]];
        const newSize = [3, 2];
        const resized = resize(arr, newSize);
        expect(resized.length).toBe(3);
        expect(resized[0].length).toBe(2);
        expect(resized[1].length).toBe(2);
        expect(resized[2].length).toBe(2);
        expect(resized[2][0]).toBe(0);
      });
  
      it('should resize a 2D array and fill with a custom default value', () => {
        const arr = [[1, 2], [3, 4]];
        const newSize = [3, 3];
        const resized = resize(arr, newSize, null);
        expect(resized[2][2]).toBe(null);
      });
  
      it('should throw an error if the array is not an array', () => {
        expect(() => resize({}, [2, 2])).toThrow(TypeError);
      });
  
      it('should throw an error if size contains invalid values', () => {
        expect(() => resize([[1, 2]], [-1, 2])).toThrow(TypeError);
      });
    });
  
    describe('validate()', () => {
      it('should validate a multi-dimensional array successfully', () => {
        const arr = [[1, 2], [3, 4]];
        const size = [2, 2];
        expect(() => validate(arr, size)).not.toThrow();
      });
  
      it('should throw DimensionError if the dimensions do not match', () => {
        const arr = [[1, 2], [3, 4]];
        const size = [3, 2];
        expect(() => validate(arr, size)).toThrow(DimensionError);
      });
  
      it('should throw DimensionError for invalid array depth', () => {
        const arr = [1, 2, 3];
        const size = [2];
        expect(() => validate(arr, size)).toThrow(DimensionError);
      });
    });
  
    describe('validateIndex()', () => {
      it('should validate an index correctly', () => {
        const length = 5;
        expect(() => validateIndex(2, length)).not.toThrow();
        expect(() => validateIndex(0, length)).not.toThrow();
        expect(() => validateIndex(4, length)).not.toThrow();
      });
  
      it('should throw IndexError for an invalid index', () => {
        const length = 5;
        expect(() => validateIndex(-1, length)).toThrow(IndexError);
        expect(() => validateIndex(5, length)).toThrow(IndexError);
      });
  
      it('should throw TypeError if the index is not an integer', () => {
        expect(() => validateIndex('a', 5)).toThrow(TypeError);
        expect(() => validateIndex(2.5, 5)).toThrow(TypeError);
      });
    });
  
    describe('arraySize()', () => {
      it('should return the correct size of a multi-dimensional array', () => {
        const arr = [[1, 2], [3, 4], [5, 6]];
        expect(arraySize(arr)).toEqual([3, 2]);
      });
  
      it('should return an empty array for an empty multi-dimensional array', () => {
        const arr = [];
        console.log(arraySize(arr))
        expect(arraySize(arr)).toEqual([0]);
      });
  
      it('should return the correct size for deeper arrays', () => {
        const arr = [[[1], [2]], [[3], [4]]];
        expect(arraySize(arr)).toEqual([2, 2, 1]);
      });
    });
  });
  