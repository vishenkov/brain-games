import readlineSync from 'readline-sync';
import colors from 'colors/safe';
import { isEven, randomInteger } from '../../math/';

const MAX_RANGE_NUMBER = 100;
const MIN_RANGE_NUMBER = 1;

export default (name) => {
  const number = randomInteger(MIN_RANGE_NUMBER, MAX_RANGE_NUMBER);
  console.log(`Question: ${colors.blue(String(number))}`);
  const answer = readlineSync.question('Your answer: ');
  const solution = isEven(number) ? 'yes' : 'no';

  if (answer === solution) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${colors.red(answer)}' is wrong answer ;(. Correct answer was '${colors.red(solution)}'.\nLet's try again, ${name}!`);
  return false;
};
