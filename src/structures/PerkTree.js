const Perk = require('./Perk');
const perks = require('../resources/perks.json');

class PerkTree {
  constructor(data) {
    this.id = data.id;
    this.perks = data.tree.map(s => s.map(perkId => {
      return new Perk(Object.assign({ id: perkId }, perks[perkId]));
    }));
  }

}

module.exports = PerkTree;
