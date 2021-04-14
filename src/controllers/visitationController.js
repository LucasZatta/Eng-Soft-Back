const Visitation = require("../models/visitation");

module.exports.createNewVisitation = async function (req, res) {
    try {
        const visitation = await Visitation.create(req.body);

        return res.status(200).json({ success: true, data: visitation });
    } catch (err) {
        return res.status(400).send(err);
    }
};
