const PREFIXES = [
  'active',
  'auto',
  'app',
  'base', // basecamp
  'co',
  'con',
  'core',
  'clear', // clearleft
  'en', // envato
  'echo', // echoplex
  'even',
  'ever', // note
  'fair', // fairlight
  'go', // gopro
  'high', // highrise
  'hyper',
  'in',
  'inter',
  'iso',
  'jump',
  'live', // livejournal
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
  'peak',
  'pure',
  'shift',
  'silver', // silverstripe
  'solid',
  'spark',
  'start',
  'true', // truecrypt
  'up', // upwork
  'vibe', // vibewrite
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
  'dot', // slashdot
  'drop',
  'engine',
  'grid', // sendgrid
  'graph',
  'hub', // github
  'focus',
  'kit',
  'lab', // gitlab
  'level',
  'layer', // softlayer
  'line',
  'logic', // authlogic
  'load',
  'loop',
  'ment',
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
  'shift', // redshift, infoshift
  'side',
  'signal', // appsignal
  'snap',
  'scope', // periscope
  'space', // squarespace
  'span',
  'spark',
  'spot', // blogspot
  'start',
  'storm', // packetstorm
  'stripe', // silverstripe
  'sync',
  'tap', // healthtap
  'ture', // omniture
  'type',
  'view',
  'verge', // converge
  'vibe',
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
  'eon', // vaporeon :p
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
