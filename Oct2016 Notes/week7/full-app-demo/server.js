// require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Routes = require('./routes.js');

// setup app object and port
var app = express();
var PORT = process.env.PORT || 3000;

// connect to database
mongoose.connect("mongodb://localhost/heroesOfAjax", (err)=>{
    if(err){
        console.log("Error connecting to database: ", err);
    } else {
        console.log("Successfully connected to database!");
    }
})

// mount middleware
app.use(logger('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Routes
Routes(app);

// listen for connections
app.listen(PORT, (err)=>{
    if(err){
        console.log("Error starting server: ", err);
    } else {
        console.log("Server started on port: ", PORT);
    }
});

