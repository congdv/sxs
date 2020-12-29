import {
  InvalidFormatError,
  InvalidFunctionError,
  NotNumberError,
} from '../../customError';
import calculator from '../../SExpression/index';

describe('Not a Number Exception', () => {
  it(`Should throw 'not a number' message`, () => {
    expect(() => calculator('a')).toThrow(NotNumberError);
  });
  it(`Should throw 'not a number' message`, () => {
    expect(() => calculator('add 3 2')).toThrow(NotNumberError);
  });

  it(`Should throw 'not a number' message`, () => {
    expect(() => calculator('(add a b)')).toThrow(NotNumberError);
  });
});

describe('Not a single space between the function arguments', () => {
  it(`Should throw 'not a number' message`, () => {
    expect(() => calculator('(add  3  3)')).toThrow(NotNumberError);
  });
  it(`Should throw 'not a number' message`, () => {
    expect(() => calculator('(add 3  4)')).toThrow(NotNumberError);
  });
});

describe('Not balanced parenthesis', () => {
  it(`Should throw 'Invalid format of parenthesis' message`, () => {
    expect(() => calculator('(add 2 (add 3 2)))')).toThrow(InvalidFormatError);
  });
  it(`Should throw 'Invalid format of parenthesis' message`, () => {
    expect(() => calculator('(add 2 3')).toThrow(InvalidFormatError);
  });
  it(`Should throw 'Invalid format of parenthesis' message`, () => {
    expect(() => calculator('(add 2 (add 3 3')).toThrow(InvalidFormatError);
  });
});

describe('Invalid Function', () => {
  it(`Should throw 'Invalid Function' message`, () => {
    expect(() => calculator('(addd 1 2)')).toThrow(InvalidFunctionError);
  });
  it(`Should throw 'Invalid Function' message`, () => {
    expect(() => calculator('(multiple 1 2)')).toThrow(InvalidFunctionError);
  });
});

describe('Invalid Format', () => {
  it(`Should throw 'Invalid Format' message`, () => {
    expect(() => calculator('(add)')).toThrow(InvalidFormatError);
  });
  it(`Should throw 'Invalid Format' message`, () => {
    expect(() => calculator('(add 3)')).toThrow(InvalidFormatError);
  });
  it(`Should throw 'Invalid Format' message`, () => {
    expect(() => calculator('(multiply 1)')).toThrow(InvalidFormatError);
  });
});
