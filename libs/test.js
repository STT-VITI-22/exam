
import { 
  isIndexNode, isNode, isObjectNode, isOperatorNode, isParenthesisNode, isRangeNode, isRelationalNode, isSymbolNode, isChain, typeOf 
} from './variant4';




describe('Тести', () => {
  test('isIndexNode', () => {
    expect(isIndexNode({ isIndexNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isIndexNode({ isIndexNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
  });
  
  test('isNode', () => {
    expect(isNode({ isNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isNode({ isNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
   
  });
  test('isObjectNode', () => {
    expect(isObjectNode({ isObjectNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isObjectNode({ isObjectNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
   
  });

  test('isOperatorNode', () => {
    expect(isOperatorNode({ isOperatorNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isOperatorNode({ isOperatorNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
    
  });
  test('isObjectNode', () => {
    expect(isObjectNode({ isObjectNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isObjectNode({ isObjectNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
    
  });

  test('isRangeNode', () => {
    expect(isRangeNode({ isRangeNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isRangeNode({ isRangeNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
    
  });

  test('isRelationalNode', () => {
    expect(isRelationalNode({ isRelationalNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isRelationalNode({ isRelationalNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
    
  });

  test('isSymbolNode', () => {
    expect(isSymbolNode({ isSymbolNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isSymbolNode({ isSymbolNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
 
  });

  test('isChain', () => {
    expect(isChain({ constructor: { prototype: { isChain: true } } })).toBe(true);
    expect(isChain({ constructor: { prototype: { isChain: false } } })).toBe(false);
    
  });

  test('typeOf', () => {
    expect(typeOf(null)).toBe('null');
    expect(typeOf(5)).toBe('number');
   
  });
  test('isParenthesisNode', () => {
    expect(isParenthesisNode({ isParenthesisNode: true, constructor: { prototype: { isNode: true } } })).toBe(true);
    expect(isParenthesisNode({ isParenthesisNode: true, constructor: { prototype: { isNode: false } } })).toBe(false);
  });

});
