import * as pairs from 'hexlet-pairs';
import * as math from '../math/';

const maxNumber = 100;
const minNumber = 1;

export default () => {
  const number = math.randomInteger(minNumber, maxNumber);
  const solution = math.isEven(number) ? 'yes' : 'no';

  const question = `${number}`;
  return pairs.cons(question, solution);
};
