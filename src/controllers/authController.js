const { isExternalModuleNameRelative } = require("typescript");
const User = require("../models/user");

module.exports.register = async function (req, res) {
  try {
    const user = await User.create(req.body);
    console.log({ user });

    return res.send({ user });
  } catch (err) {
    return res.status(400).send(err);
  }
};

//getUsers
module.exports.getUsers = async function (_, res) {
  try {
    const users = await User.find({});
    if (!users.lenght) {
      return res.status(404).json({ success: false, error: "Users not found" });
    }
    return res.status(200).json({ success: true, data: users });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};
//getUserbyID
module.exports.getUserID = async function (req, res) {
  try {
    const user = await User.findOne({ cpf: req.body.cpf }); //req.params.body -> fetches using whats on the url
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};
//module.exports.getUserID = async function()
//deleteUserbyID
