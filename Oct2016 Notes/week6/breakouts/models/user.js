var mongoose = require('mongoose');

// create a user schema and model
var userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true }, 
    name: String,
    age: Number,
    sex: String,
    location: String,
    bio: String,
    created: {type: Date, default: ()=>{return Date.now()}} 
});
var User = mongoose.model('User', userSchema);

// we need to module.export the model so we can access it in other js files, like the server
module.exports = User;