const Highscore = require('./Highscore');

class ELOHighscore extends Highscore {
  constructor(data, Highscores) {
    super(data, Highscores);
  }

  get defaultELO() {
    return 1200;
  }

}

module.exports = ELOHighscore;
