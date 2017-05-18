import readlineSync from 'readline-sync';
import colors from 'colors/safe';

export default () => {
  const name = readlineSync.question(`May I have your ${colors.blue('name')}? `);
  return name;
};
