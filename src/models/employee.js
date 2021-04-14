const mongoose = require("mongoose");
const BaseUser = require("./user");

const EmployeeSchema = BaseUser.discriminator(
  "Employee",
  new mongoose.Schema({
    contractDate: {
      type: Date,
      default: Date.now,
    },
    salary: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
  })
);

const Employee = EmployeeSchema;
module.exports = Employee;
