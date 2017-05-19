import readlineSync from 'readline-sync';
import colors from 'colors/safe';

export const welcomeMsg = () => {
  console.log(`Welcome ${colors.bold('to')} the Brain Games!`);
};

export const getName = () => {
  const name = readlineSync.question(`May I have your ${colors.blue('name')}? `);
  return name;
};

export default getName;
