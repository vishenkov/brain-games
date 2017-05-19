import colors from 'colors/safe';
import even from './games/brain-even';
import calc from './games/brain-calc';
import gcd from './games/brain-gcd';
import { engine, introduction } from './engine';

export default (gameName) => {
  switch (gameName) {
    case 'brain-even': {
      const rules = `Answer ${colors.red('"yes"')} ${colors.bold('if')} ${colors.blue('number')} even otherwise answer ${colors.red('"no"')}.`;
      return engine(rules, even);
    }
    case 'brain-calc': {
      const rules = `What is the ${colors.red('result')} of the ${colors.bold('expression')}?`;
      return engine(rules, calc);
    }
    case 'brain-gcd': {
      const rules = `Find the ${colors.red.bold('greatest')} ${colors.bold('common divisor')} of given ${colors.red('numbers')}.`;
      return engine(rules, gcd);
    }
    default: {
      const name = introduction('');
      console.log(`Hello, ${name}!`);
      return true;
    }
  }
};
