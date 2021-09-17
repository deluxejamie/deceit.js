const Item = require('./Item');

class Equipment {
  constructor(data) {
    this.hair = data[0] !== -1 ? new Item({ id: data[0] }) : -1;
    this.accessory = data[1] !== -1 ? new Item({ id: data[1] }) : -1;
    this.clothes = data[2] !== -1 ? new Item({ id: data[2] }) : -1;
    this.wristband = data[3] !== -1 ? new Item({ id: data[3] }) : -1;
    this.pistol = data[4] !== -1 ? new Item({ id: data[4] }) : -1;
    this.knife = data[5] !== -1 ? new Item({ id: data[5] }) : -1;
    this.victoryPose = data[6] !== -1 ? new Item({ id: data[6] }) : -1;
    this.defeatPose = data[7] !== -1 ? new Item({ id: data[7] }) : -1;
    this.spray = data[8] !== -1 ? new Item({ id: data[8] }) : -1;
  }
}

module.exports = Equipment;
