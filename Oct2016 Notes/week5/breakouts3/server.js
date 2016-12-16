// bring in the express node module
var express = require('express');
var request = require('request');

// define which port this server will run on
// check if there is a PORT environment variable, or if not, just use 3000  
var PORT = process.env.PORT || 3000;

//console.log(global);

// create an express app object
var app = express();

// mount static fileserver middleware
// this will make the server send any files that live in the public folder
app.use(express.static('public'));

// define a GET route to /getData
app.get('/getData', (req,res)=>{
    // a route must always do one thing: serve a response

    request({
        method: "GET",
        url: 'https://us.api.battle.net/d3/profile/ChronoR-1565/',
        qs: {
            locale:"en_US",
            apikey:"6gy52vaj23mf2jt5vhbcmpts4gvsk9k2"
        }
    }, (err, response, body)=>{
        res.send(body);
    });

    // res.send('sup');
});

app.listen(PORT, (err)=>{
    console.log("Server up!");
})

