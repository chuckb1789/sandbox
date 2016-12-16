/*
 * Example code for js-basics-2 lecture
 *
 * These are the code examples I wrote during class on 2016-Nov-3.
 *
 */

// An array

var a1 = [ 1,2,3,"Fred","Barney" ] ;  // An array

console.log("a1 is: ", a1 );

var a2 = a1 ;

console.log("a2 is: ", a2);

var a3 = a2 ;

a3.push("Wilma");

console.log("a3 is: ", a3);

var a4 = a3.pop();

console.log("a4 is: ", a4, "and a3 is: ", a3);

a3[1] = "Betty" ;

console.log("a3 is: ", a3);

var b = [] ;

b = [ a3, a4 ];

console.log("b is: ", b);

console.log("b[0] is: ", b[0]);
