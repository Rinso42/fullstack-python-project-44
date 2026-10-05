#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import playIsEven from '../src/games/isEven.js';
const userName = userGreet();
playGame(userName, 'Answer "yes" if the number is even, otherwise answer "no".', playIsEven);