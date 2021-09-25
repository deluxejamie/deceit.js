const items = require('../resources/items.json');
const ItemsCollection = require('./ItemsCollection');

class Item {
  constructor(data) {

    const item = items.find(i => i['Global ID'] === data.id);

    this.id = item['Global ID'];
    this.alias = item['Alias'].replaceAll('_', ' ');
    this.rarity = item['Rarity'];
    this.default = item['Default Unlock'] === 'TRUE' ? true : false;
    this.vault = item['Vault'] === 'TRUE' ? true : false;
    this.base = item['Base Reward'] === 'TRUE' ? true : false;
    this.exclusive = item['Exclusive'] === 'TRUE' ? true : false;
    this.collectionId = item['Collection ID'] || null;
    this.event = item['Event'] ? {
      name: item['Event'],
      year: item['Event Year']
    } : null;
  }

  get _rarity() {
    return this.rarity === 'Common' ? 0
      : this.rarity === 'Uncommon' ? 1
      : this.rarity === 'Rare' ? 2
      : this.rarity === 'Legendary' ? 3
      : null;
  }

  get collection() {
    return new ItemsCollection({ id: this.collectionId }, Item);
  }

}

module.exports = Item;
