const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: String,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    race: {
        type: String,
        required: false
    },
    

 });


module.exports = mongoose.model("bounty", bountySchema);