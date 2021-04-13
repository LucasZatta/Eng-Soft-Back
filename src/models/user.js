const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requireed: true,
    lowercase: true,
    unique: true,
  },
  cep: {
    type: String,
    required: true,
    unique: true,
  },
  complement: {
    type: String,
    required: true,
  },
  state: {
    type: String,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//console.log(mongoose);
const User = mongoose.model("User", UserSchema);
module.exports = User;
