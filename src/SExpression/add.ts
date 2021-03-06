import { InvalidFormatError } from '../customError';
import Operation from './operation';

class Add extends Operation {
  constructor() {
    super();
  }
  calculate(num: number): void {
    this.currentNumber = this.currentNumber + num;
  }
  calculateMultipleNumbers(num: number[]): void {
    if (num.length < 2) {
      throw new InvalidFormatError(
        num,
        'The expression should contain at least two values',
      );
    }
    this.currentNumber = num.reduce((prev, next) => prev + next, 0);
  }
}

export default Add;
