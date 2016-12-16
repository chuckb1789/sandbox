// Functions inside Functions

console.log("Starting");

var f = 1 ;

function outer() {
  var g = 2 ;
  console.log("f:", f, "g:", g);
  function inner() {
    var h = 3 ;
    console.log("f:", f, "g:", g, "h:", h);    
  }
  inner();
}

outer();

console.log("End");
