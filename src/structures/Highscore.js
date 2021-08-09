const HighscoreUser = require('../structures/HighscoreUser');

class Highscore {
  constructor(data) {
    this.entries = data.entries.map(e => new HighscoreUser(e));
    this.type = data.type;
  }

  /**
   * An user in highscores
   * @typedef {Object} HighscoreUser
   */

  /**
   * Get the user at the first highscores position
   * @returns {HighscoreUser}
   */
  get firstPlace() {
    return new HighscoreUser(this.data[0]);
  }

  /**
   * Fetch an highscores
   * @param {(string|integer)} type The type of the highscores
   * @returns {HighscoreUser}
   */
  getPlace(index) {
    return new HighscoreUser(this.data[index - 1]);
  }

}

module.exports = Highscore;
