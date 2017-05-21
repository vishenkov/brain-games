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

const sortNumArray = arr => arr.sort((a, b) => a - b);

const splitNumber = (number) => {
  const splitedNumber = String(number).split('');
  for (let i = 0; i < splitedNumber.length; i += 1) {
    splitedNumber[i] = parseInt(splitedNumber[i], 10);
  }
  return splitedNumber;
};


const getFirstMaxDigit = (splitedNumber) => {
  let maxDigitIndex = 0;
  for (let i = 1; i < splitedNumber.length; i += 1) {
    if (splitedNumber[maxDigitIndex] < splitedNumber[i]) {
      maxDigitIndex = i;
    }
  }
  return pairs.cons(maxDigitIndex, splitedNumber[maxDigitIndex]);
};

const getLastMinDigit = (splitedNumber) => {
  let minDigitIndex = 0;
  for (let i = 1; i < splitedNumber.length; i += 1) {
    if (splitedNumber[minDigitIndex] >= splitedNumber[i]) {
      minDigitIndex = i;
    }
  }
  return pairs.cons(minDigitIndex, splitedNumber[minDigitIndex]);
};

export const balance = (number) => {
  const splitedNumber = sortNumArray(splitNumber(number));

  const pairMin = getLastMinDigit(splitedNumber);
  const pairMax = getFirstMaxDigit(splitedNumber);

  const minDigit = pairs.cdr(pairMin);
  const maxDigit = pairs.cdr(pairMax);

  if ((maxDigit - minDigit) > 1) {
    const minIndex = pairs.car(pairMin);
    const maxIndex = pairs.car(pairMax);

    splitedNumber[minIndex] += 1;
    splitedNumber[maxIndex] -= 1;
    return balance(splitedNumber.join(''));
  }
  return splitedNumber.join('');
};

export const getProgression = (a0, d, n) => {
  // An=A1+d(n-1)
  const a = [];
  a[0] = a0;
  for (let i = 1; i < n; i += 1) {
    a[i] = a[i - 1] + d;
  }
  return a;
};
