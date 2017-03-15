const countSyllables = require('syllable')
const normalize = require('./normalize').normalize
const { ACTUAL_SUFFIXES } = require('./constants')

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

/**
 * Scores a word based on syllables
 * @private
 */

function scoreSyllables (word) {
  const syllables = countSyllables(word)

  if (syllables === 2) return 6.1
  else if (syllables === 3) return 6
  else if (syllables > 4) return 2
  else return 4
}

/**
 * Scores a word based on suffixes
 * @private
 */

function scoreSuffix (word) {
  const isActual = ACTUAL_SUFFIXES.some(suffix =>
    word.substr(word.length - suffix.length) === suffix)

  return isActual ? -1.5 : 0
}

/**
 * Scores a word based on length
 * @private
 */

function scoreLength (word) {
  const len = normalize(word).length
  if (len < 9) return 0.1
  else return 0
}

/*
 * Export
 */

module.exports = { score }
