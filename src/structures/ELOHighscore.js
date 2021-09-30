const Highscore = require('./Highscore');

class ELOHighscore extends Highscore {
  constructor(data, Highscores) {
    super(data, Highscores);
  }
}

module.exports = ELOHighscore;
