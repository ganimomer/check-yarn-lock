#!/usr/bin/env node
"use strict"
const {existsSync, readFileSync} = require('fs')
const execSync = require('child_process').execSync
const {compose, converge, contains} = require('ramda')
const {red} = require('chalk')
const keysEqual = require('./lib/keysEqual')
const exec = require('./lib/getOutput')(execSync)
const {listChangedFiles, getFileAtHEAD} = require('./lib/gitUtil')(exec)

const LOCKFILE = 'yarn.lock'
const PACKAGE_JSON = 'package.json'
const deps = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']

const readJson = compose(JSON.parse, readFileSync)
const getJsonAtHEAD = compose(JSON.parse, getFileAtHEAD)
const depsUnchanged = converge(keysEqual(deps), [readJson, getJsonAtHEAD])

const files = listChangedFiles()
if (contains(PACKAGE_JSON, files) &&
  !contains(LOCKFILE, files) &&
  existsSync(LOCKFILE) &&
  !depsUnchanged(PACKAGE_JSON)) {
  console.error(`${red('Error!')}   Do not commit package.json changed without yarn.lock changes`)
  process.exitCode = 1
}