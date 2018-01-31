// -Schemas will always be in the models folder
// -This is where we need to import the mongoose interface
// -Schemas:  defining a blueprint for blueprints; it's a Constructor
//      that makes models, which is a constructor for resources

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ismSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    whoSaidIt: {
        type: String,
        required: true
    }
},
{ timestamp: {createdAt: 'created_at'}}
);

module.exports = mongoose.model("Ism", ismSchema);