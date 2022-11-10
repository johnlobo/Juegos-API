const { authJwt } = require("../middleware");
const controller = require("../controllers/game.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/games",
    [authJwt.verifyToken],
    controller.getAllGames
  );

  app.get(
    "/api/games/:gameId",
    [authJwt.verifyToken],
    controller.getOneGame
  );

  app.post(
    "/api/games",
    [authJwt.verifyToken],
    controller.insertGame
  );
  
  //app.put(
  //  "/api/games",
  //  [authJwt.verifyToken],
  //  controller.updateGame
  //);
//
  //app.delete(
  //  "/api/games",
  //  [authJwt.verifyToken],
  //  controller.deleteGame
  //);
  
};
