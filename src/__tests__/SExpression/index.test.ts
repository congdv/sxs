import calculator from '../../SExpression/index';

describe('Simple case with two number and one function', () => {
  test('single number', () => {
    expect(calculator('123')).toBe(123);
  });

  test('add operation with two numbers', () => {
    expect(calculator('(add 12 12)')).toBe(24);
  });

  test('multiply operation with two numbers', () => {
    expect(calculator('(multiply 1 12)')).toBe(12);
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

