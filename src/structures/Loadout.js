const Equipment = require('./Equipment');
const Item = require('./Item');

class Loadout {
  constructor(data) {
    this.alex = new Equipment(data['0']);
    this.chang = new Equipment(data['1']);
    this.lisa = new Equipment(data['2']);
    this.rachel = new Equipment(data['3']);
    this.hans = new Equipment(data['4']);
    this.nina = new Equipment(data['5']);
    this.experiment = new Item({ id: data['6'][0] });
    this.yeti = new Item({ id: data['7'][0] });
    this.werewolf = new Item({ id: data['8'][0] });
    this.vampire = new Item({ id: data['9'][0] });
    this.spider = new Item({ id: data['10'][0] });
  }
}

module.exports = Loadout;
