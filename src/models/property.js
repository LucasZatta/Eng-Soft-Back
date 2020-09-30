//property schema
const mongoose = require("mongoose");
const User = require("./user");
const Address = require("./address");

//owner doesnt have to be a subdocument. Maybe use cpf to ref the owner?

const PropertySchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  address: {
    type: Address.schema,
    required: true,
  },
  ownerID: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rent_value: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  garage_spots: {
    type: Number,
    required: true,
  },
  living_rooms: {
    type: Number,
    required: true,
  },
  suites: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  cabinet: {
    type: Boolean,
    required: true,
    default: false,
  },
  concierge24: {
    type: Boolean,
    required: true,
    default: false,
  }
});

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
