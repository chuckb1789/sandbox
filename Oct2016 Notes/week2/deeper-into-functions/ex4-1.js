// Functions inside Functions

console.log("Starting");

var f = 1 ;

function outer() {
  var g = 2 ;
  console.log("f:", f, "g:", g);
  return function() {
    var h = 3 ;
    console.log("f:", f, "g:", g, "h:", h);
  }
//  inner();
}

var x = outer();
console.log("x is:", x);
x();
console.log("End");
