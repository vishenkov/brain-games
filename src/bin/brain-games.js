#!/usr/bin/env node
import greeting from '..';

console.log('Welcome to the Brain Games!');

const name = greeting();
console.log(`Hello, ${name}!`);
