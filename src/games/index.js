import readlineSync from 'readline-sync';
import colors from 'colors/safe';
import math from '../math/';

const game = (logicResults) => {
  const question = math.pairs.car(logicResults);
  const solution = math.pairs.cdr(logicResults);

  console.log(`Question: ${colors.blue(question)}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === solution) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${colors.red(answer)}' is wrong answer ;(. Correct answer was '${colors.red(solution)}'.`);
  return false;
};

export default (logicResults, name) => {
  let correctAnsCount = 0;
  while ((correctAnsCount < 3) && (game(logicResults()))) {
    correctAnsCount += 1;
  }

  if (correctAnsCount === 3) {
    console.log(`Congratulations, ${colors.bold(name)}!`);
    return true;
  }
  console.log(`Let's try again, ${name}!`);
  return false;
};
