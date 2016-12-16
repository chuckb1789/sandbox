var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user.js');
var PORT = process.env.PORT || 3000;

// create our express app object
var app = express();

// connect to mongoose
mongoose.connect("mongodb://localhost/FullStackApp", (err)=>{
    if(err){
        console.log("Error connecting to mongo", err);
    } else {
        console.log("Connected to database!");
    }
});

// mount body parser middleware
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}));

// mount static fileserver middleware
app.use(express.static('public'));

// every route needs a method, url, and route handler
// the (req, res) function is called a route handler
app.post('/createUser', (req, res)=>{
    console.log("Body: ", req.body);

    // validate the data in the request body using the schema    
    var newUser = new User(req.body);

    // put the user data in the database
    newUser.save((err, doc) => {
        if(err) {
            console.log("Error adding to database ", err);
            res.send(err);
        } else {
            console.log("Added person to database! ", doc);
            res.send(doc);
        }
    });
});

// create a route to get profiles by ID
app.get('/profile/:id', (req, res)=>{
    console.log("ID requested: ", req.params.id);

    User.findOne({ _id: req.params.id }, (err, data) =>{
        if(err){
            console.log("Error getting a user from the database: ", err);
            res.send(err);
        } else {
            console.log("User retrieved from the database: ", data);
            res.send(data);
        }
    });
});

// create a route to get profiles by email
app.get('/api/user/:email', (req, res)=>{
    console.log("Email requested: ", req.params.email);

    User.findOne({ email: req.params.email }, (err, data) =>{
        if(err){
            console.log("Error getting a user from the database: ", err);
            res.send(err);
        } else {
            console.log("User retrieved from the database: ", data);
            res.send(data);
        }
    });
});

//listen for connections
app.listen(PORT, (err)=>{
    if(err) {
        console.log("Error starting server: ", err);
    } else {
        console.log("Server started on port ", PORT);
    }
})