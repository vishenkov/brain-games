import * as pairs from 'hexlet-pairs';
import * as math from '../math/';

const maxNumber = 50;
const minNumber = 1;

export default () => {
  const num1 = math.randomInteger(minNumber, maxNumber);
  const num2 = math.randomInteger(minNumber, maxNumber);

  const solution = String(math.getGcd(num1, num2));

  const question = `${num1} ${num2}`;
  return pairs.cons(question, solution);
};
