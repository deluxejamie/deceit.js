const Item = require('./Item');

class Equipment {
  constructor(data) {
    this.hair = data[0] !== -1 ? new Item({ id: data[0] }) : null;
    this.accessory = data[1] !== -1 ? new Item({ id: data[1] }) : null;
    this.clothes = data[2] !== -1 ? new Item({ id: data[2] }) : null;
    this.wristband = data[3] !== -1 ? new Item({ id: data[3] }) : null;
    this.pistol = data[4] !== -1 ? new Item({ id: data[4] }) : null;
    this.knife = data[5] !== -1 ? new Item({ id: data[5] }) : null;
    this.victoryPose = data[6] !== -1 ? new Item({ id: data[6] }) : null;
    this.defeatPose = data[7] !== -1 ? new Item({ id: data[7] }) : null;
    this.spray = data[8] !== -1 ? new Item({ id: data[8] }) : null;
  }
}

module.exports = Equipment;
