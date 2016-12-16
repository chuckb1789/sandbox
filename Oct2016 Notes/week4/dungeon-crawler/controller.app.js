angular.module('App')
    .controller('homeController', homeController)

homeController.$inject = ['dungeonFactory', '$location'];

function homeController (dungeonFactory, $location) {
    var hCtrl = this; // alias the value of 'this'.  Every function creates its own value of 'this' - we want to make sure we know exactly which 'this' we are referring to

    hCtrl.Player = dungeonFactory.Player; // Storing the player object on the controller
    
    hCtrl.greeting = "Welcome to the Dungeon";

    // Decides whether or not a player is legally allowed to play this game
    hCtrl.ageGate = function(){
        var over18 = confirm("Are you over 18?");

        if(over18){
            hCtrl.greeting = "Alright alright alright!";
            $location.url('/dungeon');
        }
        else{
            hCtrl.greeting = "Get Out of my Dungeon!";
        }
    }


    hCtrl.things = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
    ]

    hCtrl.currentPage = 1;
    hCtrl.pageSize = 6;
    hCtrl.makePages = function(){
        var pages = Math.ceil( hCtrl.things.length / hCtrl.pageSize )
        var pageArray = []
        for(var i = 0; i < pages; i++){
            pageArray.push(i)
        }

        return pageArray
    }

    hCtrl.pageIndex = function(){
        return (hCtrl.currentPage - 1) * hCtrl.pageSize
    }
    hCtrl.setPage = function(page){
        hCtrl.currentPage = page;
    }



}