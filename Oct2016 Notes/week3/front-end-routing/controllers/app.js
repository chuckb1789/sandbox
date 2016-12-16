// As our applications get larger and more complicated we want to split out
// controllers, routers and factories instead of having all of that code
// in a single file. 
// So we create our angular app (ng-app) in a file all by itself and then
// just refer to it from our other angular component files.
var mainApp = angular.module('HotCoffee', ['ngRoute']);
