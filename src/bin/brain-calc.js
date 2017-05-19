#!/usr/bin/env node
import colors from 'colors/safe';
import greeting from '..';
import game from '../games/brain-calc';

console.log(`Welcome ${colors.bold('to')} the Brain Games!`);
console.log(`What is the ${colors.red('result')} of the ${colors.bold('expression')}?\n`);

const name = greeting();

game(name);
