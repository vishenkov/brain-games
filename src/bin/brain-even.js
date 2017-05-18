#!/usr/bin/env node
import colors from 'colors/safe';
import greeting from '..';
import game from '../games/brain-even';

console.log(`Welcome ${colors.bold('to')} the Brain Games!`);
console.log(`Answer ${colors.red('"yes"')} ${colors.bold('if')} ${colors.blue('number')} even otherwise answer ${colors.red('"no"')}.\n`);

const name = greeting();

let correctAnsCount = 0;
while ((correctAnsCount < 3) && (game(name))) {
  correctAnsCount += 1;
}

if (correctAnsCount === 3) {
  console.log(`Congratulations, ${colors.bold(name)}!`);
}
