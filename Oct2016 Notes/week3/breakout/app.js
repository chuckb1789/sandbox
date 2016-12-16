// If we are breaking up our angular code, I'd leave this module
// definition in a file by itself.
angular.module('weatherApp', []);

// We could also have left the module (app.js), controller (ctl.js) and factory (fact.js)
// all in a single file using a syntax like this:

// angular.module('weatherApp',[])
//     .controller('weatherController', weatherControllerFunction)
//     .factory('weatherFactory', weatherFactoryFunction);

// function weatherControllerFunction() {
//     ...
// }
// function weatherFactoryFunction() {
//     ...
// }