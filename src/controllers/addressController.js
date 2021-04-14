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
  try {
    let addresses = await Address.find();
    if (req.params.cep != null)
      addresses = addresses.filter((x) => x.cep == req.params.cep);
    return res.status(200).json({ success: true, data: addresses });
  } catch (err) {
    return res.status(400).send(err);
  }
};
