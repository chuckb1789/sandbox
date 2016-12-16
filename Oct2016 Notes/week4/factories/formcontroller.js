angular.module('App')
    .controller('FormController', formCont) // FormController is the name of our controller - formCont is the function that represents the controller (IS the controller)

// Inject our factory so we can access data from it
formCont.$inject = ["DataFactory"]

// In addition to the $inject, we need to pass in our dependencies as parameters to the controller function
function formCont (DataFactory) {
    var fCtrl = this; // Object that exposes data to the view

    console.log('FROM THE FACTORY : ', DataFactory);

    fCtrl.listOfGames = DataFactory.gameList; // Grabbing data from the factory and making a reference to it on our controller. Otherwise, we can't use it in HTML

    fCtrl.addGame = function(){
        // Add our new game to the list of games

        fCtrl.listOfGames.push(fCtrl.newGame);

        // Clear out our form and create a new 'newGame' object
        fCtrl.newGame = {};

    }
}