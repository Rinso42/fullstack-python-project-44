#!/usr/bin/env node
import userGreet from '../src/cli.js';
import playIsEven from '../src/games/isEven.js';
const userName = userGreet();
playIsEven(userName);