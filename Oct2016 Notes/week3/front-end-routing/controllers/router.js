// here we configure our router to handle front-end routing
mainApp
    .config(Router);

// we need to 'inject' a dependency into our router
// you'll need to read up on the ngRoute documentation to see what needs to be
// injected (ie. routeProvider, routeParams, etc) and what properties and functions each has.
Router.$inject = ['$routeProvider'];

function Router($routeProvider) {

    // this is a function that will handle any route that is not handled with a .when handler (below)
    // here, we simply redirect the user to the home page
    $routeProvider.otherwise( { redirectTo:'/' });

    // add our routes
    $routeProvider
        .when('/', { // this is the root route
            templateUrl:'/templates/home.html'  // insert the home.html template into the ng-view
            // controller: 'creamSugarCtrl as csCtl' // we don't want to add this because the ng-view is already in the scope of this controller (in the body)
        })
        .when('/menu', {
            templateUrl:'/templates/menu.html'
        })
        // this is a parameterized path.  The path segment following /origin/ will be assigned to the parameter id
        // you can see how it is referenced and used in originController.js
        .when('/origin/:id', {  
            templateUrl:'/templates/origin.html',
            controller: 'OriginCtrl as oCtrl' // here we are adding a controller that is only for this html template on this route
        });
};
