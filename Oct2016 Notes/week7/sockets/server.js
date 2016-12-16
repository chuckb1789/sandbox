// require dependencies
var express = require('express');
var logger = require('morgan');
var io = require('socket.io');
var nodeTweetStream = require('node-tweet-stream');

// set port to run server on
var PORT = process.env.PORT || 3000;

// create express app object
var app = express();

// mount middleware
app.use(logger('dev'));
app.use(express.static('public'));

// listen for connections on port 3000
var server = app.listen(PORT, (err)=>{
    if(err){
        console.log("Error starting server ", err);
    } else {
        console.log("Started server on port ", PORT);
    }
});

// set up the twitter API - get the keys from the environment variables
var twitterStream = nodeTweetStream({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    token: process.env.token,
    token_secret: process.env.token_secret
});
// tell the twitter stream to track tweets by keyword
twitterStream.track('software');

// initialize a socket server
var socketServer = io(server);

// check for client connections
socketServer.on('connection', (socket)=>{
    console.log("Socket server connected! port", PORT);

    // check for number events
    socket.on('number', (data)=>{
        console.log("Data received: ", data);

        // modify the data and send it back to the clients  
        var newNumber = data * 10000;
        socketServer.emit('newNumber', newNumber);
    });

    // check for tweet events and send the tweet to the clients
    twitterStream.on('tweet', (tweetData)=>{
        socket.emit('tweeter', tweetData);
    });
});
