#!/usr/bin/env node
import userGreet from '../src/cli.js';
import playPrime from '../src/games/prime.js';
const userName = userGreet();
playPrime(userName);