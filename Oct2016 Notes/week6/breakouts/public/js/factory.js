angular.module("FullStack")
    .factory("FullStackFactory", fullStackFact)
    
fullStackFact.$inject = ['$http'];

function fullStackFact($http) {

    // this is the object that the controller will get access to when the factory is injected
    return {
        // this object contains two methods, 
        //they each just return a $http call, so we can chain the .then in the controller
        createUser: function() {
            // post to the /createUser route of our server
            return $http.post('/createUser', fCtrl.user);
        },
        getUser: function(email) {
            // get the user information from the parameterized route
            return $http.get('/api/user/' + email);
        }
    }
}
