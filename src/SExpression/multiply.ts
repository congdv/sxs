import { InvalidFormatError } from '../customError';
import Operation from './operation';

class Multiply extends Operation {
  constructor() {
    super();
  }
  calculateMultipleNumbers(num: number[]): void {
    if (num.length < 2) {
      throw new InvalidFormatError(undefined);
    }
    this.currentNumber = num.reduce((prev, next) => prev * next, 1);
  }
}

export default Multiply;
