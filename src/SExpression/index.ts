import { exception } from 'console';
import Operation from './operation';
import Add from './add';
import Multiply from './multiply';
import Operator from './operator';

function getOperation(func: string): Operation {
  switch (func) {
    case Operator.ADD:
      return new Add();
    case Operator.MULTIPLY:
      return new Multiply();
    default:
      throw new Error('Not Found Function');
  }
}

function computeToken(expression: string[]) {
  if (expression.length < 2) {
    throw new Error('Wrong format expression inside parentheses');
  }
  const func = expression[0];
  //Check valid function expression by checking type in Operator type
  if (!(func.toUpperCase() in Operator)) {
    throw new Error('Not valid function expression');
  }
  const values = expression.splice(1).map((value) => parseInt(value));
  const operation = getOperation(func);
  operation.calculateMultipleNumbers(values);
  const result = operation.getResult();
  return result;
}

function calculator(input: string) {
  const startBracket = input.indexOf('(');
  if (startBracket < 0) return parseInt(input);
  let parenthesesStack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      // Store index of open parentheses
      parenthesesStack.push(i);
    } else if (input[i] === ')') {
      if (parenthesesStack.length === 0) {
        throw new Error('Wrong format input');
      }
      // Get open parentheses and combine with close parentheses will create a token for compute
      const openParenthesesIndex = parenthesesStack.pop() as number;
      // Get token from open parentheses to close parentheses
      const token = input.substring(openParenthesesIndex + 1, i).split(' ');
      // Compute the extracted token
      const result = computeToken(token);
      // Replace token with the result after computing
      input =
        input.substring(0, openParenthesesIndex) +
        result +
        input.substring(i + 1);

      // Adjust current index
      const lengthOfResult = `${result}`.length;
      i = openParenthesesIndex + lengthOfResult - 1;
    }
  }
  return parseInt(input);
}

export default calculator;
