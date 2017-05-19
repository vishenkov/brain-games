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

export { isEven, randomInteger };
