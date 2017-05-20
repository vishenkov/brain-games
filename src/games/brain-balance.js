import * as pairs from 'hexlet-pairs';
import * as math from '../math/';

const maxNumber = 10000;
const minNumber = 10;

export default () => {
  const number = math.randomInteger(minNumber, maxNumber);
  const solution = math.balance(number);

  const question = `${number}`;
  return pairs.cons(question, solution);
};
