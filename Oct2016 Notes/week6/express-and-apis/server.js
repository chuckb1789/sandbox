// require dependencies
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');

// create express app object
var app = express();

// set the port for the server to listen on
var PORT = process.env.PORT || 3000;

// mount the middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}), bodyParser.json());
app.use(express.static('public'));

// app.get('/', (req, res)=>{
//     res.send("Hello!");
// });

// define routes
var url = "http://kanyerest.xyz";
app.get('/api/kanye/album', (req, res)=>{

    console.log(req.query);

    // use the request module to make an HTTP request to the kanye api and send the response data to our client
    request(url + "/api/album/" + req.query.album, (err, response, body)=>{
        if(err) {
            res.send(err);
        } else {
            res.send(body);
        }
    });
});

app.get('/api/kanye/track', (req, res)=>{
    console.log(req.query);

    request(url + "/api/track/" + req.query.track, (err, response, body)=>{
        if(err) {
            res.send(err);
        } else {
            res.send(body);
        }
    });
});

app.get('/api/kanye/counter', (req, res)=>{

    request(url + "/api/counter", (err, response, body)=>{
        if(err) {
            res.send(err);
        } else {

            // parse the response (which is a stringified object)
            var words = JSON.parse(body);

            // massage the data - change it from a single big object where each property is a word he has said and its value is the number of times he has said it to an array of objects that contain two properties: the word and count for that word
            var arr = [];
            for(prop in words) {
                arr.push({
                    word: prop,
                    count: words[prop]
                });
            }

            // send the new array we created from massaging the data
            res.send(arr);
        }
    });
});

// listen for connections to our server
app.listen(PORT, (error)=>{
    if(error){
        console.log("Error starting server: ", error);
    } else {
        console.log("Server started on port ", PORT);
    }
})