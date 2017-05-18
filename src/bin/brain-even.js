#!/usr/bin/env node
import greeting from '..';
import game from '../games/brain-even';

console.log(`Welcome ${'to'.bold} the Brain Games!`);
console.log(`Answer ${'"yes"'.red} ${'if'.bold} ${'number'.blue} even otherwise answer ${'"no"'.red}.\n`);

const name = greeting();

let correctAnsCount = 0;
while ((correctAnsCount < 3) && (game(name))) {
  correctAnsCount += 1;
}

if (correctAnsCount === 3) {
  console.log(`Congratulations, ${name.bold}!`);
}
