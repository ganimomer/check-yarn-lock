#!/usr/bin/env node

'use strict'
const exec = require('shelljs').exec;

exec(`git diff --cached`)
process.exit(1);
