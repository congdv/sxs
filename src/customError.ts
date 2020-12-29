export class BaseError extends Error {
  constructor(public message: string) {
    super();
  }
  getMessage() {
    return this.message;
  }
}

export class NotNumberError extends BaseError {
  constructor(data: string | number) {
    super(`${data} is not a number`);
  }
}

export class InvalidFormatError extends BaseError {
  constructor(data: string | number | string[] | undefined) {
    super(
      `${
        data ? `${data} is an invalid format` : 'The expression is an invalid format'
      }`,
    );
  }
}

export class InvalidFunctionError extends BaseError {
  constructor(data: string) {
    super(`${data} is an invalid function`);
  }
}

export class NotSupportFunctionError extends BaseError {
  constructor(data: string) {
    super(`${data} is not support`);
  }
}
