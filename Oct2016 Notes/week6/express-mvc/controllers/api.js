// this is our api controller, it contains all of our route handler functions for the api endpoints defined in routes.js

// require the songs model so we can interact with the collection in the route handlers
var Songs = require('../models/songs.js');

// export all of the route handlers so we can reference them in routes.js
module.exports = {

    // route handler to get all songs in the database
    getAllSongs: (req, res) =>{
        Songs.find({}, (err, docs)=>{
            if(err){
                console.log("Error getting songs from database: ", err);
                res.send(err);
            } else {
                console.log("Songs from DB: ", docs);
                res.send(docs);
            }
        });
    },
    // route handler to get a specific song based on the title
    getSong: (req, res) =>{
        Songs.findOne({title: req.params.title}, (err, doc)=>{
            if(err){
                console.log("Error getting song from database: ", err);
                res.send(err);
            } else {
                console.log("Song from DB: ", doc);
                res.send(doc);
            }
        });
    },
    // route handler to store a song in the database
    createSong: (req, res) =>{
        // instantiate a new song from the data in the request body, using the schema for validation
        var newSong = new Songs(req.body);

        // save the new song in the database
        newSong.save((err, doc) => {
            if(err){
                console.log("Error saving song to database: ", err);
                res.send(err);
            } else {
                console.log("Song saved to DB: ", doc);
                res.send(doc);
            }
        });
    },
}