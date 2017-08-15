'use strict'
const gitUtil = require('../lib/gitUtil')
const assert = require('assert')
describe('gitUtil', () => {
  describe('listChangedFiles', () => {
    it('should return a list of changed files from git', () => {
      const exec = () => 'a\nb\n'
      assert.deepEqual(gitUtil(exec).listChangedFiles(), ['a', 'b'])
    })
    it('should return an empty list for an empty string', () => {
      const exec = () => ''
      assert.deepEqual(gitUtil(exec).listChangedFiles(), [])
    })
  })
  describe('getFileAtSource', () => {
     it('should execute the correct command', () => {
       const filename = 'some-file-name'
       const ref = 'HEAD'
       const exec = cmd => cmd
       assert.equal(gitUtil(exec).getFileAtSource(ref, filename), 'git show HEAD:some-file-name')
     })
  })
})