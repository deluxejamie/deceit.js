const Server = require('./Server');

class Party {
  constructor(data) {
    this.totalRankedQueue = data[Object.keys(data)[0]].rankedQueuedClientCount;
    this.totalCasualQueue = data[Object.keys(data)[0]].casualQueuedClientCount;
    this.totalCasualLobbies = data[Object.keys(data)[0]].casualQueuedPartyCount;
    this.connectionCount = data.connectionCount;
    this.clientCount = data.clientCount;
    this.servers = this.regions.reduce((a, v) => {
      return ({ ...a, [v]: new Server(v, data[Object.keys(data)[0]][`Region ${this.regions.indexOf(v)}`])});
    }, {});

    Object.defineProperty({}, 'clusters', { value: data.clusters });
  }

  get regions() {
    return ['english', 'spanish', 'german', 'russian', 'chinese', 'japanese',
      'korean', 'french', 'polish', 'portuguese', 'italian', 'hungarian', 'turkish',
      'thai', 'hebrew', 'brazilian', 'dutch', 'romanian', 'estonian'];
  }

  get availableRegions() {
    return Object.keys(this.servers).filter(region => this.servers[region].gameCount);
  }

  get availableServers() {
    return Object.fromEntries(Object.entries(this.servers).filter(([region]) => this.availableRegions.includes(region)));
  }

  get availableServersWithRankedQueue() {
    return Object.fromEntries(Object.entries(this.servers).filter(([region, server]) => server.rankedQueue));
  }

}

module.exports = Party;
