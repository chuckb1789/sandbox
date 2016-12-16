// hero model file

// require mongoose since this file will be setting up the schema and model for heroes
var mongoose = require('mongoose');

// define the hero schema - what the document should look like
var heroSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    powers: Array,
    weaknesses: Array,
    //sidekick: String,
    team: String,
    externalUnderwear: Boolean,
    created: {type: Date, default: ()=>new Date()}
});

// setup the mongoose model for heroes
// 1st parameter is the collection name - it will automatically lowercase and pluralize it
// 2nd parameter is the Schema
// optional 3rd parameter is the collection name override
module.exports = mongoose.model("Hero", heroSchema);