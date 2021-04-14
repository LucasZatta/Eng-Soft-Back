const mongoose = require("mongoose");

const baseUserOptions = {
  discriminatorKey: 'usertype',
  collection: 'users'
};

const UserSchema = new mongoose.Schema({
  cpf: {
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
}, baseUserOptions);


//console.log(mongoose);
const User = mongoose.model("User", UserSchema);
module.exports = User;
