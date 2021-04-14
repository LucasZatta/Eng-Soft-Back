const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  doctorId: {
    type: Number,
    required: true
  }
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
