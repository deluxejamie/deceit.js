const PerkTree = require('../structures/PerkTree');
const Endpoints = require('../util/Endpoints');
const fetch = require('node-fetch');

class PerkTrees {

 /**
  * Fetch a perk tree
  * @param {(string|integer)} id Perk tree id
  * @returns {Promise<Object>}
  */
  static async fetch(id) {
    const request = await fetch(Endpoints.PERK_TREE.concat(id ? `?id=${id}` : ''));
    const response = await request.json();

    if(request.status !== 200) throw new Error(response.error);
    return new PerkTree(response);
  }

}

module.exports = PerkTrees;
