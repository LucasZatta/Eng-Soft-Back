const Property = require("../models/property");

module.exports.register = async function (req, res) {
  try {
    const property = await Property.create(req.body);
    console.log({ property });

    return res.send({ property });
  } catch (err) {
    return res.status(400).send(err);
  }
};
/*and address can only be registered as the owner registers a new
property is being registered, so no need for a address controller*/
