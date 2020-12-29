import calculator from '../../SExpression/index';

describe('Add function', () => {
  test('(add 1 1)', () => {
    expect(calculator('(add 1 1)')).toBe(2);
  });

  test('(add 0 (add 3 4))', () => {
    expect(calculator('(add 0 (add 3 4))')).toBe(7);
  });

  test('((add 3 (add (add 3 3) 3))', () => {
    expect(calculator('(add 3 (add (add 3 3) 3))')).toBe(12);
  });
});
