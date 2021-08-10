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
   * Get the user at the first highscores place
   * @returns {HighscoreUser}
   */
  get firstPlace() {
    return this.entries.find(e => e.place == 1);
  }

  /**
   * Get a specific place of the highscores
   * @param {(string|integer)} index Place of the highscores
   * @returns {HighscoreUser}
   */
  getPlace(index) {
    return this.entries.find(e => e.place == index);
  }

}

module.exports = Highscore;
