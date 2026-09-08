#!/usr/bin/env node
import userGreet from '../src/cli.js';
import playCalc from '../src/games/calc.js';
const userName = userGreet();
playCalc(userName);