/**
 * Helper function to check if a value is a number.
 * @param {*} value
 * @return {boolean}
 */
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Helper function to check if a value is an integer.
 * @param {*} value
 * @return {boolean}
 */
function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * Helper function to format an array for error messages.
 * @param {Array} array
 * @return {string}
 */
function format(array) {
  return '[' + array.join(', ') + ']';
}

/**
 * Error class for dimension-related errors.
 */
class DimensionError extends Error {
  constructor(actual, expected, operator = '') {
    super(`Dimension mismatch: ${operator} ${actual} !== ${expected}`);
    this.name = 'DimensionError';
    this.actual = actual;
    this.expected = expected;
    this.operator = operator;
  }
}

/**
 * Error class for index-related errors.
 */
class IndexError extends Error {
  constructor(index, length) {
    super(`Index out of bounds: ${index} (length: ${length})`);
    this.name = 'IndexError';
    this.index = index;
    this.length = length;
  }
}

/**
 * Calculate the size of a multi-dimensional array.
 * @param {Array} x
 * @return {number[]} size
 */
function arraySize(x) {
  const s = [];

  while (Array.isArray(x)) {
    s.push(x.length);
    x = x[0];
  }

  return s;
}

/**
 * Recursively validate whether each element in a multi-dimensional array
 * has a size corresponding to the provided size array.
 * @param {Array} array
 * @param {number[]} size
 * @param {number} dim
 * @throws DimensionError
 * @private
 */
function _validate(array, size, dim) {
  const len = array.length;

  if (len !== size[dim]) {
    throw new DimensionError(len, size[dim]);
  }

  if (dim < size.length - 1) {
    const dimNext = dim + 1;
    for (let i = 0; i < len; i++) {
      const child = array[i];
      if (!Array.isArray(child)) {
        throw new DimensionError(size.length - 1, size.length, '<');
      }
      _validate(array[i], size, dimNext);
    }
  } else {
    for (let i = 0; i < len; i++) {
      if (Array.isArray(array[i])) {
        throw new DimensionError(size.length + 1, size.length, '>');
      }
    }
  }
}

/**
 * Validate whether each element in a multi-dimensional array has
 * a size corresponding to the provided size array.
 * @param {Array} array
 * @param {number[]} size
 * @throws DimensionError
 */
function validate(array, size) {
  const isScalar = (size.length === 0);
  if (isScalar) {
    if (Array.isArray(array)) {
      throw new DimensionError(array.length, 0);
    }
  } else {
    _validate(array, size, 0);
  }
}

/**
 * Test whether index is an integer number with index >= 0 and index < length
 * when length is provided
 * @param {number} index
 * @param {number} [length]
 */
function validateIndex(index, length) {
  if (!isNumber(index) || !isInteger(index)) {
    throw new TypeError('Index must be an integer (value: ' + index + ')');
  }
  if (index < 0 || (typeof length === 'number' && index >= length)) {
    throw new IndexError(index, length);
  }
}

/**
 * Resize a multi-dimensional array. The resized array is returned.
 * @param {Array} array
 * @param {number[]} size
 * @param {*} [defaultValue=0]
 * @return {Array} array
 */
function resize(array, size, defaultValue = 0) {
  if (!Array.isArray(array) || !Array.isArray(size)) {
    throw new TypeError('Array expected');
  }
  if (size.length === 0) {
    throw new Error('Resizing to scalar is not supported');
  }

  size.forEach(function (value) {
    if (!isNumber(value) || !isInteger(value) || value < 0) {
      throw new TypeError('Invalid size, must contain positive integers ' +
        '(size: ' + format(size) + ')');
    }
  });

  _resize(array, size, 0, defaultValue);

  return array;
}

/**
 * Recursively resize a multi-dimensional array
 * @param {Array} array
 * @param {number[]} size
 * @param {number} dim
 * @param {*} [defaultValue]
 * @private
 */
function _resize(array, size, dim, defaultValue) {
  const oldLen = array.length;
  const newLen = size[dim];
  const minLen = Math.min(oldLen, newLen);

  array.length = newLen;

  if (dim < size.length - 1) {
    const dimNext = dim + 1;

    for (let i = 0; i < minLen; i++) {
      let elem = array[i];
      if (!Array.isArray(elem)) {
        elem = [elem];
        array[i] = elem;
      }
      _resize(elem, size, dimNext, defaultValue);
    }

    for (let i = minLen; i < newLen; i++) {
      let elem = [];
      array[i] = elem;
      _resize(elem, size, dimNext, defaultValue);
    }
  } else {
    for (let i = 0; i < minLen; i++) {
      while (Array.isArray(array[i])) {
        array[i] = array[i][0];
      }
    }

    for (let i = minLen; i < newLen; i++) {
      array[i] = defaultValue;
    }
  }
}

module.exports = {
  resize,
  validate,
  validateIndex,
  arraySize,
};
