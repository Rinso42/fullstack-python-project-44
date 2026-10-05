#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import playPrime from '../src/games/prime.js';
const userName = userGreet();
playGame(userName, 'Answer "yes" if given number is prime. Otherwise answer "no".', playPrime);