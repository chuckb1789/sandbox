// Colors allows you to color text when sent to the console.
// Note that we don't actually use the variable "Colorful" anywhere.
// The colors package just adds color properties to the String object.
var Colorful = require('colors');  // we could just say "require('colors') without the var Colorful
// require('colors');

var greeting = "hello world";
console.log(greeting.blue);
console.log('Danger'.red);
console.log('Warning'.yellow);

console.log('Warning'.inverse.gray);