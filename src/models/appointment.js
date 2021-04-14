const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  patientemail: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  doctorId: {
    type: Number,
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
