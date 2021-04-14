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
  })
);

const Patient = mongoose.model("Patient", PatientSchema)
module.exports = Patient