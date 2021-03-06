const Appointment = require("../models/appointment");

module.exports.register = async function (req, res) {
  try {
    if (req.body != null) {
      const appointment = await Appointment.create(req.body);
      return res.status(200).json({ success: true, data: appointment });
    }
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.getAppointments = async function (req, res) {
  try {
    let appointments = await Appointment.find();
    if (req.params.id != null)
      appointments = appointments.filter((x) => x.doctorId == req.params.crm);
    return res.status(200).json({ success: true, data: appointments });
  } catch (err) {
    return res.status(400).send(err);
  }
};
