#!/usr/bin/env node
import userGreet from '../src/functions/cli.js';
import playGame from '../src/functions/index.js';
import playPrime , { description } from '../src/games/prime.js';
const userName = userGreet();
playGame(userName, description, playPrime);