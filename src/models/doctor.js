const mongoose = require("mongoose");
const BaseUser = require("./user");

const DoctorSchema = BaseUser.discriminator(
  "Doctor",
  new mongoose.Schema({
    contractDate: {
      type: Date,
      required: true,
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
      requireed: true,
      lowercase: true,
      unique: true,
    },
  })
);

const Doctor = mongoose.model("Doctor", DoctorSchema);
module.exports = Doctor;
