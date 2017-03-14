const countSyllables = require('syllable')
const sortBy = require('lodash/sortBy')
const groupBy = require('lodash/groupBy')
const shuffle = require('lodash/shuffle')

const PREFIXES = [
  'active',
  'auto',
  'app',
  'base', // basecamp
  'co',
  'clear',
  'de',
  'en', // envato
  'echo', // echoplex
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
  'matter', // mattermost
  'omni', // omniture
  'on',
  'one', // onenote
  'open',
  'out',
  're',
  'real',
  'pure',
  'shift',
  'solid',
  'true', // truecrypt
]

const SUFFIXES = [
  'base', // crunchbase
  'bay', // ebay
  'dock', // flowdock, stardock
  'er',
  'grid', // sendgrid
  'hub', // github
  'ible',
  'focus',
  'kit',
  'lab', // gitlab
  'level',
  'loop',
  'mark', // zipmark
  'pass',
  'push',
  'scout',
  'sense',
  'shift',
  'ture', // omniture
  'view',
  'ware',
  // 'access',
]

/*
 * Namer
 */

function namer (words) {
  let list
  list = permutate(words)
  list = list.map((word) => [ normalize(word), score(word) ])

  // Add some variance to the scores
  list = list.map(([ word, score ]) => [ word, score * (0.9 + Math.random() * 0.2) ])

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
