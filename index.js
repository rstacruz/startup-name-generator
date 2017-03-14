const countSyllables = require('syllable')
const sortBy = require('lodash/sortBy')
const groupBy = require('lodash/groupBy')

const PREFIXES = [
  'hyper', 'even', 'ever', 'co', 'true', 'active', 're', 'iso', 'meta', 'base',
  'en', 'app', 'high', 'on'
]

const SUFFIXES = [
  'lab', 'dock', 'hub', 'base'
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
  return word.replace(/ /g, '')
}

/*
 * Run
 */

if (!module.parent) {
  // const result = namer(['travel', 'sky', 'fly'])
  const result = namer(['time', 'flow'])
  console.log('result:', require('util').inspect(result, { depth: null, colors: true }))
}
