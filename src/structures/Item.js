const items = require('../resources/items.json');

class Item {
  constructor(data) {

    const item = items.find(i => i['Global ID'] === data.id);

    this.id = item['Global ID'];
    this.alias = item['Alias'].replaceAll('_', ' ');
    this.rarity = {
      name: item['Rarity'],
      id: item['Rarity'] === 'Common' ? 0
        : item['Rarity'] === 'Uncommon' ? 1
        : item['Rarity'] === 'Rare' ? 2
        : item['Rarity'] === 'Legendary' ? 3
        : 'Unknown'
    }
    this.default = item['Default Unlock'] === 'TRUE' ? true : false;
    this.vault = item['Vault'] === 'TRUE' ? true : false;
    this.base = item['Base Reward'] === 'TRUE' ? true : false;
    this.exclusive = item['Exclusive'] === 'TRUE' ? true : false;
    this.collection = item['Collection ID'] || null;
    this.event = item['Event'] ? {
      name: item['Event'],
      year: item['Event Year']
    } : null;
  }
}

module.exports = Item;
