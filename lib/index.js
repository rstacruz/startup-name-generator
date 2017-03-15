// TODO:
// suffix input, eg, -ploy

// Try these:
// - place site point spot local
// - trade stock
// - health fit

const countSyllables = require('syllable')
const sortBy = require('lodash/sortBy')
const groupBy = require('lodash/groupBy')
const shuffle = require('lodash/shuffle')
const getRandom = require('random-seed')

const { PREFIXES, SUFFIXES, ACTUAL_SUFFIXES } = require('./constants')

/*
 * Namer
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
 * Scores a word
 *
 * @param {Function} rand Random number generator
 */

function score (word, { rand }) {
  let score = 0
  score += scoreSyllables(word)
  score += scoreSuffix(word)
  score += scoreLength(word)
  score += rand() * 0.4
  return score
}

function scoreSyllables (word) {
  const syllables = countSyllables(word)

  if (syllables === 2) return 6.1
  else if (syllables === 3) return 6
  else if (syllables === 4) return 4
  else if (syllables > 4) return 2
  else return 4
}

function scoreSuffix (word) {
  const isActual = ACTUAL_SUFFIXES.some(suffix =>
    word.substr(word.length - suffix.length) === suffix)

  return isActual ? -1.5 : 0
}

function scoreLength (word) {
  const len = normalize(word).length
  if (len < 9) return 0.1
  else return 0
}

/*
 * Adds suffixes and prefixes to words
 */

function permutate (words) {
  if (words.length === 0) {
    return permutateFixes(PREFIXES, SUFFIXES)
  } else {
    return permutateFixes(PREFIXES, words)
      .concat(permutateFixes(words, SUFFIXES))
  }
}

/*
 * I'm feeling lucky
 */

function permutateFixes (prefixes, suffixes) {
  return prefixes.reduce((list, prefix) => {
    return suffixes.reduce((list, suffix) => {
      if (prefix === suffix) return list
      return list.concat([ `${prefix} ${suffix}` ])
    }, list)
  }, [])
}

/*
 * Normalizes a word
 */

function normalize (word) {
  return word
    .replace(/e i/, 'i') // time ible -> timible
    .replace(/th t/, 't') // health tion -> healthion
    .replace(/(.) (.)/, (_, a, b) => a === b ? a : `${a}${b}`) // live event -> livevent
    .replace(/^./, s => s.toUpperCase())
}

/*
 * Run
 */

module.exports = namer
