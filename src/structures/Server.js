class Server {
  constructor(data) {
    if(data) {
      this.gameCount = data.gameCount;
      this.rankedQueue = data.rankedQueuedClientCount;
      this.casualQueue = data.casualQueuedClientCount;
      this.casualLobbies = data.casualQueuedPartyCount;
    }
  }



}
module.exports = Server;
