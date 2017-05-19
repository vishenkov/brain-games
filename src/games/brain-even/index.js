import readlineSync from 'readline-sync';
import colors from 'colors/safe';
import { isEven, randomInteger } from '../../math/';

const maxNumber = 100;
const minNumber = 1;

const game = () => {
  const number = randomInteger(minNumber, maxNumber);
  console.log(`Question: ${colors.blue(String(number))}`);
  const answer = readlineSync.question('Your answer: ');
  const solution = isEven(number) ? 'yes' : 'no';

  if (answer === solution) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${colors.red(answer)}' is wrong answer ;(. Correct answer was '${colors.red(solution)}'.`);
  return false;
};

export default (name) => {
  let correctAnsCount = 0;
  while ((correctAnsCount < 3) && (game())) {
    correctAnsCount += 1;
  }

  if (correctAnsCount === 3) {
    console.log(`Congratulations, ${colors.bold(name)}!`);
    return true;
  }
  console.log(`Let's try again, ${name}!`);
  return false;
};
