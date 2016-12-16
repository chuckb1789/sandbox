console.log('loading main.js')


// I can call a named function before it is declared
// callMe();

// named function
function callMe() {
    console.log('Clicked the button');
}

// can't call this before the anonymous declaration'
// callHim();
// anonymous function declaration
var callHim = function(){
    console.log("called him");
}

// invoke the anonymous function
// callHim();