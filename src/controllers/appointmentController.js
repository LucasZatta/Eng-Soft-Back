const Appointment = require("../models/appointment");

module.exports.register = async function (req, res) {
  try {
    const appointment = await Appointment.create(req.body);
    return res.status(200).json({ success: true, data: appointment });
  } catch {
    return res.status(400).send(err);
  }
};

module.exports.getAppointments = async function (req, res) {
  try {
    let appointments = await Appointment.find();
    if (req.body != null)
      appointments = appointments.filter((x) => x.doctorId == req.body.id);
    return res.status(200).json({ success: true, data: appointment });
  } catch {
    return res.status(400).send(err);
  }
};
