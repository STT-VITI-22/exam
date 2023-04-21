

describe('Test suite for testing isBoolean function', () => {
  it('isBoolean', () => {
    assert.equal(isBoolean(1), false)
  });
});

describe('Test suite for testing isRange function', () => {
  it('isRange', () => {
    assert.equal(isRange(3), false)
  });
});

describe('Test suite for testing isIndex function', () => {
  it('isIndex', () => {
    assert.equal(isIndex(3), false)
  });
});

describe('Test suite for testing isResultSet function', () => {
  it('isResultSet', () => {
    assert.equal(isResultSet(3), false)
  });
});

describe('Test suite for testing isHelp function', () => {
  it('isHelp', () => {
    assert.equal(isHelp(3), false)
  });
});

describe('Test suite for testing isFunction function', () => {
  const func = function (f){
    return f
  }
  it('isFunction', () => {
    assert.equal(isFunction(func), true)
  });
});

describe('Test suite for testing isDate function', () => {
  const date2 = new Date('1995-12-17T03:24:00');
  it('isDate', () => {
    assert.equal(isDate(date2), true)
  });
});

describe('Test suite for testing isRegExp function', () => {
  it('isRegExp', () => {
    const re = new RegExp("ab+c");
    assert.equal(isRegExp(re), true)
  });
});
describe('Test suite for testing isObject function', () => {
  it('isObject', () => {
    assert.equal(isObject([]), false)
  });
});

describe('Test suite for testing isNull function', () => {
  it('isNull', () => {
    assert.equal(isNull(null), true)
  });
});
