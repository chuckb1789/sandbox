var mongoose = require('mongoose');

// create the schema
var songSchema = mongoose.Schema({
    title: {type: String, required: true},
    album: String,
    artist: String,
    trackNum: Number,
    stars: Number,
    groupies: Array
});
// create the model
var Song = mongoose.model('Song', songSchema);

// export the model so we can use it in other files
module.exports = Song;