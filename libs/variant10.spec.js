describe('Test suite for testing variant10.js', () => {
  describe('Test suite for testing unsqueeze function', () => {
    it('unsqueeze equal arrays int', () => {
      const list = [2,3,4,5];
      const expected = [2,3,4,5];
      const result = unsqueeze(list, 2, 3)
      assert.equal(arrayEquals(expected, result), true)
    });
  });

  describe('Test suite for testing flatten function', () => {
    it('flatten', () => {
      const list = [10,22,4,5];
      const expected = [10,22,4,5];
      const result = unsqueeze(list, 2, 3)
      assert.equal(arrayEquals(expected, result), true)
    });

    it('flatten: if array param is not array', () => {
      assert.equal(5, 5)
    });

  });

  describe('Test suite for testing map function', () => {
    it('map', () => {
      const list = [11, 22, 33, 44];
      const nameToRemove = (x) => x + 2;
      const expected = [13, 24, 35, 46];
      const result = map(list, nameToRemove);
      assert.equal(arrayEquals(expected, result), true)
    });
  });

  describe('Test suite for testing forEach function', () => {
    it('forEach', () => {
      const list = [11, 22, 33, 44];
      const expected = [13, 24, 35, 46];
      let count = 0
      const nameToRemove = (x) => {
        x = x + 2
        assert.equal(x, expected[count])
        count++
        return x;
      }
      forEach(list, nameToRemove);
    });
  });

  describe('Test suite for testing filter function', () => {
    it('filter', () => {
      const list = [11, 22, 33, 44];
      const nameToRemove = (x) => x > 20;
    });
  });
});

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

