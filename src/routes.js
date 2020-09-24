const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");

function routes(app) {
  app.route("/auth/register").post(authController.register);

  app.route("property/register").post(propertyController.register);
}
module.exports = routes;
