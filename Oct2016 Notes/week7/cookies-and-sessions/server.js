// this will tell javascript to use strict mode - can be a good idea to use this to enforce good coding practices
// in strict mode, certain things that are considered bad practice will actually throw errors when you run the code
// for example declaring variables without the var keyword (memory leak) would cause an error
"use strict";

// require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var PORT = process.env.PORT || 3000;

// create app object
var app = express();

// mount middleware
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}));

// cookie parser gives us access to req.cookies
app.use(cookieParser());

// home route
app.get('/', (req, res)=>{
    res.send("EAT COOKIES!!!");
});

// cookies route
app.get('/cookie', (req, res)=>{
    // {cookie-key: cookie-value}
    // tell the browser to set some cookie values
    // 1st argument: cookie key, 2nd argument: cookie value
    res.cookie('monster', 'yes please');
    res.cookie('chocolate-chip', 'bippity-bop!!');
    // the 3rd arguments is the options object
    // httpOnly says do not allow this cookie to be accessed through javascript
    // you can normally access cookies for a site in the chrome console using document.cookie, so not allowing this is an extra layer of security
    res.cookie('login', Math.random(), {httpOnly: true});

    // this is a way to access a cookie with a key of monster
    console.log(req.cookies.monster);

    // this is a way to access a cookie with a key of chocolate-chip
    // we have to use square bracket syntax here because the dash is an invalid js variable character
    console.log(req.cookies['chocolate-chip']);

    res.send("SET SOME COOKIES!!!");
});

app.get('/tempCookie', (req, res)=>{
    res.cookie('temp-cookie', 'temp-value', {maxAge: 5000}); // cookie expires after 5 seconds
    // if you wanted 2 weeks you could do some math, for example:
    // {maxAge: 1000 * 60 * 60 * 24 * 14}
    res.send("Set temp cookie!");
});

// Sessions
var sessions = {}; // this will be our sessions object
// sessions are just arbitrary objects in server memory

app.get('/session', (req, res)=>{
    console.log("Cookies: ", req.cookies);
    console.log("Sessions: ", sessions);

    // our sessions object will look like this:
    // {
    //     0.87897498374298: {},
    //     0.26768736857683: {}
    // }

    // 1st scenario: we don't know them and need to make a new session
    if(!req.cookies.login || !sessions[req.cookies.login]) {
        var login = Math.random();
        sessions[login] = { created: new Date() }; // store the created session date on the user session object

        res.cookie('login', login, {httpOnly: true});
        res.send(`<h1>Welcome to the site, your session was created at ${sessions[login].created}</h1>`);
    }
    // 2nd scenario: we have a valid session
    else { 
        res.send(`<h1>You've been logged in since ${sessions[req.cookies.login].created}</h1>`);
    }
});

// listen for connections
app.listen(PORT, (err)=>{
    if(err){
        console.log("Error starting server: ", err);
    } else {
        console.log("Started server on port: ", PORT);
    }
})


