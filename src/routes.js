const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");

function routes(app) {
  app.route("/auth/register").post(authController.register);

  app.route("/auth/getUsers").get(authController.getUsers);

  app.route("/auth/getUserID/:cpf").get(authController.getUserID);

  app.route("/auth/deleteUser/:cpf").delete(authController.deleteUser)

  app.route("/auth/logIn/:email/:password").post(authController.logInAuth);

  app.route("/property/register").post(propertyController.register);
}
module.exports = routes;
