#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import getGCD, { description } from '../src/games/getGCD.js';
const userName = userGreet();
playGame(userName, description, getGCD);