'use strict'
const {curry, partial} = require('ramda')

const listChangedFiles = exec => exec('git diff --cached --name-only')
  .split('\n')
  .slice(0, -1)

const getFileAtSource = curry((exec, source, filename) => exec(`git show ${source}:${filename}`))

module.exports = exec => ({
  listChangedFiles: partial(listChangedFiles, [exec]),
  getFileAtSource: getFileAtSource(exec),
  getFileAtHEAD: getFileAtSource(exec, 'HEAD')
})