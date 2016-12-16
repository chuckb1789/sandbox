// require our dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var Routes = require('./routes.js'); // require the routes.js file, giving us access the the exported function

// create our express app object
var app = express();

// define the port that the server should run on
var PORT = process.env.PORT || 3000;

// Connect to database
mongoose.connect('mongodb://localhost/ExpressMVC', (error)=>{
    if(error) {
        console.log("Error connecting to database!");
    } else {
        console.log("Connected to database!");
    }
});

// Mount middleware
app.use(logger('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

// Routes - call the exported Routes function to define all of our routes
// we are pulling the route definitions out of the server file to help organize the project
Routes(app);

// listen for connections on port 3000
app.listen(PORT, (error)=>{
    if(error) {
        console.log("Error starting server!");
    } else {
        console.log("Server started on port: ", PORT);
    }
})