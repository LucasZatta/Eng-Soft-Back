const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const visitationController = require("./controllers/visitationController");

function routes(app) {
  app.route("/auth/register").post(authController.register);

  app.route("/auth/getUsers").get(authController.getUsers);

  app.route("/auth/getUserID/:cpf").get(authController.getUserID);

  app.route("/auth/deleteUser/:cpf").delete(authController.deleteUser)

  app.route("/auth/logIn").post(authController.logInAuth);

  app.route("/property/register").post(propertyController.register);

  app.route("/property/getProperty").get(propertyController.getProperty);

  app.route("/property/getFromUser").get(propertyController.getPropertyOfUser);

  app.route("/property/deleteProperty").delete(propertyController.deleteProperty);

  app.route("/property/getPropertyById/:id").get(propertyController.getPropertyById);

  app.route("/visitation/").post(visitationController.createNewVisitation);
}
module.exports = routes;
