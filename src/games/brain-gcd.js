import { cons } from 'hexlet-pairs';
import colors from 'colors/safe';
import { randomInteger, getGcd } from '../math/';
import engine from '..';

const maxNumber = 50;
const minNumber = 1;

const rules = `Find the ${colors.red.bold('greatest')} ${colors.bold('common divisor')} of given ${colors.red('numbers')}.`;

const logic = () => {
  const num1 = randomInteger(minNumber, maxNumber);
  const num2 = randomInteger(minNumber, maxNumber);

  const solution = String(getGcd(num1, num2));

  const question = `${num1} ${num2}`;
  return cons(question, solution);
};

export default () => engine(logic, rules);
