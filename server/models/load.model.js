const mongoose = require('mongoose');

const LoadSchema = new mongoose.Schema({
    load: {type: String, minlength:[3, "Load Material Must Be at Least 3 Characters"], required: [true, "Load Material Is A Required Field"]},
    type: {type: String, minlength:[3, "Load Type Must Be At Least 3 Characters"], required: [true, "Load Type Is A Required Field"]},
    endorsements: {type: String, minlength:[2, "Must Be At Least 2 Characters"], required: [true, "Endorsements Needed Is A Required Field"]},
    weight: {type: Number, min:[2000, "Load Weight Must be 1 Ton"], required:[true, "Load Weight Is A Required Field"]},
    startingAddress:{
        city: {type: String, minlength:[3, "City Must Be At Least 3 Characters"], required:[true, "Starting City is A Required Field"]},
        state: {type: String,minlength:[3, "State Must Be At Least 3 Characters"], required:[true, "Starting State is A Required Field"]},
        zip: {type: Number, minlength:[5, "Zip Code Must Be 5 Characters"], required: [true, "Starting Zip Code Is Required"]},
        streetAddress: {type: String, required:[true, "Starting Street Address Is A Required Field"]}
    },
    endingAddress:{
        city: {type: String, minlength:[3, "City Must Be At Least 3 Characters"], required:[true, "Ending City is A Required Field"]},
        state: {type: String,minlength:[3, "State Must Be At Least 3 Characters"], required:[true, "Ending State is A Required Field"]},
        zip: {type: Number, minlength:[5, "Zip Code Must Be 5 Characters"], required: [true, "Ending Zip Code Is Required"]},
        streetAddress: {type: String, required:[true, "Ending Street Address Is A Required Field"]}
    },
    distance: {type: Number, required:[true, "Distance Is A Required Field"]},
    pay: {type: Number, required:[true, "Pay Is A Required Field"]}
}, {timsestamps:true});

module.exports = mongoose.model('Load', LoadSchema);