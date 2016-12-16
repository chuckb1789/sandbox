// bring in the express code
var express = require('express');

// create our express server (app object)
var app = express();

// define the port that the server will run on
var port = 1337;

// express static fileserver middleware
// this will serve any files that live in the given folder
// it is very typical that this will be the public folder
// the public folder should be where all your front end files go (html, css, js)
app.use(express.static("./"));

// tell the server to listen for connections on a given port
app.listen(port, (err)=>{
    if(err) {
        console.log("Server error ", err);
    } else {
        console.log("Server started!");
    }
});