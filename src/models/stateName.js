const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const StateName = mongoose.model("StateName", StateSchema);
module.exports = StateName;
