import { cons } from 'hexlet-pairs';
import colors from 'colors/safe';
import { randomInteger, balance } from '../math/';
import engine from '..';

const maxNumber = 10000;
const minNumber = 10;
const rules = `${colors.red.bold('Balance')} the given ${colors.bold('number')}.`;

const logic = () => {
  const number = randomInteger(minNumber, maxNumber);
  const solution = balance(number);

  const question = `${number}`;
  return cons(question, solution);
};

export default () => engine(logic, rules);
