const User = require('../structures/User');
const fetch = require('node-fetch');

class Users {

 /**
  * Fetch an user data
  * @param {string} idType Type of the id
  * @param {(string|integer)} id User id
  * @returns {Promise<Object>}
  */
  static async fetch(id) {
    const type = id.length === 17 ? 'steamId' : 'userId';
    const request = await fetch(`https://live.deceit.gg/stats?${type}=${id}`);
    const response = await request.json();

    if(request.status !== 200) throw new Error(response.error);
    return new User(response);
  }

}

module.exports = Users;
