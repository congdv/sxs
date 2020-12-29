import calculator from '../../SExpression/index';

describe('Multiply function', () => {
  test('(multiply 1 1)', () => {
    expect(calculator('(multiply 1 1)')).toBe(1);
  });

  test('(multiply 0 (multiply 3 4))', () => {
    expect(calculator('(multiply 0 (multiply 3 4))')).toBe(0);
  });

  test('(multiply 2 (multiply 3 4))', () => {
    expect(calculator('(multiply 2 (multiply 3 4))')).toBe(24);
  });

  test('(multiply 3 (multiply (multiply 3 3) 3))', () => {
    expect(calculator('(multiply 3 (multiply (multiply 3 3) 3))')).toBe(81);
  });
});

