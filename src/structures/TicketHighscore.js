const Highscore = require('./Highscore');

class TicketHighscore extends Highscore {
  constructor(data, Highscores) {
    super(data, Highscores);
  }
}

module.exports = TicketHighscore;
