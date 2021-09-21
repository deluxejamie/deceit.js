## About
deceit.js is a [Node.js](https://nodejs.org) module to interact with the [Deceit](https://playdeceit.com/) API.

## Installation

**Latest version of Node.js required**
```sh-session
npm install deceit.js
```

## Example usage

Log the username and level of the user with id `#3290992`:
```javascript
const Deceit = require('deceit.js');

Deceit.users.fetch('3290992').then(user => console.log(user.username, user.level));
```

Log the current perk tree:
```javascript
const Deceit = require('deceit.js');

Deceit.perkTrees.fetch().then(console.log);
```

Log the legacy elo highscores:
```javascript
const Deceit = require('deceit.js');

Deceit.highscores.fetch('elo', { legacy: true }).then(console.log);
```

Log the legacy party informations:
```javascript
const Deceit = require('deceit.js');

Deceit.parties.fetch({ legacy: true }).then(party => console.log(party.availableServers));
```
