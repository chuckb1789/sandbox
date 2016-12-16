angular.module('App')
    .controller('dungeonController', dungeonController)

dungeonController.$inject = ["dungeonFactory"]

function dungeonController(dungeonFactory) {

    var dCtrl = this;

    dCtrl.Player = dungeonFactory.Player; // Storing the player object on the controller
    dCtrl.Player.conqueredRooms = []; // We want a list of rooms conquered by the player

    dCtrl.gameStarted = false; // Keeps track of whether or not the game has started

    // The function that randomly generates rooms and makes them the active room that the player is in
    dCtrl.nextRoom = function () {
        if (dCtrl.currentRoom) {
            dCtrl.Player.conqueredRooms.push(dCtrl.currentRoom)
        }
        dCtrl.currentRoom = dungeonFactory.RoomGen();
    }
    dCtrl.nextRoom(); // Starts the first room generation

}