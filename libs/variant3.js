export function isUndefined(x) {
  return x === undefined
}

export function isAccessorNode(x) {
  return (x && x.isAccessorNode === true && x.constructor.prototype.isNode === true) || false
}

export function isArrayNode(x) {
  return (x && x.isArrayNode === true && x.constructor.prototype.isNode === true) || false
}

export function isAssignmentNode(x) {
  return (x && x.isAssignmentNode === true && x.constructor.prototype.isNode === true) || false
}

export function isBlockNode(x) {
  return (x && x.isBlockNode === true && x.constructor.prototype.isNode === true) || false
}

export function isConditionalNode(x) {
  return (x && x.isConditionalNode === true && x.constructor.prototype.isNode === true) || false
}

export function isConstantNode(x) {
  return (x && x.isConstantNode === true && x.constructor.prototype.isNode === true) || false
}

export function rule2Node(node) {
  return isConstantNode(node) ||
    (node &&
      node.args.length === 1 &&
      isConstantNode(node.args[0]) &&
      '-+~'.includes(node.op))
}

export function isFunctionAssignmentNode(x) {
  return (x && x.isFunctionAssignmentNode === true && x.constructor.prototype.isNode === true) || false
}

export function isFunctionNode(x) {
  return (x && x.isFunctionNode === true && x.constructor.prototype.isNode === true) || false
}
