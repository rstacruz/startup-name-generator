const PREFIXES = [
  'active',
  'auto',
  'app',
  'base', // basecamp
  'co',
  'con',
  'core',
  'clear',
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
  'jump',
  'live',
  'make',
  'mass', // massdrop
  'meta', // metalab
  'matter', // mattermost
  // 'mid',
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
  'spark',
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
  'deck',
  'dock', // flowdock, stardock, apidock
  'drop',
  'grid', // sendgrid
  'graph',
  'hub', // github
  'focus',
  'kit',
  'lab', // gitlab
  'level',
  'layer', // softlayer
  'logic', // authlogic
  'loop',
  'mode',
  'mark', // zipmark
  'ness',
  'now',
  // 'park',
  'pass',
  'port',
  'press', // wordpress
  'push',
  'rise', // highrise
  'scape', // netscape
  'scale',
  'scan', // skyscanner
  'scout',
  'sense',
  'set',
  'shift',
  'side',
  'signal', // appsignal
  'snap',
  'space', // squarespace
  'spark',
  'start',
  'sync',
  'tap', // healthtap
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
  'ful',
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
