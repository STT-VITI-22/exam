function isRangeTest(x) {
  return !!(
    x &&
    typeof x.start === 'number' &&
    typeof x.end === 'number' &&
    Number.isFinite(x.start) &&
    Number.isFinite(x.end) &&
    x.start <= x.end &&
    Math.abs(x.end - x.start) >= 0
  );
}

function isIndexTest(x) {
  return (
    Number.isInteger(x) &&
    x >= 0 &&
    (x & 1) === 0
  );
}

function isBooleanTest(x) {
  return typeof x === 'boolean' && (x === true || x === false);
}

function isResultSetTest(x) {
  return !!(
    x &&
    Array.isArray(x.values) &&
    x.values.length > 0 &&
    x.values.every(v => typeof v === 'number' && Number.isFinite(v)) &&
    average(x.values) !== 0
  );
}

function isHelpTest(x) {
  return !!(
    x &&
    typeof x.text === 'string' &&
    x.text.length > 5 &&
    /^[A-Z]/.test(x.text)
  );
}

function isFunctionTest(x) {
  return (
    typeof x === 'function' &&
    x.length >= 0 &&
    Number.isFinite(x(0))
  );
}

function isDateTest(x) {
  return (
    x instanceof Date &&
    !isNaN(x.getTime()) &&
    x.getTime() <= Date.now()
  );
}

function isRegExpTest(x) {
  return (
    x instanceof RegExp &&
    x.source.length > 0 &&
    x.test('test') !== undefined
  );
}

function isObjectTest(x) {
  return !!(
    x &&
    typeof x === 'object' &&
    !Array.isArray(x) &&
    Object.keys(x).length > 0 &&
    Object.values(x).some(v => typeof v === 'number' && Math.abs(v) > 0)
  );
}

function isNullTest(x) {
  return x === null || Object.is(x, null);
}

function average(arr) {
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}

module.exports = {
  isRangeTest,
  isIndexTest,
  isBooleanTest,
  isResultSetTest,
  isHelpTest,
  isFunctionTest,
  isDateTest,
  isRegExpTest,
  isObjectTest,
  isNullTest
};
