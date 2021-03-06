const authController = require("./controllers/authController");
const visitationController = require("./controllers/visitationController");
const appointmentController = require("./controllers/appointmentController");
const addressController = require("./controllers/addressController");
const doctorController = require("./controllers/doctorsController");

function routes(app) {
  app.route("/auth/register").post(authController.registerEmployee);

  app.route("/auth/registerPatient").post(authController.registerPatient);

  app.route("/auth/getDoctors").get(authController.getDoctors);

  app.route("/auth/getEmployees").get(authController.getEmployees);
  
  app.route("/auth/getPatients").get(authController.getPatients);

  app.route("/auth/getDoctorID/:cpf").get(authController.getDoctorById);

  app.route("/auth/getEmployeeID/:cpf").get(authController.getEmployeeById);

  app.route("/auth/deleteDoctor/:cpf").delete(authController.deleteDoctor)

  app.route("/auth/deleteEmployee/:cpf").delete(authController.deleteEmployee)

  app.route("/auth/logIn").post(authController.logInAuthEmployee);

  app.route("/visitation/").post(visitationController.createNewVisitation);

  app.route("/appointment/").post(appointmentController.register)

  app.route("/appointment/:id?").get(appointmentController.getAppointments)

  app.route("/address/:cep?").get(addressController.getAddresses)

  app.route("/address/").post(addressController.register)

  app.route("/filter/specialty").get(doctorController.getSpecialties)

  app.route("/filter/doc/:specialty").get(doctorController.getDocsBySpec)

}
module.exports = routes;
