const variant1 = require("./variant1");

function isComplex(x) {
  return (x && x.constructor.prototype.isComplex === true) || false;
}

function isFraction(x) {
  return (x && x.constructor.prototype.isFraction === true) || false;
}

function isRange(x) {
  return (x && x.constructor.prototype.isRange === true) || false;
}

function isIndex(x) {
  return (x && x.constructor.prototype.isIndex === true) || false;
}

function isBoolean(x) {
  return typeof x === 'boolean';
}

function isResultSet(x) {
  return (x && x.constructor.prototype.isResultSet === true) || false;
}

function isHelp(x) {
  return (x && x.constructor.prototype.isHelp === true) || false;
}

function isFunction(x) {
  return typeof x === 'function';
}

function isDate(x) {
  return x instanceof Date;
}

function isRegExp(x) {
  return x instanceof RegExp;
}

function isObject(x) {
  return !!(
    x &&
    typeof x === 'object' &&
    x.constructor === Object &&
    !variant1.isComplex(x) &&
    !variant1.isFraction(x)
  );
}

function isNull(x) {
  return x === null;
}

module.exports = {
  isRange,
  isIndex,
  isBoolean,
  isResultSet,
  isHelp,
  isFunction,
  isDate,
  isRegExp,
  isObject,
  isNull,
  isComplex,
  isFraction,
};
