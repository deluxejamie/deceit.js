const perks = require('../resources/perks.json');

class Perk {
  constructor(data) {
    this.id = data.id;
    this.name = perks[data.id].name;
    this.description = perks[data.id].description;
  }
}

module.exports = Perk;
