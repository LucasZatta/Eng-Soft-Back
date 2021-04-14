const Doctor = require("../models/doctor");

module.exports.getSpecialties = async function (req, res) {
  try {
    const doctorSpecialty = await Doctor.find().distinct('specialty');
    if (!doctorSpecialty) {
      return res
        .status(404)
        .json({ success: false, error: "Failed to fetch specialties" });
    }
    return res.status(200).json({ success: true, data: doctorSpecialty});
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

module.exports.getDocsBySpec = async function (req, res) {
    try {
      let doctorsBySpecialty = await Doctor.find()
      if (!doctorsBySpecialty) {
        return res
          .status(404)
          .json({ success: false, error: "Failed to fetch doctors" });
      }
      doctorsBySpecialty = doctorsBySpecialty.filter((x) => x.specialty == req.params.specialty);
      return res.status(200).json({ success: true, data: doctorsBySpecialty});
    } catch (err) {
      return res.status(400).json({ success: false, error: err });
    }
  };


