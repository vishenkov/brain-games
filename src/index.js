import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import colors from 'colors/safe';

export default (logic, rules) => {
  console.log(`Welcome ${colors.bold('to')} the Brain Games!`);
  console.log(`${rules}\n`);

  const name = readlineSync.question(`May I have your ${colors.blue('name')}? `);

  for (let i = 0; i < 3; i += 1) {
    const task = logic();
    const question = car(task);
    const solution = cdr(task);

    console.log(`Question: ${colors.blue(question)}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === solution) {
      console.log('Correct!');
    } else {
      console.log(`'${colors.red(answer)}' is wrong answer ;(. Correct answer was '${colors.red(solution)}'.`);
      console.log(`Let's try again, ${colors.bold(name)}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${colors.bold(name)}!`);
  return true;
};
