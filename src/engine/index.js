import * as pairs from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import colors from 'colors/safe';

const welcomeMsg = () => {
  console.log(`Welcome ${colors.bold('to')} the Brain Games!`);
};

const getName = () => {
  const name = readlineSync.question(`May I have your ${colors.blue('name')}? `);
  return name;
};

export const introduction = (rules) => {
  welcomeMsg();
  console.log(`${rules}\n`);
  const name = getName();
  return name;
};

const game = (logicResults) => {
  const question = pairs.car(logicResults);
  const solution = pairs.cdr(logicResults);

  console.log(`Question: ${colors.blue(question)}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === solution) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${colors.red(answer)}' is wrong answer ;(. Correct answer was '${colors.red(solution)}'.`);
  return false;
};

export const engine = (rules, logicResults) => {
  const name = introduction(rules);

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
