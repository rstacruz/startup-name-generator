const PREFIXES = [
  'active',
  'auto',
  'app',
  'base', // basecamp
  'co',
  'con',
  'core',
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
  'mass', // massdrop
  'meta', // metalab
  'matter', // mattermost
  'mid',
  'omni', // omniture
  'on',
  'one', // onenote
  'open',
  'over', // overwatch
  'out',
  're',
  'real',
  'pure',
  'shift',
  'solid',
  'start',
  'true', // truecrypt
  'up', // upwork
]

const WORD_SUFFIXES = [
  'base', // crunchbase
  'bay', // ebay
  'boost',
  'case',
  'center',
  'cast', // shoutcast
  'dash',
  'dock', // flowdock, stardock, apidock
  'drop',
  'grid', // sendgrid
  'hub', // github
  'focus',
  'kit',
  'lab', // gitlab
  'level',
  'layer', // softlayer
  'loop',
  'mode',
  'mark', // zipmark
  'ness',
  // 'park',
  'pass',
  'port',
  'push',
  'rise', // highrise
  'scape', // netscape
  'scan', // skyscanner
  'scout',
  'sense',
  'shift',
  'signal', // appsignal
  'snap',
  'space', // squarespace
  'start',
  'sync',
  'ture', // omniture
  'type',
  'view',
  // 'vibe',
  'ware',
  'yard', // engineyard
  'up', // squareup
]

const ACTUAL_SUFFIXES = [
  // Actual suffixes
  'ary', // apiary
  'able', // mashable
  'ance',
  'ible',
  'ice',
  'er',
  'ent',
  'gent',
  'tion',
  'sion',
]

const SUFFIXES = WORD_SUFFIXES.concat(ACTUAL_SUFFIXES)


module.exports = {
  PREFIXES,
  SUFFIXES,
  WORD_SUFFIXES,
  ACTUAL_SUFFIXES
}
