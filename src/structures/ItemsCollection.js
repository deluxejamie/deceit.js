const items = require('../resources/items.json');

class ItemsCollection {
  constructor(data, Item) {
    const collection = items.filter(i => i['Collection ID'] === data.id);

    this.id = data.id;
    this.items = collection.map(i => new Item({ id: i['Global ID'] }));
  }
}

module.exports = ItemsCollection;
