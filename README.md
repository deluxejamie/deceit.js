## About
deceit.js is a [Node.js](https://nodejs.org) module to interact with the [Deceit 1](https://deceit.gg) API.

## Installation

**Latest version of Node.js required**
```sh-session
npm install deceit.js
```

## Example usage

Log the username and level of the user with id `#6997076`:
```javascript
const {users} = require('deceit.js');

users.fetch('6997076').then(user => console.log(user.username, user.level));
```

Log ticket highscores:
```javascript
const {highscores} = require('deceit.js');

highscores.fetch('tickets').then(console.log);
```

Log servers informations:
```javascript
const {parties} = require('deceit.js');

parties.fetch().then(party => console.log(party.availableServers));
```
