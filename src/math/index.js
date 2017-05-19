import * as pairs from 'hexlet-pairs';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const randomInteger = (min, max) => {
  let rand = min + (Math.random() * ((max + 1) - min));
  rand = Math.floor(rand);
  return rand;
};

const randomOperation = (num1, num2) => {
  const operation = randomInteger(0, 2);
  switch (operation) {
    case 0: return pairs.cons('-', (num1 - num2));
    case 1: return pairs.cons('*', (num1 * num2));
    default: return pairs.cons('+', (num1 + num2));
  }
};

export default { pairs, randomOperation, randomInteger, isEven };
