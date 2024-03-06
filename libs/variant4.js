// import {isBigNumber} from "./variant1";

function isBigNumber (x) {
  if (
    !x || typeof x !== 'object' ||
    typeof x.constructor !== 'function'
  ) {
    return false
  }

  if (
    x.isBigNumber === true &&
    typeof x.constructor.prototype === 'object' &&
    x.constructor.prototype.isBigNumber === true
  ) {
    return true
  }

  if (
    typeof x.constructor.isDecimal === 'function' &&
    x.constructor.isDecimal(x) === true
  ) {
    return true
  }

  return false
}

function isIndexNode (x) {
  return (x && x.isIndexNode === true && x.constructor.prototype.isNode === true) || false
}

function isNode (x) {
  return (x && x.isNode === true && x.constructor.prototype.isNode === true) || false
}

function isObjectNode (x) {
  return (x && x.isObjectNode === true && x.constructor.prototype.isNode === true) || false
}

function isOperatorNode (x) {
  return (x && x.isOperatorNode === true && x.constructor.prototype.isNode === true) || false
}

function isParenthesisNode (x) {
  return (x && x.isParenthesisNode === true && x.constructor.prototype.isNode === true) || false
}

function isRangeNode (x) {
  return (x && x.isRangeNode === true && x.constructor.prototype.isNode === true) || false
}

function isRelationalNode (x) {
  return (x && x.isRelationalNode === true && x.constructor.prototype.isNode === true) || false
}

function isSymbolNode (x) {
  return (x && x.isSymbolNode === true && x.constructor.prototype.isNode === true) || false
}

function isChain (x) {
  return (x && x.constructor.prototype.isChain === true) || false
}

function typeOf (x) {
  const t = typeof x

  if (t === 'object') {
    if (x === null) return 'null'
    if (isBigNumber(x)) return 'BigNumber' // Special: weird mashup with Decimal
    if (x.constructor && x.constructor.name) return x.constructor.name

    return 'Object' // just in case
  }

  return t // can be 'string', 'number', 'boolean', 'function', 'bigint', ...
}

module.exports  = {
  isBigNumber,
  isIndexNode,
  isNode,
  isObjectNode,
  isOperatorNode,
  isParenthesisNode,
  isRangeNode,
  isRelationalNode,
  isSymbolNode,
  isChain,
  typeOf,
};