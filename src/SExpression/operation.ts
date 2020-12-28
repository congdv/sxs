abstract class Operation {
  currentNumber: number;
  constructor() {
    this.currentNumber = 0;
  }
  abstract calculateMultipleNumbers(num: number[]): void 

  getResult(): number {
    return this.currentNumber;
  }
}

export default Operation;
