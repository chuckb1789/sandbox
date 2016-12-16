// require hero controller - this contains the hero api route handlers
var Hero = require('./controllers/heroes.js');

// export a function that takes the app object as an argument and sets up the routes
module.exports = (app)=>{

    // home route
    app.get('/', (req, res)=>{
        res.sendFile("index.html", {root: "./public/html"});
    });

    // hero api endpoints
    app.post('/api/heroes', Hero.create);
    app.get('/api/heroes', Hero.get);
    app.delete('/api/heroes/:id', Hero.delete);
}