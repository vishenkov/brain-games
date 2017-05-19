#!/usr/bin/env node
import colors from 'colors/safe';
import { welcomeMsg, getName } from '..';
import game from '../games/brain-even';

welcomeMsg();

console.log(`Answer ${colors.red('"yes"')} ${colors.bold('if')} ${colors.blue('number')} even otherwise answer ${colors.red('"no"')}.\n`);

const name = getName();

game(name);
