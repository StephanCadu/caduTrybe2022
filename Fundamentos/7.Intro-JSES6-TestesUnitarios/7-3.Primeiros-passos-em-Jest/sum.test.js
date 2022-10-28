const { sum } = require('./sum');

describe('Sum function', () => {
  it('Return 9 when tries sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Return 0 when tries sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0)
  });
  it('Throw error when tries sum(0, `5`)', () => {
    expect(() => {sum(0, '5')}).toThrow();
  });
});  