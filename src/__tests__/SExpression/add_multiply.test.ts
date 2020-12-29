import calculator from '../../SExpression/index';

describe('Only add and multiply  functions', () => {
  test('(multiply 1 (add 2 3))', () => {
    expect(calculator('(multiply 1 (add 2 3))')).toBe(5);
  });

  test('(add (multiply 2 2) (multiply 3 4))', () => {
    expect(calculator('(add (multiply 2 2) (multiply 3 4))')).toBe(16);
  });

  test('(add 2 (add 3 multiple(3 add(3 3))))', () => {
    expect(calculator('(add 2 (add 3 (multiply 3 (add 3 3))))')).toBe(23);
  });
});

describe('Simple case with multiple numbers and one function', () => {
  test('add operation with five numbers', () => {
    expect(calculator('(add 1 1 1 1 1)')).toBe(5);
  });

  test('multiply operation with five numbers', () => {
    expect(calculator('(multiply 1 1 1 1 5)')).toBe(5);
  });
});

describe('Two levels function', () => {
  test('add operation combine with multiple operation', () => {
    expect(calculator('(multiply (add 1 2) 3)')).toBe(9);
  });
});