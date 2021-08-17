const Item = require('./Item');

class Equipment {
  constructor(data) {
    this.hair = new Item({ id: data[0] });
    this.accessory = new Item({ id: data[1] });
    this.clothes = new Item({ id: data[2] });
    this.wristband = new Item({ id: data[3] });
    this.pistol = new Item({ id: data[4] });
    this.knife = new Item({ id: data[5] });
    this.victoryPose = new Item({ id: data[6] });
    this.defeatPose = new Item({ id: data[7] });
    this.spray = new Item({ id: data[8] });
  }
}

module.exports = Equipment;
