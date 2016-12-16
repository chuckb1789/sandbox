///////////////////////
// Example of basic hello world
///////////////////////
// var name = process.argv[2];

// for (var i=2; i<process.argv.length; i++) {
//     console.log('hello', process.argv[i]);
// }

///////////////////////
// Example of require
///////////////////////
var JoesThing = require('./require-me.js');
// this acts like we typed:
// JoesThing = {
//    name: "Joe", 
//    sayHello: function() {
//        console.log("hello");
//    }
// }
JoesThing.sayHello();
console.log("goodbye");

