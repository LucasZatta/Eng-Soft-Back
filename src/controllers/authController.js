const Employee = require("../models/employee");
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");

const bcrypt = require("bcrypt");

//Regular employee auth controllers
module.exports.registerEmployee = async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //console.log(hashedPassword);
    req.body.password = hashedPassword;
    if (req.body.isDoc == "true") {
      const doctor = await Doctor.create(req.body);
      // console.log({ user });

      return res.send({ doctor });
    } else {
      const employee = await Employee.create(req.body);
      // console.log({ user });

      return res.send({ employee });
    }
  } catch (err) {
    return res.status(400).send(err);
  }
};

//Get all registered Employees
module.exports.getEmployees = async function (req, res) {
  try {
    if (req.body.name != "") {
      const employees = await Employee.find();
      if (!employees) {
        return res
          .status(404)
          .json({ success: false, error: "Failed to fetch employees" });
      }
      return res.status(200).json({ success: true, data: employees });
    }
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

//getEmployeesById
module.exports.getEmployeeById = async function (req, res) {
  try {
    const employee = await Employee.findOne({ cpf: req.params.cpf }); //req.params.body -> fetches using whats on the url
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, error: "Employee not found" });
    }
    return res.status(200).json({ success: true, data: employee });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

//deleteEmployeesByID
module.exports.deleteEmployee = async function (req, res) {
  try {
    const employee = await Employee.findOneAndDelete({ cpf: req.body.cpf });
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, error: "Could not find requested document" });
    }
    return res
      .status(200)
      .json({ success: true, msg: "Employee deleted", data: employee });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

module.exports.registerDoctor = async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //console.log(hashedPassword);
    req.body.password = hashedPassword;
    const doctor = await Doctor.create(req.body);
    // console.log({ user });

    return res.send({ doctor });
  } catch (err) {
    return res.status(400).send(err);
  }
};

//Get all registered Doctors
module.exports.getDoctors = async function (req, res) {
  try {
    if (req.body.name != "") {
      const doctors = await Doctor.find();
      if (!doctors) {
        return res
          .status(404)
          .json({ success: false, error: "Failed to fetch employees" });
      }
      return res.status(200).json({ success: true, data: doctors });
    }
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

//getDoctorById
module.exports.getDoctorById = async function (req, res) {
  try {
    const doctor = await Doctor.findOne({ cpf: req.params.cpf }); //req.params.body -> fetches using whats on the url
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, error: "Doctor not found" });
    }
    return res.status(200).json({ success: true, data: doctor });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

//deleteDoctorByID
module.exports.deleteDoctor = async function (req, res) {
  try {
    const doctor = await Doctor.findOneAndDelete({ cpf: req.params.cpf });
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, error: "Could not find requested document" });
    }
    return res
      .status(200)
      .json({ success: true, msg: "Doctor deleted", data: doctor });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};


module.exports.registerPatient = async function (req, res) {
  try {
    const patient = await Patient.create(req.body);

    return res.send({ patient });
  } catch (err) {
    return res.status(400).send(err);
  }
};


//Get all registered Employees
module.exports.getPatients = async function (req, res) {
  try {
    if (req.body.name != "") {
      const patient = await Patient.find();
      if (!patient) {
        return res
          .status(404)
          .json({ success: false, error: "Failed to fetch Patients" });
      }
      return res.status(200).json({ success: true, data: patient });
    }
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

//Login auth method
module.exports.logInAuthEmployee = async function (req, res) {
  try {
    var docResult = false;
    var empResult = false;
    const employee = await Employee.findOne({ email: req.body.username });
    const doctor = await Doctor.findOne({ email: req.body.username });

    if (doctor) {
      docResult = await auxAuth(doctor, req);
    }
    if (employee) {
      empResult = await auxAuth(employee, req);
    }
    if (docResult) {
      return res.status(200).json({ success: true, data: doctor });
    }
    if (empResult) {
      return res.status(200).json({ success: true, data: empResult });
    } else {
      return res
        .status(404)
        .json({ success: false, error: "Password not matched" });
    }
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

//auxiliar auth method
auxAuth = async function (document, req) {
  const match = await bcrypt.compare(req.body.password, document.password);
  //console.log(match);
  if (match == true) {
    return true;
  } else {
    return false;
  }
};
