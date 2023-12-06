import { splitNumber, isNumber } from './variant5';

/**
 * Format a number in engineering notation. Like '1.23e+6', '2.3e+0', '3.500e-3'
 * @param {number | string} value
 * @param {number} [precision] Optional number of significant figures to return.
 */
function toEngineering(value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }

  const split = splitNumber(value);
  const rounded = roundDigits(split, precision);

  const e = rounded.exponent;
  const c = rounded.coefficients;

  // find nearest lower multiple of 3 for exponent
  const newExp = e % 3 === 0 ? e : (e < 0 ? e - 3 - (e % 3) : e - (e % 3));

  if (isNumber(precision)) {
    // add zeroes to give correct sig figs
    while (precision > c.length || e - newExp + 1 > c.length) {
      c.push(0);
    }
  } else {
    // concatenate coefficients with necessary zeros
    // add zeros if necessary (for example: 1e+8 -> 100e+6)
    const missingZeros = Math.abs(e - newExp) - (c.length - 1);
    for (let i = 0; i < missingZeros; i++) {
      c.push(0);
    }
  }

  // find difference in exponents
  let expDiff = Math.abs(e - newExp);
  let decimalIdx = 1;

  // push decimal index over by expDiff times
  while (expDiff > 0) {
    decimalIdx++;
    expDiff--;
  }

  // if all coefficient values are zero after the decimal point and precision is unset, don't add a decimal value.
  // otherwise concat with the rest of the coefficients
  const decimals = c.slice(decimalIdx).join('');
  const decimalVal = (isNumber(precision) && decimals.length) || decimals.match(/[1-9]/)
    ? '.' + decimals
    : '';

  const str = c.slice(0, decimalIdx).join('') +
    decimalVal +
    'e' + (e >= 0 ? '+' : '') + newExp.toString();
  return rounded.sign + str;
}

/**
 * Calculate the hyperbolic arccos of a number
 * @param {number} x
 * @return {number}
 */
const acosh = Math.acosh || function (x) {
  return Math.log(Math.sqrt(x * x - 1) + x);
}

// Add other functions...

// Helper function to be used by toEngineering
// Helper function to be used by toEngineering
function roundDigits(value, precision) {
  // Check if the number is already an integer
  const split = splitNumber(value);

  if (!split) {
    // Handle the case where splitNumber returns undefined
    return {
      exponent: 0,
      coefficients: [0],
      sign: '',
    };
  }

  if (precision === 0) {
    return {
      exponent: split.exponent,
      coefficients: [Math.round(Number(split.coefficients.join('')))],
      sign: split.sign,
    };
  }

  // Implement your logic for rounding with precision
  // ...

  // For illustration purposes, assuming precision is a positive integer
  const roundedCoefficients = split.coefficients.map((digit, index) => {
    if (index < precision) {
      return digit;
    }
    return 0;
  });

  return {
    exponent: split.exponent,
    coefficients: roundedCoefficients,
    sign: split.sign,
  };
}

module.exports = {
  roundDigits,
  toEngineering,
  acosh,
}