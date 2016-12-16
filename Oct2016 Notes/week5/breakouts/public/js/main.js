// declare an angular module, pass in an empty dependency array
angular.module("SuperSickApp",[])
// method chaining: calling the controller method on the return value of the module method
    .controller("PageController", pageCtrl);

// inject the $http angular service into the controller function, this helps prevent errors if you were to minify the code
pageCtrl.$inject = ['$http'];

// define the controller function and pass in $http so we can use AJAX
function pageCtrl($http) {
    var pCtrl = this; // alias the scope to pCtrl - typically this name will match the name chosen for "controller as" syntax
    
    console.log("Hey I'm working!");
    pCtrl.greeting = "YO!!!"; // define the greeting property on pCtrl

    // put our $http call inside a function so we can call it whenever it makes sense (if it was outside a function, it would immediately execute when the page loads)
    pCtrl.getData = function() {
        // invoke $http and pass in a configuration object (this is an alternative to using $http.get or $http.post) - this way is more configurable
        $http({
            method: "GET",
            url: "https://us.api.battle.net/d3/profile/ChronoR-1565/",
            // these properties are the query string key value pairs (they can alternatively be passed directly in the url, but this is cleaner)
            params: {
                locale:"en_US",
                apikey:"6gy52vaj23mf2jt5vhbcmpts4gvsk9k2"
            }
        }).then(function(success){
            console.log("Success: ", success.data);

            // store the data on a controller property so we can access it in the html
            pCtrl.data = success.data;

        // PLEASE put the second callback here - it will catch errors    
        }, function(error){
            console.log("Error: ", error);
        });
        console.log("After request!");
    }
    pCtrl.getData(); // call the getData function when the page loads
}