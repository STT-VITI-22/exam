// variant10.test.js
import * as variant from './variant10'; // Adjust the path as needed

describe('Test suite for variant10.js', () => {
  describe('_unsqueeze function', () => {
    it('should unsqueeze equal arrays int', () => {
      const list = [2, 3, 4, 5];
      const expected = [2, 3, 4, 5];
      const result = variant._unsqueeze(list, 2, 3); // Use 'variant.' prefix
      expect(result).toEqual(expected);
    });
    
   
  });

  describe('flatten function', () => {
    it('should flatten the array', () => {
      const list = [[1, 2], [3, 4], [5, 6]];
      const expected = [1, 2, 3, 4, 5, 6];
      const result = variant.flatten(list); // Use 'variant.' prefix
      expect(result).toEqual(expected);
    });

    it('should handle non-array parameter', () => {
      const nonArray = 42;
      const result = variant.flatten(nonArray); // Use 'variant.' prefix
      expect(result).toBe(nonArray);
    });

   
  });
  describe('map function', () => {
    it('should apply the provided function to each element', () => {
      const list = [1, 2, 3, 4];
      const doubleCallback = (x) => x * 2;
      const expected = [2, 4, 6, 8];
      const result = variant.map(list, doubleCallback);
      expect(result).toEqual(expected);
    });

   
  });

  describe('forEach function', () => {
    it('should apply the provided function to each element', () => {
      const list = [1, 2, 3, 4];
      let count = 0;
      const incrementCallback = (x) => {
        expect(x).toBe(list[count]);
        count++;
        return x;
      };
      variant.forEach(list, incrementCallback);
    });

    
  });

  

  
});
