'use strict'
const keysEqual = require('../lib/keysEqual')
const assert = require('assert')
describe('keysEqual', () => {
  it('should return true no keys are supplied', () => {
    assert.equal(keysEqual([], {a: 1}, {b: 3}), true)
  })
  it('should return true if neither objects has any of the keys', () => {
    assert.equal(keysEqual(['a'], {}, {}), true)
  })
  it('should return true if both objects have equal values for the supplied keys', () => {
    assert.equal(keysEqual(['a'], {a: {b: 1}, c: 2}, {a: {b: 1}, c: 3}), true)
  })
  it('should return false if one object has one key and the other does not', () => {
    assert.equal(keysEqual(['a'], {a: 1}, {b: 2}), false)
    assert.equal(keysEqual(['b'], {a: 1}, {b: 2}), false)
  })
  it('should return false if any of the keys differ', () => {
    assert.equal(keysEqual(['a', 'b'], {a:1, b:2}, {a:1, b:3}), false)
  })
})