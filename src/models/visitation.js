const mongoose = require("mongoose");

const VisitationSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    propertyID:{
        type: String,
        required: true
    },
    visitorCPF:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

//console.log(mongoose);
const Visitation = mongoose.model("Visitation", VisitationSchema);
module.exports = Visitation;
