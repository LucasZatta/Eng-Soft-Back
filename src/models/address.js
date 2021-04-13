const mongoose = require("mongoose");
const State = require("./stateName");

/*State field is a String. The state field continues to exist
but only to feed the front end Address Form the name of the states.
once selected on the form, the state is gonna be passed as a normal String
on the json body*/

/*If the state isnt registered on the db, the option "other" is going
to be checked on the form. This is will tell the controller if the state
is a unregistered one. If true, the registerNewState is going to be called together
with the normal Address Post method. */

const AddressSchema = new mongoose.Schema({
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
  complement: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
