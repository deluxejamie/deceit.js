const HighscoreUser = require('../structures/HighscoreUser');

class Highscore {
  constructor(data) {
    this.data = data;
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
    return new HighscoreUser(Object.assign({ place: 1 }, this.data[0]));
  }

  /**
   * Fetch an highscores
   * @param {(string|integer)} type The type of the highscores
   * @returns {HighscoreUser}
   */
  getPlace(index) {
    return new HighscoreUser(Object.assign({ place: index }, this.data[index - 1]));
  }

}

module.exports = Highscore;
