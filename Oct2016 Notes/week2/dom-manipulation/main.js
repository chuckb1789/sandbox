// The DOM (Document Object Model) is constructed by the browser as it parses your HTML files.
// It is essentially a tree structure that represents your page.

// JS provides several method for selecting DOM nodes
// document.getElementsByTagName - get an array of elements with the given tag
// document.getElementsByClassName - gets an array of elements with the given class name
// document.getElementById - gets ONE element with the given id (since id's should be unique)
// document.querySelector - gets the first node that matches the CSS selector
// document.querySelectorAll - gets all nodes that match the CSS selector

console.dir(document.getElementsByTagName("h1")[0]); // get the first h1 node
console.dir(document.getElementById("div-1")); // get the node with an id of div-1

var div1 = document.getElementById("div-1");
div1.innerHTML = "HELLO"; // get the node with an id of div-1 and then update it's content (innerHTML property) to be "HELLO"

// Truthy/Falsey
// Numbers - all numbers except 0 or NaN are truthey
// Objects - all objects, even empty are truthey
// Strings - all strings are truthey except empty string
// null - always Falsey
// undefined - always Falsey
var obj = "";
if(obj){
    console.log("True");
} else {
    console.log("False");
}

// you can use if(variable_name) to check if the value of the variable is truthy/falsey
// if the variable is a string for example, you could check if the user input anything into a text box
// if the text box was left blank, the variable would be an empty string, and therefore evaluate to false
var login;
if(login){
    // do login stuff
} else {
    // they didn't fill out the form!
}

console.dir(document.getElementsByClassName("box"));
document.getElementsByClassName("box")[0].innerHTML = "YO IM A BOX";

console.dir(document.querySelector("#div-1"));
console.dir(document.querySelectorAll("body div.box"));

// created new node
var div5 = document.createElement("div");
var div6 = document.createElement("div");

// update attributes
div5.class = "div-5";
div5.innerHTML = "I'm div 5!";
div6.innerHTML = "I'm div 6!";

var div4 = document.getElementsByClassName("box")[1];

// add div5 as a child node of div4
// this will actually put the new node on the page (as part of the DOM)
div4.appendChild(div5);

// add div5 as a child of div1
// because div5 is an object (and is therefore passed by reference), its location on the page simply gets updated
// it does not add two div5's to the page
document.getElementById("div-1").appendChild(div5);

// objects are passed by reference
// primitives are passed by value
var obj1 = {
    name: "Rob"
}

// var obj2 = {
//     name: "Rob"
// }

var obj2 = obj1; // set obj2 to be the exact same object as obj (the same reference, or location in memory)

if(obj1 === obj2){
    console.log("Equal");
} else {
    console.log("Not Equal");
}
// if objects are pointing to the same memory location (reference), then they are Equal
// otherwise the objects are not equal (even if the object content is identical)

// primitives are passed by value
// so for the example below, we set a to 5, and then assign b the value of a, so b becomes 5
// we then increment a, but b will not increment, so a will be 6 and b will still be 5
var a = 5;
var b = a;
a++;

var num = 1;

// named callback
function doStuff() {
    console.log("I WAS CLICKED!");

    var div = document.createElement("div");
    div.innerHTML = "IM A NEW DIV: #" + num;
    div.class = "newdiv";
    
    document.body.appendChild(div);

    num++;
}

// create an event listener on the button
// we first select the button node from the page and then call the addEventListener method
// it takes two parameters: the event type to listen for, and a callback to execute when the event fires
// we are passing in an anonymous callback function here, but we could also pass a named function, see below
document.getElementById("btn").addEventListener("click", function() {
    console.log("I WAS CLICKED!");

    var div = document.createElement("div");
    div.innerHTML = "IM A NEW DIV: #" + num;
    div.class = "newdiv";
    
    document.body.appendChild(div);

    num++;
});

//document.getElementById("btn").addEventListener("click", doStuff); // pass in a named callback