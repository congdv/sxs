import Operation from './operation';

class Multiply extends Operation {
  constructor() {
    super();
  }
  calculateMultipleNumbers(num: number[]): void {
    if (num.length < 2) {
      throw new Error('You need at least two arguments for calculating');
    }
    this.currentNumber = num.reduce((prev, next) => prev * next, 1);
  }
}

export default Multiply;
