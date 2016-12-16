var express = require('express');
var app = express();
var port = 1337;

app.use(express.static("public"));

app.listen(port, (err)=>{
    if(err) {
        console.log("Server error ", err);
    } else {
        console.log("Server started!");
    }
});