#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import playIsEven, { description } from '../src/games/isEven.js';
const userName = userGreet();
playGame(userName, description, playIsEven);