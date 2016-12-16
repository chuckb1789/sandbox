// heroes controller file

// require the hero model since the route handlers in this controller file will be interacting with the hero collection in the database
var Hero = require('../models/hero.js');

// export an object that contains each route handler function
module.exports = {
    // route handler for creating a new hero
    create: (req,res)=>{
        var newHero = new Hero(req.body);

        newHero.save((err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        });
    },
    // route handler to get all heroes in the database
    get: (req, res)=>{
        Hero.find({}, (err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        })
    },
    // route handler to delete a hero based on a given id
    delete: (req, res)=>{
        Hero.findOneAndRemove({_id: req.params.id}, (err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }
}