import math from '../../math/';
import game from '..';

const maxNumber = 20;
const minNumber = 1;

const logic = () => {
  const num1 = math.randomInteger(minNumber, maxNumber);
  const num2 = math.randomInteger(minNumber, maxNumber);
  const result = math.randomOperation(num1, num2);

  const question = `${num1} ${math.pairs.car(result)} ${num2}`;
  const solution = String(math.pairs.cdr(result));
  return math.pairs.cons(question, solution);
};

export default (name) => {
  game(logic, name);
};
