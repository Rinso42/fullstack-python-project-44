#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import playCalc from '../src/games/calc.js';
const userName = userGreet();
playGame(userName, 'What is the result of the expression?', playCalc);