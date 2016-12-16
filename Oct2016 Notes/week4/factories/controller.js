angular.module('App')
    .controller('GameController', gameCont) // GameController is the name of our controller - gameCont is the function that represents the controller (IS the controller)

// Inject our factory so we can access data from it
gameCont.$inject = ["DataFactory"]

// In addition to the $inject, we need to pass in our dependencies as parameters to the controller function
function gameCont (DataFactory) {
    var gCtrl = this; // Object that exposes data to the view

    console.log('FROM THE FACTORY : ', DataFactory);

    gCtrl.listOfGames = DataFactory.gameList; // Grabbing data from the factory and making a reference to it on our controller. Otherwise, we can't use it in HTML
}