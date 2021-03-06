const Property = require("../models/property");
const Visitation = require("../models/visitation");

module.exports.register = async function (req, res) {
  try {
    const property = await Property.create(req.body);
    //console.log({ property });

    return res.status(200).json({ success: true, data: property });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.getProperty = async function (req, res) {
  try {
    const properties = await Property.find();
    if (!properties) {
      return res
        .status(404)
        .json({ success: false, error: "Failed to fetch property" });
    }

    const propResponse = await Promise.all(properties.map(async (property) => {
      const existingVisitations = await Visitation.find({propertyID: property.id});

      return {
        ...property.toJSON(),
        nonAvailable: existingVisitations
            .filter( visitation => visitation.date.getTime() > Date.now())
            .map(visitation => visitation.date)
      }
    }));

    return res.status(200).json({ success: true, data: propResponse });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

module.exports.getPropertyOfUser = async function (req, res) {
  try {
    const properties = await Property.find({ ownerCPF: req.params.cpf });
    if (!properties) {
      return res
        .status(404)
        .json({ success: false, error: "Failed to fetch user properties" });
    }

    return res.status(200).json({ success: true, data: properties });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

module.exports.getPropertyById = async function (req, res) {
  try {
    const property = await Property.findOne({ id: req.params.id });
    if (!property) {
      return res
        .status(404)
        .json({ success: false, error: "Failed to fetch property" });
    }
    const existingVisitations = await Visitation.find({propertyID: req.params.id});

    return res.status(200).json({ success: true, data: {
      ...property.toObject(),
        nonAvailable: existingVisitations
            .filter( visitation => visitation.date.getTime() > Date.now())
            .map(visitation => visitation.date)
    } });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

module.exports.deleteProperty = async function (req, res) {
  try {
    const property = await Property.findOneAndDelete({ id: req.params.id });
    if (!property) {
      return res
        .status(404)
        .json({ success: false, error: "Could not find requested document" });
    }
    return res
      .status(200)
      .json({ success: true, msg: "User deleted", data: property });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

// module.exports.checkAvailability = async function (req, res, visitDate) {
//   try {
//     const property = await Property.find({ id: req.params.id });
//     if (!property) {
//       return res
//         .status(404)
//         .json({ success: false, error: "Could not find requested document" });
//     }
//     for (pickedDate in property.nonAvailableVisitDates) {
//       if (pickedDate != visitDate)
//         return res.status(204).json({ success: false, error: "Date selected is not available" });
//     }
//     property.nonAvailableVisitDates.append(visitDate);
//   } catch (err) {
//     return res.status(400).json({ success: false, error: err });
//   }
// };

/*and address can only be registered as the owner registers a new
property is being registered, so no need for a address controller*/
