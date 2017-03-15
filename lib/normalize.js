/**
 * Normalizes a word.
 * @private
 * @example
 *
 *     normalize('cloud layer')
 *     => 'Cloudlayer'
 *
 *     normalize('time ible')
 *     => 'Timible'
 */

function normalize (word) {
  return word
    .replace(/e i/, 'i') // time ible -> timible
    .replace(/th t/, 't') // health tion -> healthion
    .replace(/(.) (.)/, (_, a, b) => a === b ? a : `${a}${b}`) // live event -> livevent
    .replace(/^./, s => s.toUpperCase())
}

/*
 * Exports
 */

module.exports = { normalize }
