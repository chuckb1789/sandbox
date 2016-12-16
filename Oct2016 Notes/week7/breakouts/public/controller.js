angular.module("Breakouts", [])
    .controller("BreakoutController", breakoutCtrl);

breakoutCtrl.$inject = ['$http'];

function breakoutCtrl($http){
    var bCtrl = this;
    window.bCtrl = bCtrl;

    bCtrl.greeting = "Yo!";
    bCtrl.settings = {};

    // tell the server to save our settings
    bCtrl.saveSettings = function() {
        $http.post('/saveSettings', bCtrl.settings)
            .then(function(success){
                console.log("Successfully saved settings", success.data);
            }, function(error){
                console.log("Error saving settings", error);
            });

        window.location.reload();
    }

    // method to get a cookie's value by name
    var cookies;
    bCtrl.readCookie = function(name,c,C,i){
        if(cookies){ return cookies[name]; }

        c = document.cookie.split('; ');
        cookies = {};

        for(i=c.length-1; i>=0; i--){
           C = c[i].split('=');
           cookies[C[0]] = C[1];
        }
        console.log(cookies);

        return cookies[name];
    }
}