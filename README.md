# startup-name-generator

> Let's name your silly startup

Generates cliché (but nice-sounding) names for your startup. [Try it on Codepen](http://codepen.io/rstacruz/full/wJyaJb/).

```js
const name = require('@rstacruz/startup-name-generator')

name('cloud')
//=> ['Cloudary', 'Purecloud', 'Cloudlayer', 'Echocloud', 'Cloudspan',
//   'Cloudloop', 'Activecloud', 'Cloudspark', 'Cloudable', 'Clouder', ...]
```

[![Status](https://travis-ci.org/rstacruz/startup-name-generator.svg?branch=master)](https://travis-ci.org/rstacruz/startup-name-generator "See test builds")

## Install

```sh
yarn add --exact @rstacruz/startup-name-generator
# or
npm install --save-exact @rstacruz/startup-name-generator
```

Also available at: https://unpkg.com/@rstacruz/startup-name-generator@latest/dist/startup-name-generator.js (name `StartupNameGenerator`)

## Command line

Also available as a command-line app.

```sh
yarn global add @rstacruz/startup-name-generator
# or
npm install -g @rstacruz/startup-name-generator

startup-name-generator health fit run
startup-name-generator --help
```

## Thanks

**startup-name-generator** © 2017, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/startup-name-generator/contributors
