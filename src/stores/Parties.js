const Party = require('../structures/Party');
const fetch = require('node-fetch');

class Parties {

 /**
  * Fetch server party informations
  * @returns {Promise<Object>}
  */
  static async fetch() {
    const request = await fetch('https://live.deceit.gg/party');
    const response = await request.json();

    return new Party(response);
  }

}

module.exports = Parties;
