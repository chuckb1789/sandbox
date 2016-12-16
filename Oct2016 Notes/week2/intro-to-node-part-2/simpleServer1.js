var http = require('http');
var fs = require('fs');
var path = require('path');
var port = 1337;
var host = 'localhost';

// create our http server object
http.createServer((req, res)=>{
    
    // log the URL requested from the browser
    console.log("URL requested: ", req.url);

    // get the file extension of the file requested
    var extname = path.extname(req.url);
    console.log("File extension: ", extname);

    // use switch statement instead of a big if/else if/else chain
    switch(extname){
        // for html files
        case '.html':
            console.log("Attempting to send html file!");

            // read the file from the server's file system
            fs.readFile(__dirname + '/public/html/index.html', (err, data)=>{
                // if there is an error reading the file (maybe it doesn't exist)
                if(err) {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.end("Page not found!");
                // we successfully read the file    
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            });
            break;
        // for js files
        case '.js':
            console.log("Attempting to send js file!");
            fs.readFile(__dirname + '/public/js/main.js', (err, data)=>{
                if(err) {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.end("Page not found!");
                } else {
                    res.writeHead(200, {'Content-Type': 'text/js'});
                    res.end(data);
                }
            });
            break;
        // for css files
        case '.css':
            console.log("Attempting to send css file!");
            fs.readFile(__dirname + '/public/css/main.css', (err, data)=>{
                if(err) {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.end("Page not found!");
                } else {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    res.end(data);
                }
            });
            break;
        // for any other file types
        default: 
            console.log("Unknown file type!");
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("Page not found!");
    }
    
// listen for connections from users
}).listen(port, host, ()=>{
    console.log("Server up and running!");
});
