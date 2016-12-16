angular.module('App')
    .factory('DataFactory', dataFact); // DataFactory is the name - dataFact is the function that represents the factory (IS the factory)


function dataFact () {

    var games = [
        {
            name : "TitanFall",
            genre: "Shooter"
        },
        {
            name : "Rocket League",
            genre : "Car Soccer"
        }
    ]; // This will be our mock database for our list of games

    return {
        gameList : games,
        // name : "Bill",
        // occupation : "dentist",
        // age : 104
    }
    // All factories MUST return something, typically an object
    // When you inject a factory into a controller, you get the EXACT return statement
}