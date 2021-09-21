const Party = require('../structures/Party');
const Endpoints = require('../util/Endpoints');
const fetch = require('node-fetch');

class Parties {

 /**
  * Fetch server party informations
  * @returns {Promise<Object>}
  */
  static async fetch() {
    const request = await fetch(Endpoints.PARTY);
    const response = await request.json();

    return new Party(response);
  }

}

module.exports = Parties;
