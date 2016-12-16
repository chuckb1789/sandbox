var http = require('http');

// create our http server object
http.createServer((req, res)=>{
    
    // log the URL requested from the browser
    console.log("URL requested: ", req.url);

    // write the content type header value, telling the browser that the data we're sending can just be rendered as html
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // check the route that was requested and send the appropriate data based on that route
    if(req.url === "/") {
        res.end("<h1>This is the home page!</h1>");
    } else if(req.url === "/about.html") {
        res.end("<h1>This is the about page!</h1>");
    } else if(req.url === "/faq.html") {
        res.end("<h1>This is the FAQ page!</h1>");
    }
    // if the route requested isn't one that we defined above, just send down that it wasn't found 
    else {
        res.end("<h1>Page not found!</h1>");
    }
    
// listen for connections on localhost:1337
}).listen(1337, 'localhost', ()=>{
    console.log("Server up and running!");
});
