class Party {
  constructor(data) {
    this.games = data[Object.keys(data)[0]];
    this.clusters = data.clusters;
    this.connectionCount = data.connectionCount;
    this.clientCount = data.clientCount;
    this.gameStartupCounts = data.gameStartupCounts;
  }
}

module.exports = Party;
