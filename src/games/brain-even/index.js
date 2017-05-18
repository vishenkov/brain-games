import readlineSync from 'readline-sync';
import colors from 'colors';
import { isEven, randomInteger } from '../../math/';

const MAX_RANGE_NUMBER = 100;
const MIN_RANGE_NUMBER = 1;

export default (name) => {
  const number = randomInteger(MIN_RANGE_NUMBER, MAX_RANGE_NUMBER);
  console.log(`Question: ${String(number).blue}`);
  const answer = readlineSync.question('Your answer: ');
  const solution = isEven(number) ? 'yes' : 'no';

  if (answer === solution) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer.red}' is wrong answer ;(. Correct answer was '${solution.red}'.\nLet's try again, ${name}!`);
  return false;
};
