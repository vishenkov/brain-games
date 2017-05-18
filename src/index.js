import readlineSync from 'readline-sync';
import colors from 'colors';

export default () => {
  const name = readlineSync.question(`May I have your ${'name'.blue}? `);
  return name;
};
