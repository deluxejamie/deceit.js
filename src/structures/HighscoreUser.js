const Users = require('../stores/Users');

class HighscoreUser {
  constructor(data) {
    this.username = data.username;
    this.id = data.userId;
    this.rank = data.rank;
    this.elo = data.value;
    this.place = data.place;
  }
}

module.exports = HighscoreUser;
