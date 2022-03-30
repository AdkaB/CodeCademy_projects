const team = {
    _players: [
      {
      firstName: 'Pablo',
      lastName: 'Piccasso',
      age: 32,
      },
      {
      firstName: 'Gabriel',
      lastName: 'Sanchez',
      age: 31,
      },
      {
      firstName: 'Juan',
      lastName: 'Pancho',
      age: 36,
      }
    ],
  
    _games: [
      {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
      },
      {
      opponent: 'Manchester',
      teamPoints: 65,
      opponentPoints: 54,
      },
      {
      opponent: 'Barcelona',
      teamPoints: 43,
      opponentPoints: 39,
      }
    ],
  
    get players () {
      return this._players;
    },
    get games () {
      return this._games;
    },
    addPlayer (firstName, lastName, age) {
      const player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      return this.players.push(player);
    },
    addGame (opponent, teamPoints, opponentPoints) {
      const game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
      };
      return this.games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players)
  
  team.addGame('Titans', 34, 65);
  team.addGame('Pearls', 34, 65);
  team.addGame('Chunks', 34, 65);
  
  console.log(team.games);
  