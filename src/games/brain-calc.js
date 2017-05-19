import * as pairs from 'hexlet-pairs';
import * as math from '../math/';

const maxNumber = 20;
const minNumber = 1;

export default () => {
  const num1 = math.randomInteger(minNumber, maxNumber);
  const num2 = math.randomInteger(minNumber, maxNumber);
  const result = math.randomOperation(num1, num2);

  const question = `${num1} ${pairs.car(result)} ${num2}`;
  const solution = String(pairs.cdr(result));
  return pairs.cons(question, solution);
};
