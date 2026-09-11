#!/usr/bin/env node
import userGreet from '../src/cli.js';
import getGCD from '../src/games/getGCD.js';
const userName = userGreet();
getGCD(userName);