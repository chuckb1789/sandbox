// declare an angular module, pass in an empty dependency array
angular.module("SuperSickApp")
// method chaining: calling the controller method on the return value of the module method
    .controller("PageController", pageCtrl);

// inject the $http angular service and the factory into the controller function, this helps prevent errors if you were to minify the code
pageCtrl.$inject = ['PageFactory'];

// define the controller function and pass in $http so we can use AJAX
function pageCtrl(PageFactory) {
    var pCtrl = this; // alias the scope to pCtrl - typically this name will match the name chosen for "controller as" syntax
    
    console.log("Hey I'm working!");
    pCtrl.greeting = "YO!!!"; // define the greeting property on pCtrl

    //pCtrl.data = PageFactory.data; // set the API data as a property on the controller
    if(!PageFactory.data) {
        PageFactory.getData(function(data){
            pCtrl.data = data;
        }); // call the factory method to actually get the data from the API
    }
}