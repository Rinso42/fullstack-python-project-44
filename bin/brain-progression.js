#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import playProgression, { description } from '../src/games/progression.js';
const userName = userGreet();
playGame(userName, description, playProgression);