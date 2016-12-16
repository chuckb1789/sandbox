angular.module("SuperSickApp")
    .factory("PageFactory", pageFact);

pageFact.$inject = ['$http'];

function pageFact($http) {
    
    var factory = {
        data: '',
        // put our $http call inside a function so we can call it whenever it makes sense (if it was outside a function, it would immediately execute when the page loads)
        getData: function(callback) {
            // invoke $http and pass in a configuration object (this is an alternative to using $http.get or $http.post) - this way is more configurable
            return $http({
                method: "GET",
                url: "/getData",
                // these properties are the query string key value pairs (they can alternatively be passed directly in the url, but this is cleaner)
            }).then(function(success){
                console.log("Success: ", success.data);

                // store the data on a controller property so we can access it in the html
                factory.data = success.data;
                callback(factory.data);

            // PLEASE put the second callback here - it will catch errors    
            }, function(error){
                console.log("Error: ", error);
            });
        }
    };

    // FACTORIES MUST ALWAYS RETURN (USUALLY AN OBJECT)!!!!
    return factory;
}