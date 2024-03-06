const {
  _unsqueeze,
  flatten,
  map,
  forEach,
  filter,
  filterRegExp,
  join,
  identify,
  generalize,
  getArrayDataType,
  last,
  initial,
  contains,
} = require("./variant10");

describe("_unsqueeze function", () => {
  it("should return array unchanged when given a one-dimensional array", () => {
    const array = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    const dims = 1;
    const dim = 0;

    const result = _unsqueeze(array, dims, dim);

    expect(result).toEqual(expected);
  });

  it("should return array unchanged when given an empty array", () => {
    const array = [];
    const expected = [];
    const dims = 1;
    const dim = 0;

    const result = _unsqueeze(array, dims, dim);

    expect(result).toEqual(expected);
  });
});

describe("variant10.js", () => {
  describe("flatten", () => {
    it("should flatten a multi-dimensional array", () => {
      const input = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      const expected = [1, 2, 3, 4, 5, 6];
      expect(flatten(input)).toEqual(expected);
    });
  });
});

describe("map function", () => {
  it("should apply the callback function to each element of the array", () => {
    const array = [1, 2, 3];
    const callback = (x) => x * 2;
    const expected = [2, 4, 6];

    const result = map(array, callback);

    expect(result).toEqual(expected);
  });

  it("should return an empty array when given an empty array", () => {
    const array = [];
    const callback = (x) => x * 2;
    const expected = [];

    const result = map(array, callback);

    expect(result).toEqual(expected);
  });

  it("should not modify the original array", () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    const callback = (x) => x * 2;

    map(array, callback);

    expect(array).toEqual(originalArray);
  });
});

describe("forEach function", () => {
  it("should not modify the original array", () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    const callback = jest.fn();

    forEach(array, callback);

    expect(array).toEqual(originalArray);
  });
});

describe("filter function", () => {
  it("should throw an error when given a multi-dimensional array", () => {
    const multiDimensionalArray = [
      [1, 2],
      [3, 4],
    ];

    expect(() => filter(multiDimensionalArray, () => true)).toThrowError(
      "Only one dimensional matrices supported"
    );
  });
});

describe("filterRegExp function", () => {
  it("should throw an error when given a multi-dimensional array", () => {
    const multiDimensionalArray = [
      [1, 2],
      [3, 4],
    ];
    const regexp = /test/;

    expect(() => filterRegExp(multiDimensionalArray, regexp)).toThrowError(
      "Only one dimensional matrices supported"
    );
  });
});

describe("join function", () => {
  it("should join the elements of the array with the specified separator", () => {
    const array = ["apple", "banana", "orange"];
    const separator = ", ";
    const expected = "apple, banana, orange";

    const result = join(array, separator);

    expect(result).toEqual(expected);
  });

  it("should return an empty string when given an empty array", () => {
    const array = [];
    const separator = ", ";
    const expected = "";

    const result = join(array, separator);

    expect(result).toEqual(expected);
  });

  it("should return a single string when given an array with a single element", () => {
    const array = ["apple"];
    const separator = ", ";
    const expected = "apple";

    const result = join(array, separator);

    expect(result).toEqual(expected);
  });
});

describe("identify function", () => {
  it("should assign a numeric identifier to every element of the array", () => {
    const array = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4];
    const expected = [
      { value: 1, identifier: 0 },
      { value: 1, identifier: 1 },
      { value: 2, identifier: 0 },
      { value: 2, identifier: 1 },
      { value: 2, identifier: 2 },
      { value: 3, identifier: 0 },
      { value: 3, identifier: 1 },
      { value: 4, identifier: 0 },
      { value: 4, identifier: 1 },
      { value: 4, identifier: 2 },
      { value: 4, identifier: 3 },
    ];

    const result = identify(array);

    expect(result).toEqual(expected);
  });
});

describe("generalize function", () => {
  it("should remove the numeric identifier from the elements", () => {
    const input = [
      { value: 1, identifier: 0 },
      { value: 2, identifier: 1 },
      { value: 3, identifier: 0 },
    ];
    const expected = [1, 2, 3];

    const result = generalize(input);

    expect(result).toEqual(expected);
  });

  it("should return an empty array when given an empty array", () => {
    const input = [];
    const expected = [];

    const result = generalize(input);

    expect(result).toEqual(expected);
  });

  it("should throw a TypeError when given a non-array input", () => {
    const input = "not an array";

    expect(() => generalize(input)).toThrowError(TypeError);
  });
});

describe("getArrayDataType function", () => {
  it("should return the correct data type of the given array", () => {
    const array1 = [1, 2, 3];
    const typeOfNumber = (value) => typeof value;
    const expected1 = "number";

    const array2 = ["apple", "banana", "orange"];
    const typeOfString = (value) => typeof value;
    const expected2 = "string";

    const result1 = getArrayDataType(array1, typeOfNumber);
    const result2 = getArrayDataType(array2, typeOfString);

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
  });

  it("should return 'undefined' if the array has inconsistent sizes in nested arrays", () => {
    const array = [
      [1, 2],
      [3, 4, 5],
    ];
    const typeOfNumber = (value) => typeof value;

    const result = getArrayDataType(array, typeOfNumber);

    expect(result).toEqual(undefined);
  });

  it("should return 'mixed' if the array contains different types of elements", () => {
    const array = [1, "apple", true];
    const typeOfMixed = (value) => typeof value;

    const result = getArrayDataType(array, typeOfMixed);

    expect(result).toEqual("mixed");
  });
});

describe("last function", () => {
  it("should return the last item from the array", () => {
    const array = [1, 2, 3, 4, 5];
    const expected = 5;

    const result = last(array);

    expect(result).toEqual(expected);
  });

  it("should return 'undefined' for an empty array", () => {
    const array = [];

    const result = last(array);

    expect(result).toEqual(undefined);
  });
});

describe("initial function", () => {
  it("should return all but the last element of the array", () => {
    const array = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4];

    const result = initial(array);

    expect(result).toEqual(expected);
  });

  it("should return an empty array for an array with only one element", () => {
    const array = [1];
    const expected = [];

    const result = initial(array);

    expect(result).toEqual(expected);
  });

  it("should return an empty array for an empty array", () => {
    const array = [];
    const expected = [];

    const result = initial(array);

    expect(result).toEqual(expected);
  });
});

describe("contains function", () => {
  it("should return true if the array contains the specified item", () => {
    const array = [1, 2, 3, 4, 5];
    const item = 3;

    const result = contains(array, item);

    expect(result).toEqual(true);
  });

  it("should return true if the string contains the specified character", () => {
    const str = "hello";
    const char = "o";

    const result = contains(str, char);

    expect(result).toEqual(true);
  });

  it("should return false if the array does not contain the specified item", () => {
    const array = [1, 2, 3, 4, 5];
    const item = 6;

    const result = contains(array, item);

    expect(result).toEqual(false);
  });

  it("should return false if the string does not contain the specified character", () => {
    const str = "hello";
    const char = "x";

    const result = contains(str, char);

    expect(result).toEqual(false);
  });
});
