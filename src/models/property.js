//property schema
const mongoose = require("mongoose");
const User = require("./user");
const Address = require("./address");


const PropertySchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  is_apartament: {
    type: Boolean,
    required: true,
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
    required: false,
    default: false,
  },
  floor:{
    type:Number,
    required: false
  },
  condo_value:{
    type:Number,
    required: false
  }
});

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
