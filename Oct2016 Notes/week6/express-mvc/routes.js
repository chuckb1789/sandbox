// bring in the route handler functions so we can reference them in the route definitions 
var API = require('./controllers/api.js');

// export a function here that takes in an app object, this way we can require this file in the server and call the function passing in our express app object
module.exports = (app)=>{

    // app.get('/', (req, res)=>{
    //     res.send('hello');
    // });

    // define our routes
    // each route needs a url/endpoint and a route handler function
    app.get('/api/songs', API.getAllSongs);
    app.get('/api/song/:title', API.getSong);
    app.post('/api/song', API.createSong);
}
