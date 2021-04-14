const mongoose = require("mongoose");
const BaseUser = require("./user");

const EmployeeSchema = BaseUser.discriminator(
  "Employee",
  new mongoose.Schema({
    contractDate: {
      type: Date,
      required: true,
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
      requireed: true,
      lowercase: true,
      unique: true,
    },
  })
);

const Employee = EmployeeSchema
module.exports = Employee
