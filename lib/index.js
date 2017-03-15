// TODO:
// suffix input, eg, -ploy

// Try these:
// - place site point spot local
// - trade stock
// - health fit

const sortBy = require('lodash/sortBy')
const getRandom = require('random-seed')
const permutate = require('./permutate').permutate
const score = require('./score').score
const normalize = require('./normalize').normalize

/**
 * Names your shitty startup. Returns a list of possible names.
 * @example
 *
 *     namer('cloud')
 *     namer('health fit')
 *     namer(['health', 'fit'])
 *     => ['Fitrise', 'Fityard', 'Healthup', ...]
 */

function namer (words, options = {}) {
  if (typeof words === 'string') words = words.split(' ')

  let list = permutate(words)

  // Random number generator
  let gen = getRandom(options.seed || Math.random())
  let rand = () => gen.floatBetween(0, 1)

  list = list.map((word) => ({
    word: normalize(word),
    score: score(word, { rand })
  }))

  // Sort by score
  list = sortBy(list, ({ word, score }) => -1 * score)

  // Reduce to just words
  list = list.map(({ word, score }) => word)

  return list
}

/*
 * Export
 */

module.exports = namer
