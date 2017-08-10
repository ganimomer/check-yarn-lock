'use strict'
module.exports = exec => ({
  listChangedFiles() {
    return exec('git diff --cached --name-only')
      .split('\n')
      .slice(0, -1)
  },
  getFileAtHEAD(filename) {
    return exec(`git show HEAD:${filename}`)
  }
})