import { cons, car, cdr } from 'hexlet-pairs';
import colors from 'colors/safe';
import { randomInteger, randomOperation } from '../math/';
import engine from '..';

const maxNumber = 20;
const minNumber = 1;

const rules = `What is the ${colors.red('result')} of the ${colors.bold('expression')}?`;

const logic = () => {
  const num1 = randomInteger(minNumber, maxNumber);
  const num2 = randomInteger(minNumber, maxNumber);
  const result = randomOperation(num1, num2);

  const question = `${num1} ${car(result)} ${num2}`;
  const solution = String(cdr(result));

  return cons(question, solution);
};

export default () => engine(logic, rules);
