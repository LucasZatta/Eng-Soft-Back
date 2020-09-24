const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
  stateName: {
    type: String,
    required: true,
  },
});

const StateName = mongoose.model("State", StateSchema);
module.exports = StateName;
