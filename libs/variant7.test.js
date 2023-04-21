import { toEngineering } from './variant5';

describe('toEngineering', () => {
  test('returns string with engineering notation format', () => {
    expect(toEngineering(0)).toBe('0e+0');
    expect(toEngineering(1)).toBe('1e+0');
    expect(toEngineering(1000)).toBe('1e+3');
    expect(toEngineering(12345678, 3)).toBe('1.23e+7');
    expect(toEngineering(0.000012345, 4)).toBe('1.235e-5');
    expect(toEngineering(-1234.5678, 2)).toBe('-1.2e+3');
    expect(toEngineering(NaN)).toBe('NaN');
    expect(toEngineering(Infinity)).toBe('Infinity');
    expect(toEngineering(-Infinity)).toBe('-Infinity');
  });
});
