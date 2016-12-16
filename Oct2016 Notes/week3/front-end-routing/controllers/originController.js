// create a second controller that is specific to the origin ng-view template
// We could do this in the same CreamNSugar controller, but we are showing how we can use multiple controllers in the same html file
mainApp
    .controller('OriginCtrl', originCtrl);

function originCtrl ($routeParams) {
    var oCtrl = this;

    // create a list of origins that we will display in the origins html template
    oCtrl.origins = [
        'Peru',
        'Ridgeway',
        'Columbia',
        'Paraguay',
        'Uganda'
    ];

    //the 'id' variable was named in routes.js 
    // and was given a value in the route path given in the nav link from index.html
    //We capture the route parameter here and assign oCtrl.id to that value
    // and then we use it in the origin.html template
    oCtrl.id = $routeParams.id;
};
