const db = require("../models");
const Game = db.game;

exports.getAllGames = async (req, res) => {
    try {
        // Find all games
        const games = await Game.findAll();
        console.log(games.every(game => game instanceof Game)); // true
        console.log("All games:", JSON.stringify(games, null, 2));
        res.status(200).send(JSON.stringify(games, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.getOneGame = async (req, res) => {
    try {
        // Find all games
        const games = await Game.findAll(
            {
                where: {
                  id: req.gameId
                }
              }
        );
        console.log(games.every(game => game instanceof Game)); // true
        console.log("All games:", JSON.stringify(games, null, 2));
        res.status(200).send(JSON.stringify(games, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.insertGame = async (req, res) => {
    try {
        // Find all games
        const games = await Game.findAll();
        console.log(games.every(game => game instanceof Game)); // true
        console.log("All games:", JSON.stringify(games, null, 2));
        res.status(200).send(JSON.stringify(games, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.updateGames = async (req, res) => {
    try {
        // Find all games
        const games = await Game.findAll();
        console.log(games.every(game => game instanceof Game)); // true
        console.log("All games:", JSON.stringify(games, null, 2));
        res.status(200).send(JSON.stringify(games, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.deleteGame = async (req, res) => {
    try {
        // Find all games
        const games = await Game.findAll();
        console.log(games.every(game => game instanceof Game)); // true
        console.log("All games:", JSON.stringify(games, null, 2));
        res.status(200).send(JSON.stringify(games, null, 2));
    } catch (error) {
        console.log(error);
    }
};
