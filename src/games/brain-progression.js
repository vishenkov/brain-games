import { cons } from 'hexlet-pairs';
import colors from 'colors/safe';
import { randomInteger, getProgression } from '../math/';
import engine from '..';

const maxNumber = 10;
const minNumber = 1;
const progrItems = 10;
const rules = `What ${colors.bold.blue('number')} is missing in this ${colors.bold('progression')}?`;

const logic = () => {
  const start = randomInteger(minNumber, maxNumber);
  const diff = randomInteger(minNumber, maxNumber);
  const progression = getProgression(start, diff, progrItems);

  const missing = randomInteger(0, progression.length - 1);
  const solution = String(progression[missing]);
  progression[missing] = '..';
  const question = progression.join(' ');

  return cons(question, solution);
};

export default () => engine(logic, rules);
