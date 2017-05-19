import math from '../../math/';
import game from '..';

const maxNumber = 100;
const minNumber = 1;

const logic = () => {
  const number = math.randomInteger(minNumber, maxNumber);
  const solution = math.isEven(number) ? 'yes' : 'no';

  const question = `${number}`;
  return math.pairs.cons(question, solution);
};

export default (name) => {
  game(logic, name);
};
