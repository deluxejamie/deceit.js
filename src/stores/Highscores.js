const Highscore = require('../structures/Highscore');
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
    return new Highscore({ entries: response, type });
  }

}

module.exports = Highscores;
