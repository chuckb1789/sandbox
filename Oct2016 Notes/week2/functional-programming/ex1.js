
var nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var strs = [
  "larry",
  "moe",
  "curly",
  "shemp",
  "joe"
];

console.log("nums: ", nums);
console.log("strs: ", strs);

console.log(strs.map(str => str.toUpperCase()));

console.log("\nMapping");
// three ways
// define a function using a loop
function sqr( ary ){
  var nx = [] ;
  for(var ix = 0; ix < ary.length ; ix++){
    nx[ix] = ary[ix] * ary[ix] ;
  }
  return nx ;
}
console.log(sqr(nums));

// write an anonymous function and call on map
console.log(nums.map(function (x) {
  return x * x ;
}));

// Same thing, with a fat-arrow function
console.log(nums.map(x => x * x));


console.log("\nFiltering");
console.log(nums.filter( x => x % 2));

console.log("\nReduce");
var sum = nums.reduce(function(a,b) {
  return a + b;
}, 0);
console.log("sum: ", sum);

var tot = 0;
for(var ix=0; ix < nums.length; ix++){
  tot = tot + nums[ix] ;
}
console.log("tot: ", tot);



/* ************* NONFUNCTION ******************* */
// Sorting
console.log("\nSorting");
var ups = strs.map(str => str.toUpperCase());
console.log("ups: ", ups);

var ups2 = ups.map(x => x);  // like function(x){ return x; }
var dns = ups2.sort();
console.log("dns: ", dns);
console.log("ups: ", ups);

// Push and Pop
var n2 = nums.map(x => x); // make a copy of nums
console.log("n2 bfore push:", n2);
n2.push(42);
console.log("n2 after push:", n2);
console.log("Popped val: ", n2.pop());
console.log("n2 after pop:", n2);

// Fill
var ary_f = [] ;
ary_f.length = 10;   // Hey y'all, watch this!
console.log("ary_f:", ary_f);
ary_f.fill(10);
console.log("ary_f after fill:", ary_f);
