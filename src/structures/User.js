const Loadout = require('./Loadout');
const Perk = require('./Perk');

class User {
  constructor(data, Users) {
    this.id = data.userId;
    this.username = data.name;
    this.elo = data.elo;
    this.rank = 20 - data.rank;
    this.marks = data.marks;
    this.tickets = data.tickets;
    this.level = data.level;
    this.prestige = data.prestige;
    this.emblem = data.emblem;
    this.reputation = data.reputation;
    this.dailyXp = data.dailyXp;
    this.dailyXpRank = data.dailyXpRank;
    this.eloRank = data.eloRank;
    this.repRank = data.repRank;
    this.banner = data.banner;
    this.perks = data.perks.map(perkId => perkId !== -1 ? new Perk({ id: perkId }) : -1);
    this.selectedCharacter = data.character;
    this.loadout = new Loadout(data.loadout);
    this.stats = data.stats;

    Object.defineProperty(this, 'users', { value: Users });
  }

  get selectedCharacterName() {
    return this.selectedCharacter === 0 ? 'Alex'
      : this.selectedCharacter === 1 ? 'Chang'
      : this.selectedCharacter === 2 ? 'Lisa'
      : this.selectedCharacter === 3 ? 'Rachel'
      : this.selectedCharacter === 4 ? 'Hans'
      : this.selectedCharacter === 5 ? 'Nina'
      : 'Unknown';
  }

  async fetch() {
    return await this.users.fetch(this.id);
  }

}

module.exports = User;
