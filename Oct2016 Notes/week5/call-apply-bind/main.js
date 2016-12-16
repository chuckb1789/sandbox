// Call, apply, bind

// Call lets us invoke a function using a different value of THIS

var arr = [1,2,3,4];

// the array prototype has the built-in method forEach
// meaning all arrays can call forEach
arr.forEach(function(element, index){
    console.log(element);
});

// Every function has a prototype

var hello = "Hello Jeff!";

[].forEach.call(hello, function(element, index){
    console.log(element);
});

function func() {
    [].forEach.call(arguments, function(element, index){
        console.log(element);
    });
}
func(1,2,"Hello",[1,2]);

// Apply - very similar to call
// Does the exact same thing as call, except it allows us to pass in the additional arguments as an array instead of a comma separated list of args (like in call)

var arr2 = [34,23,232,76];

console.log("Max number: ", Math.max(2,4,6));
console.log(Math.max.apply(null, arr2)); // using apply here allows us to leverage the functionality of Math.max, however we can pass an array instead of a comma separated list

// Bind
// Built in method on every JavaScript function
// Allows you to permanently set the THIS value

var bob = {
    name: "Bob"
};
var carlos = {
    name: "Carlos"
}

var whatsMyName = function(excited){
    if(excited){
        console.log("My name is ", this.name, "!!!!");
    } else {
        console.log("My name is ", this.name);
    }
}

var CarlosIsHappyToMeetYou = whatsMyName.bind(carlos, true); 

//whatsMyName(); // there is no this.name in this context

var BobSaysHello = whatsMyName.bind(bob); // permanently binds the value of THIS to the bob object

//BobSaysHello(true); // this.name will refer to bob's name property
//CarlosIsHappyToMeetYou(false);

setTimeout(function(){
    whatsMyName.bind(carlos, true)();
    //console.log("HELLO!");
}, 3000); // second parameter is the delay in milliseconds

//setTimeout(whatsMyName, 3500);
//setTimeout(whatsMyName.bind(carlos, true), 4000); // second parameter is the delay in milliseconds

//setTimeout(whatsMyName, 4500);



function person(){
    this.name = "Bob";
    this.doStuff = function() {
        console.log(this.name + " did stuff! Yay!")
    }
}

var Bob = new person();
Bob.doStuff();

setTimeout(Bob.doStuff, 1000);
setTimeout(Bob.doStuff.bind(Bob), 1500);