const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    downVotes: Number,
    upVotes: Number,
    totalVotes: Number,
    comments: String
    }
)

module.exports = mongoose.model("issue", issueSchema);
