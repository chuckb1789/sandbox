angular.module("HeroesOfAjax", [])
    .controller("HeroesController", HeroCtrl);

HeroCtrl.$inject = ["$http"];

function HeroCtrl($http){
    var hCtrl = this;

    hCtrl.newHero = {};
    hCtrl.greeting = "Welcome to Heroes of AJAX!";

    hCtrl.createHero = function() {
        hCtrl.newHero.powers = hCtrl.newHero.powers.split(", ");
        hCtrl.newHero.weaknesses = hCtrl.newHero.weaknesses.split(", ");

        $http.post("/api/heroes", hCtrl.newHero)
            .then(function(success){
                console.log("Created hero: ", success.data);
                hCtrl.newHero = {}; // clear form
                hCtrl.heroList.push(success.data); // add the new hero to the displayed list of heroes
            }, function(error){
                console.log("Error creating new hero: ", error);
            });
    }

    hCtrl.getHeroes = function() {
         $http.get("/api/heroes")
            .then(function(success){
                console.log("Got heroes: ", success.data);
                hCtrl.heroList = success.data;
            }, function(error){
                console.log("Error getting heroes: ", error);
            });
    }

    hCtrl.deleteHero = function(id, index){

        bootbox.confirm("Are you sure you want to delete the hero?", function(result){
            if(result) {
                console.log("Deleting hero: ", id);

                $http.delete('/api/heroes/'+id)
                    .then(function(success){
                        console.log("Deleted hero: ", success.data);
                        hCtrl.heroList.splice(index, 1); // remove the hero from the displayed list of heroes
                    }, function(error){
                        console.log("Error deleting hero: ", error);
                    });
            }
        });
    }
}