const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    requireed: true,
    lowercase: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//console.log(mongoose);
const User = mongoose.model("User", UserSchema);
module.exports = User;
