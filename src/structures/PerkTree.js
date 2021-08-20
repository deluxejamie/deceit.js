const Perk = require('./Perk');

class PerkTree {
  constructor(data) {
    this.id = data.id;
    this.perks = data.tree.map(p => p.map(perkId => new Perk({ id: perkId })));
  }
}

module.exports = PerkTree;
