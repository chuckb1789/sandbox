// SCOPES

var global_object ;
global_object = { name : "Curly" } ;
var moe = "Moe" ;
console.log("1: global_object: ", global_object);
console.log("1: moe: ", moe)

function f1() {
  var larry = 0 ;
  moe = "Shemp";
  console.log("f1:global_object: ", global_object);
  console.log("f1:larry: ", larry);
  console.log("f1:moe: ", moe)
  // console.log("f1: global moe: ", global.moe );
};f1();

console.log("2: global_object: ", global_object);
console.log("2: moe: ", moe)
// console.log("larry: ", larry);
