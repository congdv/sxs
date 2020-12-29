import calculator from '../../SExpression/index';

describe('Simple case with two number and one function', () => {
  test('single number: 0', () => {
    expect(calculator('0')).toBe(0);
  });

  test('single number: 123', () => {
    expect(calculator('123')).toBe(123);
  });

  test('add operation with two numbers', () => {
    expect(calculator('(add 12 12)')).toBe(24);
  });

  test('multiply operation with two numbers', () => {
    expect(calculator('(multiply 1 12)')).toBe(12);
  });
});

