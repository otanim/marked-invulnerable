# marked-invulnerable

## Description
A markdown parser and compiler in safe mode (xss invulnerable) over [marked](https://github.com/chjj/marked) parser.

## How to install

#### yarn
```sh
yarn add https://github.com/otanim/marked-invulnerable
```
#### npm
```sh
npm install https://github.com/otanim/marked-invulnerable --save
```

### Usage

```javascript
const markedInvulnerable = require('marked-invulnerable');

const markdown = '[XSS](javascript:alert('XSS'))';
const htmlInvulnerable = markedInvulnerable(markdown);

console.log(htmlInvulnerable) //<a href="#hack-attempt">XSS</a>
```

##License
translator is [licensed under MIT](https://github.com/otanim/marked-invulnerable/blob/master/LICENSE).
