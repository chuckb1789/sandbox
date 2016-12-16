// require the necessary node modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// create our express app
var app = express();

// mount bodyparser middleware to populate the req.body object
// angular form submissions send data as json
// traditional form submissions send data as url encoded strings
// so we are parsing both formats just in case
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));

// connect to our database (don't forget to make sure mongod is running!)
mongoose.connect('mongodb://localhost/requestObjects', (err)=>{
     if(err){
        console.log("Error connecting to mongo ", err);
    } else {
        console.log("Connected to database!");
    }
});

// create a user schema and model
var userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true }, 
    pass: String,
    created: {type: Date, default: ()=>{return Date.now()}} 
});
var User = mongoose.model('User', userSchema);

// create a route to send our register form
app.get('/', (req, res)=>{
    res.send('<form method="GET" action="/register"><input name="email"><input name="pass"><button type="submit">Submit</form>');
});

// create a post route to allow a user to register
app.get('/register', (req,res)=>{
    console.log("Body: ", req.body);
    console.log("Query: ", req.query);
    
    // create a user object from our schema, passing in the data we got from the form
    var newUser = new User({
        email: req.query.email, //req.body.email,
        pass: req.query.pass//req.body.pass
    });

    newUser.save((err, doc) => {
        if(err) {
            console.log("Error adding to database ", err);
        } else {
            console.log("Added person to database! ", doc);
        }
    });

    // this is another way we could create the user object
    // this way works if the request body is what we expect the schema to have (property names are the same)
    //newUser = new User(req.body);

    res.send("Registered!");
});

// create a parameterized route
// named parameters come after the colon ':'
app.get("/users/:id", (req,res)=>{
    console.log("Parameterized route: ", req.params);

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

app.get("/users/email/:email/:propato", (req,res)=>{
    console.log("Parameterized route: ", req.params);

    User.findOne({ email: req.params.email }, (err, data) =>{
        if(err){
            console.log("Error getting a user from the database: ", err);
            res.send(err);
        } else {
            console.log("User retrieved from the database: ", data);

            // we are using the bracket notation to access dynamic property values
            // req.params.propato contains a property name that we want to access
            res.send(data[req.params.propato]);
        }
    });
});

// tell server to listen for connections on port 3000
app.listen(3000);