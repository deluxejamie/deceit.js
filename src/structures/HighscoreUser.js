const Users = require('../stores/Users');

class HighscoreUser {
  constructor(data) {
    this.username = data.username;
    this.id = data.userId;
    this.elo = data.value;
    this.place = data.rank + 1;
  }
}

module.exports = HighscoreUser;
