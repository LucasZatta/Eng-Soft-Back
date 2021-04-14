const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const visitationController = require("./controllers/visitationController");

function routes(app) {
  app.route("/auth/register").post(authController.registerEmployee);

  app.route("/auth/getDoctors").get(authController.getDoctors);

  app.route("/auth/getEmployess").get(authController.getEmployees);

  app.route("/auth/getDoctorID/:cpf").get(authController.getDoctorById);

  app.route("/auth/getEmployeeID/:cpf").get(authController.getDoctorById);

  app.route("/auth/deleteDoctor/:cpf").delete(authController.deleteDoctor)

  app.route("/auth/deleteEmployee/:cpf").delete(authController.deleteEmployee)

  app.route("/auth/logIn").post(authController.logInAuthEmployee);

  app.route("/visitation/").post(visitationController.createNewVisitation);
}
module.exports = routes;
