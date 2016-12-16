angular.module("FullStack")
    .controller("FullStackController", fullStackCtrl);

fullStackCtrl.$inject = ['FullStackFactory'];

function fullStackCtrl(FullStackFactory) {
    var fCtrl = this; 
    window.fCtrl = fCtrl; // leaking the controller to the window for debugging purposes

    fCtrl.greeting = "Welcome to our full stack app!";
    fCtrl.profilePage = "Welcome to the profile page!";
    fCtrl.user = {}; // initialize user object, so we can directly model properties on it from the form

    fCtrl.createUser = function() {
        console.log("Trying to create a user!");

        // call the factory method to perform the $http request
        FullStackFactory.createUser()
            .then(function(success){
                console.log("Success submitting user: ", success.data);
            }, function(error) {
                console.log("Error submitting user: ", error); 
            });


        // if I was not modeling the form fields directly on an object, I would need to do something like this first
        // var user = {
        //     email: fCtrl.email,
        //     name: fCtrl.name,
        //     ...
        // }
    }

    // method to search for a specific user by email
    fCtrl.searchEmail = function() {
        console.log("Trying to find user with email: ", fCtrl.search);

        // call the factory method to perform the $http request
        FullStackFactory.getUser(fCtrl.search)
            .then(function(success){
                console.log("Success submitting user: ", success.data);

                // set the returned data to a property on our controller so we can display it in the html
                fCtrl.profileData = success.data;
            }, function(error) {
                console.log("Error submitting user: ", error); 
            });
    }
}



