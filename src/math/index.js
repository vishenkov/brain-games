import * as pairs from 'hexlet-pairs';

export const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const randomInteger = (min, max) => {
  let rand = min + (Math.random() * ((max + 1) - min));
  rand = Math.floor(rand);
  return rand;
};

export const randomOperation = (num1, num2) => {
  const operation = randomInteger(0, 2);
  switch (operation) {
    case 0: return pairs.cons('-', (num1 - num2));
    case 1: return pairs.cons('*', (num1 * num2));
    default: return pairs.cons('+', (num1 + num2));
  }
};

export const getGcd = (num1, num2) => {
  // Evklid algorithm
  let a = num1;
  let b = num2;

  while ((a !== 0) && (b !== 0)) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return (a + b);
};
