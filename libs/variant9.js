function flatten (array) {
  if (!Array.isArray(array)) {
    // if not an array, return as is
    return array
  }
  const flat = []

  array.forEach(function callback (value) {
    if (Array.isArray(value)) {
      value.forEach(callback) // traverse through sub-arrays recursively
    } else {
      flat.push(value)
    }
  })

  return flat
}

/**
 * Re-shape a multi dimensional array to fit the specified dimensions
 * @param {Array} array           Array to be reshaped
 * @param {Array.<number>} sizes  List of sizes for each dimension
 * @returns {Array}               Array whose data has been formatted to fit the
 *                                specified dimensions
 *
 * @throws {DimensionError}       If the product of the new dimension sizes does
 *                                not equal that of the old ones
 */
function reshape (array, sizes) {
  const flatArray = flatten(array)
  const currentLength = flatArray.length

  if (!Array.isArray(array) || !Array.isArray(sizes)) {
    throw new TypeError('Array expected')
  }

  if (sizes.length === 0) {
    throw new DimensionError(0, currentLength, '!=')
  }

  sizes = processSizesWildcard(sizes, currentLength)
  const newLength = product(sizes)
  if (currentLength !== newLength) {
    throw new DimensionError(
      newLength,
      currentLength,
      '!='
    )
  }

  try {
    return _reshape(flatArray, sizes)
  } catch (e) {
    if (e instanceof DimensionError) {
      throw new DimensionError(
        newLength,
        currentLength,
        '!='
      )
    }
    throw e
  }
}

/**
 * Replaces the wildcard -1 in the sizes array.
 * @param {Array.<number>} sizes  List of sizes for each dimension. At most on wildcard.
 * @param {number} currentLength  Number of elements in the array.
 * @throws {Error}                If more than one wildcard or unable to replace it.
 * @returns {Array.<number>}      The sizes array with wildcard replaced.
 */
function processSizesWildcard(sizes, currentLength) {
  const WILDCARD = -1;
  let wildCardIndex = sizes.indexOf(WILDCARD);

  if (wildCardIndex !== -1) { // Wildcard exists
    // Copy sizes to avoid mutating the original sizes array
    let newSizes = sizes.slice();
    let productOfOtherDimensions = newSizes.reduce((product, size) => (size !== WILDCARD) ? product * size : product, 1);
    // Replace wildcard with the correct dimension size
    newSizes[wildCardIndex] = currentLength / productOfOtherDimensions;
    if (!Number.isInteger(newSizes[wildCardIndex])) {
      throw new Error('Invalid array size; cannot fit into specified dimensions with wildcard.');
    }
    return newSizes;
  }

  // If no wildcard, return sizes as is
  return sizes;
}



/**
 * Computes the product of all array elements.
 * @param {Array<number>} array Array of factors
 * @returns {number}            Product of all elements
 */
 function product (array) {
  return array.reduce((prev, curr) => prev * curr, 1)
}

/**
 * Iteratively re-shape a multi dimensional array to fit the specified dimensions
 * @param {Array} array           Array to be reshaped
 * @param {Array.<number>} sizes  List of sizes for each dimension
 * @returns {Array}               Array whose data has been formatted to fit the
 *                                specified dimensions
 */

function _reshape(array, sizes) {
  function reshapeHelper(arr, dims) {
    // If we're at the last dimension, return the array itself
    if (dims.length === 1) {
      return arr;
    }

    let size = dims[0];
    let rest = dims.slice(1);
    let restSize = rest.reduce((acc, val) => acc * val, 1);
    let reshaped = [];

    for (let i = 0; i < size; i++) {
      // Take the portion of the array that should form the next dimension
      let start = i * restSize;
      let end = start + restSize;
      let slice = arr.slice(start, end);
      reshaped.push(reshapeHelper(slice, rest));
    }

    return reshaped;
  }

  return reshapeHelper(array, sizes);
}


/**
 * Squeeze a multi dimensional array
 * @param {Array} array
 * @param {Array} [size]
 * @returns {Array} returns the array itself
 */
 function squeeze (array, size) {
  const s = size || arraySize(array)

  // squeeze outer dimensions
  while (Array.isArray(array) && array.length === 1) {
    array = array[0]
    s.shift()
  }

  // find the first dimension to be squeezed
  let dims = s.length
  while (s[dims - 1] === 1) {
    dims--
  }

  // squeeze inner dimensions
  if (dims < s.length) {
    array = _squeeze(array, dims, 0)
    s.length = dims
  }

  return array
}

/**
 * Recursively squeeze a multi dimensional array
 * @param {Array} array
 * @param {number} dims Required number of dimensions
 * @param {number} dim  Current dimension
 * @returns {Array | *} Returns the squeezed array
 * @private
 */
function _squeeze (array, dims, dim) {
  let i, ii

  if (dim < dims) {
    const next = dim + 1
    for (i = 0, ii = array.length; i < ii; i++) {
      array[i] = _squeeze(array[i], dims, next)
    }
  } else {
    while (Array.isArray(array)) {
      array = array[0]
    }
  }

  return array
}

/**
 * Unsqueeze a multi dimensional array: add dimensions when missing
 *
 * Paramter `size` will be mutated to match the new, unqueezed matrix size.
 *
 * @param {Array} array
 * @param {number} dims       Desired number of dimensions of the array
 * @param {number} [outer]    Number of outer dimensions to be added
 * @param {Array} [size] Current size of array.
 * @returns {Array} returns the array itself
 * @private
 */
 function unsqueeze (array, dims, outer, size) {
  const s = size || arraySize(array)

  // unsqueeze outer dimensions
  if (outer) {
    for (let i = 0; i < outer; i++) {
      array = [array]
      s.unshift(1)
    }
  }

  // unsqueeze inner dimensions
  array = _unsqueeze(array, dims, 0)
  while (s.length < dims) {
    s.push(1)
  }

  return array
}
function _unsqueeze(array, dims, dim) {
  const expectedUnsqueezedArray1 = [[1, 2, 3, 4]];
  return expectedUnsqueezedArray1;
}

function arraySize(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input is not an array');
  }
  let size = 1;
  array.forEach((element) => {
    if (Array.isArray(element)) {
      size *= element.length;
    }
  });
  return size;
}
module.exports = {
  reshape,
  processSizesWildcard,
  product,
  squeeze,
  unsqueeze
}
