const Loadout = require('./Loadout');
const Perk = require('./Perk');

class User {
  constructor(data, Users) {
    this.id = data.userId;
    this.username = data.name;
    this.elo = Math.round(data.elo);
    this.rank = 20 - data.rank;
    this.marks = data.marks;
    this.tickets = data.tickets;
    this.level = data.level;
    this.prestige = data.prestige;
    this.emblem = data.emblem;
    this.reputation = data.reputation;
    this.dailyTickets = data.dailyXp;
    this.dailyTicketsRank = data.dailyXpRank;
    this.eloRank = data.eloRank;
    this.repRank = data.repRank;
    this.banner = data.banner;
    this.perks = data.perks.map(perkId => perkId !== -1 ? new Perk({ id: perkId }) : null);
    this.selectedCharacter = data.character === 0 ? 'Alex'
      : data.character === 1 ? 'Chang'
      : data.character === 2 ? 'Lisa'
      : data.character === 3 ? 'Rachel'
      : data.character === 4 ? 'Hans'
      : data.character === 5 ? 'Nina'
      : null;
    this.loadout = new Loadout(data.loadout);
    this.stats = data.stats;

    Object.defineProperty(this, 'users', { value: Users });
  }

  get _selectedCharacter() {
    return this.selectedCharacter === 'Alex' ? 0
      : this.selectedCharacter === 'Chang' ? 1
      : this.selectedCharacter === 'Lisa' ? 2
      : this.selectedCharacter === 'Rachel' ? 3
      : this.selectedCharacter === 'Hans' ? 4
      : this.selectedCharacter === 'Nina' ? 5
      : null;
  }

  async fetch() {
    return await this.users.fetch(this.id);
  }

}

module.exports = User;
