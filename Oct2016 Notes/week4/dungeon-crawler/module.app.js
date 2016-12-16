angular.module('App', ['ngRoute'])
    .config(Router)

Router.$inject=["$routeProvider"];

function Router ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : '/home.html', // Where the HTML file lives that should be dropped into ngView
            controller : 'homeController',// Specifies which controller should be used with that template
            controllerAs : 'hCtrl'
        })
        .when('/dungeon', {
            templateUrl : '/dungeon.html',
            controller : 'dungeonController',
            controllerAs : 'dCtrl'
        })

}