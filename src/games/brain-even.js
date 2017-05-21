import { cons } from 'hexlet-pairs';
import colors from 'colors/safe';
import { randomInteger, isEven } from '../math/';
import engine from '..';

const maxNumber = 100;
const minNumber = 1;
const rules = `Answer ${colors.red('"yes"')} ${colors.bold('if')} ${colors.blue('number')} even otherwise answer ${colors.red('"no"')}.`;

const logic = () => {
  const question = randomInteger(minNumber, maxNumber);
  const solution = isEven(question) ? 'yes' : 'no';
  return cons(question, solution);
};

export default () => engine(logic, rules);
