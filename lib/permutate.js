const { PREFIXES, SUFFIXES } = require('./constants')

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

module.exports = { permutate, permutateFixes }
