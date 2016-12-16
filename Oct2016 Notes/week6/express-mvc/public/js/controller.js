// create our angular module and controller
angular.module("MVC", [])
    .controller("MVCController", mvcCtrl);

// inject $http since we will be making requests to our server
mvcCtrl.$inject = ['$http'];

// declare the controller function
function mvcCtrl($http) {
    var mCtrl = this; // alias the scope to the "controller as" name
    window.mCtrl = mCtrl; // leak the controller so we can check data in the chrome console

    // initialize data properties
    mCtrl.greeting = "Shoobity Bop!";
    mCtrl.song = {};
    mCtrl.song.groupies = [""];
    mCtrl.songData = [];

    // function that is used to give us another text box for groupies
    // this is accomplished by pushing an element (emtpy string) into the array that is being ng-repeated over
    mCtrl.addGroupie = function() {
        console.log("Adding groupie");
        mCtrl.song.groupies.push("");
    }

    // function that is used to add a new song to the database
    // it uses $http to send a post request to our server's api endpoint
    mCtrl.createSong = function() {
        $http.post("/api/song", mCtrl.song).then(function(success){
            console.log(success.data);
            mCtrl.songData = success.data;
        }, function(error){
            console.log(error);
        });
    }

    // function that is used to get songs from the database
    // it uses $http to send a get request to our server's api endpoints
    mCtrl.getSong = function() {
        // check if anything was entered into the search box in the html
        // if so, search for that specific song, if not, get all songs
        if(mCtrl.searchSong) {
            $http.get('/api/song/' + mCtrl.searchSong).then(function(success){
                console.log(success.data);
                mCtrl.songData = [];
                mCtrl.songData.push(success.data);
            }, function(error){
                console.log(error);
            });
        } else {
            $http.get('/api/songs').then(function(success){
                console.log(success.data);
                mCtrl.songData = success.data;
            }, function(error){
                console.log(error);
            });
        }
    }
}