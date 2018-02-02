const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desription: {
        type: String,
        required: true
    },
    upVotes: Number,
    totalVotes: Number     
})

module.exports = mongoose.model("issue", issueSchema);
