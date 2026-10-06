#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import playCalc, { description } from '../src/games/calc.js';
const userName = userGreet();
playGame(userName, description, playCalc);