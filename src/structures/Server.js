class Server {
  constructor(name, data) {
    this.name = name;

    if(data) {
      this.gameCount = data.gameCount;
      this.rankedQueue = data.rankedQueuedClientCount;
      this.casualQueue = data.casualQueuedClientCount;
      this.casualLobbies = data.casualQueuedPartyCount;
    }
  }

  get available() {
    return !!this.gameCount;
  }

}

module.exports = Server;
