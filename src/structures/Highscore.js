const HighscoreUser = require('../structures/HighscoreUser');

/**
 * An user in highscores
 * @typedef {Object} HighscoreUser
 */

class Highscore {
  constructor(data) {
    this.entries = data.entries.map(e => new HighscoreUser(e));
  }

  /**
   * Get the highscore type
   * @returns {Object}
   */
  get type() {
    return this.constructor;
  }

  /**
   * Get the required value to have to be on the top 10 of the highscore
   * @returns {integer}
   */
  get top10Requirement() {
    return this.entries.find(e => e.place === 10).value;
  }

  /**
   * Get the required value to have to be on the top 100 of the highscore
   * @returns {integer}
   */
  get top100Requirement() {
    return this.entries.find(e => e.place === 100).value;
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
  
  /**
   * Get users between two places of the highscores
   * @param {(string|integer)} startIndex Start index of the places range
   * @param {(string|integer)} endIndex End index of the places range
   * @returns {HighscoreUser}
   */
  getRangePlaces(startIndex, endIndex) {
    return this.entries.splice(startIndex + 1, endIndex + 1);
  }

}

module.exports = Highscore;
