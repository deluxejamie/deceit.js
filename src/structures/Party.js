class Party {
  constructor(data) {
    this.servers = data[Object.keys(data)[0]];
    this.totalRankedQueue = this.servers.rankedQueuedClientCount;
    this.totalCasualQueue = this.servers.casualQueuedClientCount;
    this.totalCasualLobbies = this.servers.casualQueuedPartyCount;
    this.clusters = data.clusters;
    this.connectionCount = data.connectionCount;
    this.clientCount = data.clientCount;
    this.gameStartupCounts = data.gameStartupCounts;
  }

  get regions() {
    return ['english', 'spanish', 'german', 'russian', 'chinese', 'japanese',
      'korean', 'french', 'polish', 'portuguese', 'italian', 'hungarian', 'turkish',
      'thai', 'hebrew', 'brazilian', 'dutch', 'romanian', 'estonian'];
  }

  get availableRegions() {
    return Object.keys(this.servers)
      .filter(o => typeof this.servers[o] === 'object')
      .map(o => this.regions[o.substring('Region '.length)]);
  }

  get availableServers() {
    const servers = {};
    this.availableRegions.forEach(region => {
      const server = this.servers[`Region ${this.regions.indexOf(region)}`];
      servers[region] = {
        gameCount: server.gameCount,
        rankedQueue: server.rankedQueuedClientCount,
        casualQueue: server.casualQueuedClientCount,
        casualLobbies: server.casualQueuedPartyCount
      }
    });
    return servers;
  }

}
module.exports = Party;
