// TODO:
// suffix input, eg, -ploy
const countSyllables = require('syllable')
const sortBy = require('lodash/sortBy')
const groupBy = require('lodash/groupBy')
const shuffle = require('lodash/shuffle')

const { PREFIXES, SUFFIXES, ACTUAL_SUFFIXES } = require('./constants')

/*
 * Namer
 */

function namer (words) {
  let list = permutate(words)

  list = expand(list)
  list = list.map((word) => [ normalize(word), score(word) ])

  // Sort by score
  list = sortBy(list, ([ word, score ]) => -1 * score)

  // Reduce to just words
  list = list.map(([ word, score ]) => word)

  // Paginate
  list = list.reduce((result, item, idx) => {
    const group = Math.floor(idx / 9)
    if (!result[group]) result[group] = []
    result[group].push(item)
    return result
  }, [])

  return list
}

/*
 * Expounds on permutations based on word boundaries
 */

function expand (words) {
  return words.reduce((list, word) => {
    let m
    list = list.concat([ word ])

    // visual cast => visuacast
    // but prevent up flow => uflow
    // if ((m = word.match(/(..[aeiou])([^aeiou ]) ([^aeiou])/))) {
    //   list = list.concat([ word.replace(/.... ./, `${m[1]} ${m[3]}`) ])
    // }

    return list
  }, [])
}

/*
 * Scores a word
 */

function score (word) {
  let score = 0
  score += scoreSyllables(word)
  score += scoreSuffix(word)
  score += scoreLength(word)
  score += Math.random() * 0.4
  return score
}

function scoreSyllables (word) {
  const syllables = countSyllables(word)

  if (syllables === 2) return 10
  else if (syllables === 3) return 8
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
  if (len < 9) return 0.2
  else return 0
}

/*
 * Adds suffixes and prefixes to words
 */

function permutate (words) {
  if (words.length === 0) {
    return emptyPermutate()
  }

  let permutations = words.reduce((list, word) => {
    let prefixed = PREFIXES.reduce((list, prefix) => {
      return list.concat([ `${prefix} ${word}` ])
    }, [])

    let suffixed = SUFFIXES.reduce((list, suffix) => {
      return list.concat([ `${word} ${suffix}` ])
    }, [])

    return list.concat(prefixed).concat(suffixed)
  }, [])

  let wordPerms = words.reduce((list, word1) => {
    return words.reduce((list, word2) => {
      if (word1 === word2) return list
      return list.concat([ `${word1} ${word2}` ])
    }, [])
  }, [])

  return permutations.concat(wordPerms)
}

/*
 * I'm feeling lucky
 */

function emptyPermutate () {
  return PREFIXES.reduce((list, prefix) => {
    return SUFFIXES.reduce((list, suffix) => {
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
    .replace(/(.) (.)/, (_, a, b) => a === b ? a : `${a}${b}`) // live event -> livevent
    .replace(/^./, s => s.toUpperCase())
}

/*
 * Run
 */

module.exports = namer
