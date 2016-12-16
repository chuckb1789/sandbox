var alice = {
    name : 'Alice', // this is a property
    age  : 26,
    // this: 10
}
var greet = function(){
    console.log(this)
    console.log(this.name)
}
alice.sayHello = greet

// 
// alice.sayHello()

var greeter = {
    name : 'jeff',
    greet : function(){
        //every single function in javascript gets its own value for this
        // greet2 DOES NOT inherit its value of 'this' from the parent 'greet' function. it has its own value of this, which is its host object, which is the global object in this case
        var greet2 = function(){
            console.log(this.name)
        }
        greet2()
    }

}
// greeter.greet()
// alice.greet()

var classroom = {
    name : "classroom B",
    greet : function(){ console.log(this.name)},
    students : [
        {
            name : 'alice',
            greet : function(){ console.log(this.name)}
        }
    ]
}

// classroom.greet()
// classroom.students[0].greet()

// here, we've created a function that creates person objects, which takes us one step closer, but this is still not proper javascript OOP
var personMaker = function(name, age){
    var newPerson = {
        age  : age,
        name : name,
    }
    return newPerson
}
var steve = personMaker('steve', 44)

// what is 'this' in javascript?
// 'this' refers to the object that function is attached to





// classes are very important, so i've named it with a capital letter


// the jump method in this Cat constructor is not as efficient as possible
// var Cat = function(name, color, gender, laziness, weight){
//     // when a function is invoked with the 'new' keyword, its behavior is changed as follows: 
//     // var this = {}
//     this.name = name
//     this.color = color
//     if ( gender ) {
//         this.gender = gender
//     }
//     else {
//         this.gender = Cat.defaultGender
//     }
//     this.laziness = laziness
//     this.weight = weight

//     this.jump = function(){
//         console.log(this.name + " jumped " + 20/this.weight + " feet in the air!")
//     }

//     // return this
// }

var Cat = function(name, color, gender, laziness, weight){
    // when a function is invoked with the 'new' keyword, its behavior is changed as follows: 
    // var this = {}
    this.name = name
    this.color = color
    if ( gender ) {
        this.gender = gender
    }
    else {
        this.gender = Cat.defaultGender
    }
    this.laziness = laziness
    this.weight = weight

    // return this
}

// instead of attaching the method to 'this' in the constructor, attach the method to the constructor's prototype
Cat.prototype.jump = function(){
    console.log(this.name + " jumped " + 20/this.weight + " feet in the air!")
}

// we would call this a 'static property' because it belongs to the class in general, and not a particular instance of the class.
Cat.defaultGender = 'male'

// constructor functions don't behave properly when called normally
// var sergeantWhiskers = Cat('SergeantWhiskers', 'calico', 'neutral', 'epic', 5)

var sergeantWhiskers = new Cat('SergeantWhiskers', 'calico', 'neutral', 'epic', 5)

var sergeantWhiskersJr = new Cat('SergeantWhiskersJr', 'pinto', 'aaaallll man.', 'lots', 9)

// this DOES create a new cat object, but there is NO WAY we can access it, if it's not assigned to a variable, stored in an array, etc.
new Cat()

// console.log(sergeantWhiskers.name)


sergeantWhiskers.jump()
sergeantWhiskersJr.jump()

// every function in javascript has a prototype, which defines shared behaviors for objects constructed from that function.
// 99% of the time, you won't care about a functions prototype, unless that function is a CONSTRUCTOR function for a CLASS, then we care very much about its prototype
var foo = function(){}
// console.log(foo.prototype)

// console.log(sergeantWhiskers.constructor.prototype === Cat.prototype)

// ecmascript is a standard for a language. javascript is an implementation of that standard
javascript == 'ecmaScript'

// we've been writing ES5. ES6 (available now) has nicer syntax for classes. 


// here's the same class with ES6 syntax
// everything inside the class is a method, so we don't need to use the function keyword
class Cat2 {
    // javascript knows this is the constructor function for the Cat2 class BECAUSE we have named it 'constructor'
    constructor(name, color, gender, laziness, weight){
        // when a function is invoked with the 'new' keyword, its behavior is changed as follows: 
        // var this = {}
        this.name = name
        this.color = color
        if ( gender ) {
            this.gender = gender
        }
        else {
            this.gender = Cat.defaultGender
        }
        this.laziness = laziness
        this.weight = weight

        // return this
    }
    jump(){
        console.log(this.name + " jumped " + 20/this.weight + " feet in the air!")
        }
    }
}

//we USE objects the same way in ES6 vs ES5. Only the way we define classes/constructor functions is different
var felix = new Cat2('felix', 'black&white', 'cartoon', 'exceptionally', .000001)