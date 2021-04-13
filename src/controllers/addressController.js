const Address = require("../models/address");

module.exports.register = async function (req, res) {
  try {
    const address = await Address.create(req.body);
    return res.status(200).json({ success: true, data: address });
  } catch {
    return res.status(400).send(err);
  }
};

module.exports.getAddresses = async function (req, res) {
  const addresses = await Address.find();
  return res.status(200).json({ success: true, data: addresses });
};
