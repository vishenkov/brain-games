import { cons } from 'hexlet-pairs';
import colors from 'colors/safe';
import { randomInteger, isPrime } from '../math/';
import engine from '..';

const maxNumber = 100;
const minNumber = 1;
const rules = `Answer ${colors.red('"yes"')} ${colors.bold('if')} ${colors.blue('number')} is ${colors.blue('prime')} otherwise answer ${colors.red('"no"')}.`;

const logic = () => {
  const question = randomInteger(minNumber, maxNumber);
  const solution = isPrime(question) ? 'yes' : 'no';

  return cons(question, solution);
};

export default () => engine(logic, rules);
