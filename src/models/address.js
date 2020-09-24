const mongoose = require("mongoose");
const State = require("./state");

const AddressSchema = new mongoose.Schema({
  state: {
    type: State,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  complement: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: false,
    default: null,
  },
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
