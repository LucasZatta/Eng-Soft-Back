const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");

function routes(app) {
  app.route("/auth/register").post(authController.register);

  app.route("/auth/getUsers").get(authController.getUsers);

  app.route("/auth/getUserID").get(authController.getUserID);

  app.route("/property/register").post(propertyController.register);
}
module.exports = routes;
