// bring in the mongoose module
var mongoose = require('mongoose');

// mongo connection string format:
// protocol://<domain_name>/<database_name>
// example: 
// mongodb://localhost/people

mongoose.Promise = global.Promise; // this will fix the error that you might get when mongoose yells about it's promise library being deprecated (it's not really necessary though, the code will still work)

// connect to our database called 'people'
mongoose.connect('mongodb://localhost/people', (err)=>{
    // check if there was an error connecting to the database (like maybe you forgot to run mongod)
    if(err){
        console.log("Error connecting to mongo ", err);
    } else {
        console.log("Connected to database!");
    }
});

// create a data schema - this defines the structure of our data
var personSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true }, // we can enforce certain validation options here, like ensuring the data is provided and is a unique value
    age: Number, // if you do not have any additional options, you can simply put the expected type for the data
    phone: String,
    created: {type: Date, default: ()=>{return Date.now()}} // this line says that if a created date is not supplied, the default value should be the current time (this uses a callback function so that it doesnt get the current date until the document is instantiated, instead of simply giving the same date to all instances)
});

// define the mongoose model - this is kind of like a class
// this Person model will have methods on it that we can use to interact with our collection
// the first parameter is the string name of the model, the second parameter is the schema object, and the third parameter is optional and defines what the name of the mongo collection should be when accessing the database through the mongo shell
// mongo will automatically lowercase and attempt to pluralize the model name to create the name of the collection, unless you override it with the third parameter
var Person = mongoose.model('Person', personSchema, 'pleople');

// create a function that will create a new person and save it to the database
function createPerson(attributes) {

    // create an instance of the Person model (a document)
    // the document contains the data in the attributes object we passed in and should have passed validation from the schema
    var person = new Person(attributes);

    // try to save the new person in the database
    person.save((err, doc) => {
        if(err) {
            console.log("Error adding to database ", err);
        } else {
            console.log("Added person to database! ", doc);
        }
    });
}

// call our createPerson function to actually add some data into the database
createPerson({
    name: 'Chris',
    age: 26,
    phone: '222-222-2222'
});

// function that gets people from the database
// you can pass in a query object to specify which people to look for
function getPeople(query) {

    // if no query object is passed in, just get all the people
    Person.find(query || {}, (err, people)=>{
        if(err){
            console.log("Error getting people ", err);
        } else {
            console.log("Got people: ", people);
        }
    });
}

getPeople(); // if passing no arguments, this will get ALL people in the collection
getPeople({name: 'Chris'}); // get the people named Chris