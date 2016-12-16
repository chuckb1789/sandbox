// pull in the express code
var express = require('express');

// create our app object
var app = express();

// routes require 3 things: the http method, a url, and a route handler callback function
// slash '/' is the root: http://localhost:3000/
app.get('/', (req, res)=>{
    // the req object has information about the request such as:
    // req.headers: the header information 
    // req.query: the query string
    // for post/put, req.body: the request body

    // every request MUST HAVE EXACTLY ONE RESPONSE!!
    // there are several ways to end a request/response cycle
    res.send('Hello world!!');
});

app.get('/contact', (req, res)=>{
    // send plain text/html content
    res.send("<h1>Contact page</h1>");
});

app.get('/about', (req, res)=>{
    // send an actual file from the server's file system
    res.sendFile("Notes.txt", {root:"./"});
});

app.get('/oldAbout', (req, res)=>{
    // redirect the client to a different route
    // redirect DOES NOT WORK for AJAX requests, you would need to redirect on the front end
    res.redirect('/about');
});

app.get('/home', (req, res)=>{
    // send an actual file from the server's file system
    res.sendFile("home.html", {root:"./"});
});

// this will eventually use static file server middleware to send this file
app.get('/main.css', (req, res)=>{
    // send an actual file from the server's file system
    res.sendFile("main.css", {root:"./"});
});

// the order in which routes are defined is VERY important
// the * here is a wildcard that catches any request (that was not matched above)
// so you can use this technique to send a custom 404 page
app.get('*',(req, res)=>{
    // send an actual file from the server's file system
    res.send("Not found!");
});

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