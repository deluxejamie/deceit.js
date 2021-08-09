const HighscoreUser = require('../structures/HighscoreUser');

/**
 * An user in highscores
 * @typedef {Object} HighscoreUser
 */

class Highscore {
  constructor(data) {
    this.entries = data.entries.map(e => new HighscoreUser(e));
    this.type = data.type;
  }

  /**
   * Get the user at the first highscores position
   * @returns {HighscoreUser}
   */
  get firstPlace() {
    return this.entries.find(e => e.place === 1);
  }

  /**
   * Fetch an highscores
   * @param {(string|integer)} type The type of the highscores
   * @returns {HighscoreUser}
   */
  getPlace(index) {
    return this.entries.find(e => e.place === index);
  }

}

module.exports = Highscore;
