const countSyllables = require('syllable')
const sortBy = require('lodash/sortBy')
const groupBy = require('lodash/groupBy')
const shuffle = require('lodash/shuffle')

const PREFIXES = [
  'active',
  'app',
  'base', // basecamp
  'co',
  'clear',
  'en', // envato
  'even',
  'ever', // note
  'go', // gopro
  'high', // highrise
  'hyper',
  'in',
  'inter',
  'iso',
  'live',
  'meta', // metalab
  'omni', // omniture
  'on',
  'one', // onenote
  'out',
  're',
  'real',
  'shift',
  'solid',
  'true', // truecrypt
]

const SUFFIXES = [
  'base', // crunchbase
  'dock', // flowdock
  'er',
  'grid', // sendgrid
  'hub', // github
  'kit',
  'lab', // gitlab
  'level',
  'mark', // zipmark
  'pass',
  'sense',
  'shift',
  'ture', // omniture
  'view',
  'focus',
  'ible',
  // 'access',
]

/*
 * Namer
 */

function namer (words) {
  let list
  list = permutate(words)
  list = list.map((word) => [ normalize(word), score(word) ])
  list = sortBy(list, ([ word, score ]) => -1 * score)
  list = groupBy(list, ([ word, score ]) => score)
  list = Object.keys(list).reduce((result, key) => {
    result[key] = list[key].map(([ word, score ]) => word)
    result[key] = shuffle(result[key])
    return result
  }, {})

  return list
}

/*
 * Scores a word
 */

function score (word) {
  const syllables = countSyllables(word)

  if (syllables === 2) return 10
  else if (syllables === 3) return 8
  else if (syllables === 4) return 4
  else if (syllables > 4) return 2
  else return 4
}

/*
 * Adds suffixes and prefixes to words
 */

function permutate (words) {
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
