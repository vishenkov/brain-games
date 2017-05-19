#!/usr/bin/env node
import colors from 'colors/safe';
import { welcomeMsg, getName } from '..';
import game from '../games/brain-calc';

welcomeMsg();

console.log(`What is the ${colors.red('result')} of the ${colors.bold('expression')}?\n`);

const name = getName();

game(name);
