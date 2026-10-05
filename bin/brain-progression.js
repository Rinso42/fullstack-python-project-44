#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import playProgression from '../src/games/progression.js';
const userName = userGreet();
playGame(userName, 'What number is missing in the progression?', playProgression);