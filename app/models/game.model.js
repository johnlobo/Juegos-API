module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
        },
      min_people: {
        type: Sequelize.INTEGER
        },
      max_people: {
        type: Sequelize.INTEGER
        },
    });
  
    return Game;
  };