// function DECLARATION - tells how to do it, but doesn't do it yet
var finance = function (balance, payment) {
    var newBalance = balance + payment;
    return newBalance;
}

// function INVOCATION/CALL - tell the function to do it now
var myBalance = finance(1000, 10);

// we can use a function (return value) just like a variable.  No need to assign it to a variable to use it.
var ourBalance = finance(12, 1) + finance(555, 66)  // ourBalance = 13 + 621

// create a function
var exclaim = function (str) {
    console.log(str + "!")
}

// a function can be ASSIGNED to a variable just like any other object or value
var sayItLoud = exclaim;

// these two methods do the exact same thing.  sayItLoud === exclaim
sayItLoud("hello");
exclaim("hello");

// declare a function that takes two PARAMETERS
function calculateArea1(width, length) {
    var area = length * width;
    return area;
};
// call that function with two ARGUMENTS
var area = calculateArea1(2, 3);


// you can have a function INSIDE another function
function calculateVolume(width, length, height) {

    // the inner function is in the SCOPE of the outter function.  It can used inside of calculateVolume, but not outside in the "global" scope
    function calculateArea2(width, length) {
        var area = length * width;
        return area;
    };

    // we can call calculateArea2 here, inside the calculateVolume scope
    var volume1 = height * calculateArea2(width, length);

    //var area = calculateArea(2,3);
    return volume1;
};

calculateArea1(3,4);  // we can call calculateArea1 because it is in the global scope
calculateArea2(3,4);  // we can't call calculateArea2 here because it only exists in the scope of calculateVolume

// this is a NAMED FUNCTION.  It has a name (namedFunction), and is assigned to a variable (func)
var func = function namedFunction() {
    console.log("I am named");
}

// this is an ANONYMOUS FUNCTION.  It does not have a name, and is assigned to a variable (func)
var func = function () {
    console.log("I am anonymous");
}

// this function (handleTheThing) has 3 parameters - a number, a string and a function
// you can pass functions in as arguments to other functions, just like you can pass in any other object or variable
function handleTheThing(num, str, func) {
    console.log("handleTheThing");
    // this will invoke the function that was passed in, passing "num + str" as the argument
    func(num + str);
}

// here we are invoking handleTheThing with a function that logs the msg parameter
handleTheThing(1, "string thing", function (msg) { console.log(msg); });
// here we are invoking handleTheThing again with a different function that logs the msg parameter in a different way
handleTheThing(1, "string thing", function (msg) { console.log("hello there", msg); });


// This is the same function, written in ECMASCRIPT 5 and ECMASCRIPT 6/Ecmascript 2016 - two different versions of javascript
// ES5 style
var newFunction1 = function () {
    var volume2 = calculateVolume(3, 4, 5);
    return volume2;
};
// ES6 style
var newFunction2 = () => {
    var volume2 = calculateVolume(3, 4, 5);
}

// function call - a function call has parenthesis and function arguments (if needed)
console.log(newFunction1());  // this will log 60

// function reference - a function reference
console.log(newFunction1);  // this will log the function itself (ie. var newFunction1() = function() {...})

// a METHOD is a function that is a property of an object
var obj = {
    name: "joe",
    callMe: function () {           // callMe is a method on the obj object
        console.log("hello");
    }
}

obj.callMe();   // this is how you INVOKE the callMe method
obj.callMe;   // this is how you REFER to the callMe method
obj.name           // very similar to how you reference any other property on an object

// javascript native objects also have methods defined.  They are called BUILT-IN FUNCTIONS.
var weekString = "Monday Tuesday Wednesday Thursday Friday";  // create a string
var delimiter = " ";                                            // define a delimiter which separates the elements in a string
var weekArray = weekString.split(delimiter);            // split the string into an array of strings, based on the delimiter
console.log(weekArray);                                 // look at the array (["Monday","Tuesday",...])

// join() is another built-in method on an array which joins the elements into a single string (the opposite of split)
var weekStringAgain = weekArray.join(' ');  // this recreates the original string ("Monday Tuesday Wednesday ...")

// you can CHAIN function calls together like this  obj.function1().function2().function3()
// this splits the string into an array, and then joins the array elements back into a string
var weekStringAgain = weekString.split(delimiter).join(delimiter);

// If document is a document string, then this would do a find and replace on the document
var findArg = "Joe";
var replaceArg = "Bill";
document.split(findArg).join(replaceArg)  // changes "Hello Joe. Joe is cool." to "Hello Bill.  Bill is cool."


