// route == endpoint
// these are equivalent terms
// the endpoint is the url itself

// middleware is code that runs in the middle - before our endpoint route handler function

// pull in the express code
var express = require('express');

// pull in our logger code
var logger = require('morgan');

// pull in bodyParser code
// this is the middleware that will actually populate the req.body object for you
var bodyParser = require('body-parser');

// create our app object
var app = express();

// middleware is essentially a block of code that runs between the request coming into the server and the server sending a response (in the middle)
// the next parameter is the function to run next in the middleware chain
function logit(req, res, next) {
    req.stuff = "things";
    console.log("doing stuff");
    // don't forget to call next in your middleware functions
    next(); // call the next function to continue running the next middleware
    // note that the next function does not end the req/res cycle, it simply says to run the next middleware
} 

// Is this middleware or a route handler?
// both since roughly 50% of the time it sends, and 50% it calls next
// generally app.use calls are considered middleware
// this is defining your own custom middleware
function doSomething(req, res, next) {
    if(Math.round(Math.random())){
        res.send("Hello");
    } else {
        next();
    }
}

// mounting logger vertically above all of our routes
app.use(logger('dev'));

// mount bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}), bodyParser.json());

// routes require 3 things: the http method, a url, and a route handler callback function
// slash '/' is the root: http://localhost:3000/
app.get('/', doSomething, (req, res)=>{
    // the req object has information about the request such as:
    // req.headers: the header information 
    // req.query: the query string
    // for post/put, req.body: the request body

    // every request MUST HAVE EXACTLY ONE RESPONSE!!
    // there are several ways to end a request/response cycle
    res.send('Hello world!!');
});

app.get('/login', (req,res)=>{
    res.send("<form method='POST' action='/login'><input name='email'><input name='pass'><input type='submit'></form>");
})

app.post('/login', (req, res)=>{
    //console.log("Request object: ", req);
    console.log("Request body: ", req.body);

    res.send("Hello");
})

// this is called mounting middleware
// this is similar to app.get/app.post, but it will run for any http method type
//app.use(logit); // we do not have to pass the url here because if you do not specify the url, it will run for any url
// every request coming into our server will run this middleware

// logit is mounted horizontally for the /contact route
// any number of functions can be passed in between the url and the route handler function (as horizontal middleware)
app.get('/contact', logit, logit, logit, logit, (req, res)=>{
    // send a property that we previously set in a middleware function
    res.send(req.stuff);
});

// this is called vertically mounting middleware - you can read the order top to bottom
//app.use(logit);
app.get('/about', (req, res)=>{
    res.send("Notes.txt");
});

app.get('/oldAbout', (req, res)=>{
    // redirect the client to a different route
    // redirect DOES NOT WORK for AJAX requests, you would need to redirect on the front end
    res.redirect('/about');
});

app.get('/home', (req, res)=>{
    // send an actual file from the server's file system
    res.sendFile("home.html", {root:"./public"});
});

// // this will eventually use static file server middleware to send this file
// app.get('/main.css', (req, res)=>{
//     // send an actual file from the server's file system
//     res.sendFile("main.css", {root:"./"});
// });

// express static middleware - send down any file that lives in the supplied folder (typically 'public')
// this line means that we don't have to write a route for every single html, css, client side js file
app.use(express.static('public'));

// the order in which routes are defined is VERY important
// the * here is a wildcard that catches any request (that was not matched above)
// so you can use this technique to send a custom 404 page
// app.get('*',(req, res)=>{
//     // send an actual file from the server's file system
//     res.send("Not found!");
// });

// define which port this server should run on
var PORT = process.env.PORT || 3000;

// some common ports:
// http: 80
// https: 443
// ftp: 21
// ssh/telnet: 22

// tell the server to listen for connections on the specified port
app.listen(PORT, (err)=>{
    if(err) {
        console.log("Server error: ", err);
    } else {
        console.log("Server up and running on port: ", PORT);
    }
});