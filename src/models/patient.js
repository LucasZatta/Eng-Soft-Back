const mongoose = require("mongoose");
const BaseUser = require("./user");

const PatientSchema = BaseUser.discriminator(
  "Patient",
  new mongoose.Schema({
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    bloodType: {
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

const Patient = PatientSchema;
module.exports = Patient;
