const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:19839"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
const Game = db.game;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//  // initial();
//  initGames();
//
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido al API de juegos" });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/game.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 19839;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

function initGames(){
  Game.create({
    id: 1,
    name: "Splendor",
    genre: "Gestión de recursos",
    min_people:2,
    max_people:4
  });

  Game.create({
    id: 2,
    name: "Hero realms",
    genre: "Deck building",
    min_people:2,
    max_people:4
  })

}