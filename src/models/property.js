//property schema
const mongoose = require("mongoose");
const User = require("./user");
const Address = require("./address");

const PropertySchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  address: {
    type: Address,
    required: true,
  },
  owner: {
    type: User,
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
  },
});

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
