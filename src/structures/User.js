class User {
  constructor(data) {
    this.id = data.userId;
    this.username = data.name;
    this.elo = data.elo;
    this.rank = 20 - data.rank;
    this.marks = data.marks;
    this.xp = data.experience;
    this.level = data.level;
    this.prestige = data.prestige;
    this.emblem = data.emblem;
    this.reputation = data.reputation;
    this.dailyXp = data.dailyXp;
    this.dailyXpRank = data.dailyXpRank;
    this.eloRank = data.eloRank;
    this.repRank = data.repRank;
    this.banner = data.banner;
    this.perks = data.perks;
    this.character = {
      name: data.character === 0 ? 'Alex'
        : data.character === 1 ? 'Chang'
        : data.character === 2 ? 'Lisa'
        : data.character === 3 ? 'Rachel'
        : data.character === 4 ? 'Hans'
        : data.character === 5 ? 'Nina'
        : 'Unknown',
      id: data.character
    }
    this.loadout = data.loadout;
    this.stats = data.stats;
  }
}

module.exports = User;
