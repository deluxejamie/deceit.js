const Users = require('../stores/Users');

class HighscoreUser {
  constructor(data) {
    this.username = data.username;
    this.id = data.userId;
    this.value = data.value;
    this.place = data.rank + 1;
  }

  async fetch() {
    return await Users.fetch(this.id);
  }

}

module.exports = HighscoreUser;
