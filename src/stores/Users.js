const User = require('../structures/User');
const Endpoints = require('../util/Endpoints');
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
    const request = await fetch(`${Endpoints.USER_STATS}?${type}=${id}`);
    const response = await request.json();

    if(request.status !== 200) throw new Error(response.error);
    return new User(response, this);
  }

}

module.exports = Users;
