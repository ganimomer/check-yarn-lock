'use strict'
const {all, partialRight, curry, eqProps} = require('ramda')
module.exports = curry((keys, a, b) => all(partialRight(eqProps, [a, b]), keys))