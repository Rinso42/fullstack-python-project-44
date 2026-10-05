#!/usr/bin/env node
import userGreet from '../src/cli.js';
import playProgression from '../src/games/progression.js';
const userName = userGreet();
playProgression(userName);