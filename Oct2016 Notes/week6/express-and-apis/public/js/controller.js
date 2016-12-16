// create angular module and controller
angular.module("Kanyay", [])
    .controller("KanyayController", kanyeControl);

// inject $http into the controller since we need to make requests to our server
kanyeControl.$inject = ['$http'];

// define the controller
function kanyeControl($http) {
    // alias the scope of the controller to match the controller as syntax
    var kCtrl = this;

    kCtrl.greeting = "Uh nuh nuh good morning!!";

    // find an album by hitting our server's api endpoint 
    kCtrl.searchAlbum = function() {
        $http.get('/api/kanye/album?album=' + kCtrl.album)
            .then(function(success){
                console.log("Success: ", success.data);
                kCtrl.data = success.data;
            },
            function(error){
                console.log("Error: ", error);
            });
    }

    // find a track by hitting our server's api endpoint 
    kCtrl.searchTrack = function() {
        $http.get('/api/kanye/track?track=' + kCtrl.track)
            .then(function(success){
                console.log("Success: ", success.data);
                kCtrl.data = success.data;
            },
            function(error){
                console.log("Error: ", error);
            });
    }

    // get the list of words by hitting our server's api endpoint 
    kCtrl.searchCounter = function() {
        $http.get('/api/kanye/counter')
            .then(function(success){
                console.log("Success: ", success.data);
                kCtrl.words = success.data;
            },
            function(error){
                console.log("Error: ", error);
            });
    }
}