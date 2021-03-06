const mongoose = require("mongoose");
const BaseUser = require("./user");

const DoctorSchema = BaseUser.discriminator(
  "Doctor",
  new mongoose.Schema({
    contractDate: {
      type: Date,
      default: Date.now,
    },
    salary: {
      type: Number,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    crm: {
      type: String,
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

const Doctor = DoctorSchema;
module.exports = Doctor;
