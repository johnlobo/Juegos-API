module.exports = {
  HOST: "localhost",
  USER: "juegos-dbadmin",
  PASSWORD: "Chinaski99",
  DB: "juegos-db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
