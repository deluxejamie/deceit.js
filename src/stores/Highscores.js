const Highscore = require('../structures/Highscore');
const ELOHighscore = require('../structures/ELOHighscore');
const XPHighscore = require('../structures/XPHighscore');
const ReputationHighscore = require('../structures/ReputationHighscore');
const fetch = require('node-fetch');

class Highscores {

 /**
  * Fetch an highscores
  * @param {string} type The type of the highscores
  * @returns {Promise<Object[]>}
  */
  static async fetch(type) {
    const request = await fetch(`https://live.deceit.gg/hiscores?type=${type}`);
    const response = await request.json();
    if(request.status !== 200) throw new Error(response.error);

    const HighscoreType
      = type === 'elo' ? ELOHighscore
      : type === 'xp' ? XPHighscore
      : type === 'rep' ? ReputationHighscore
      : Highscore;

    return new HighscoreType({ entries: response });
  }

}

module.exports = Highscores;
