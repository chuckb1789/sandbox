// OOP Inheritance!

// Relationships:
// HAS-A
//      Example: A family HAS A dog
// IS-A:
//      Example: A Corgi IS A dog

var family = {
    dog: "Funkers!"
}

// Subclasses (child-classes) are more specific versions of a more general class

// Here we are showing the ES5 syntax for creating classes and subclasses

// Fighter constructor
function Fighter(fighterInfo){
    this.name = fighterInfo.name;
    this.height = fighterInfo.height;
    this.armor = fighterInfo.armor;
    this.abilities = fighterInfo.abilities;
    this.health = fighterInfo.health;
    this.strength = fighterInfo.strength;
}

// method
Fighter.prototype.fight = function(fighter) {
    if((this.health - fighter.strength) > (fighter.health - this.strength)) {
        console.log("There can only be one! " + this.name + " wins!");
    } else {
          console.log("There can only be one! " + fighter.name + " wins!");
    }
}

var TylerDurden = new Fighter({
    name: "Tyler Durden",
    height: "6' 3''",
    armor: "Hawaiian shirt",  
    abilities: ["Self-destruction", "Mayhem"],
    health: 30,
    strength: 5
});

var EdwardNorton = new Fighter({
    name: "Edward Norton",
    height: "6' 3''",
    armor: "Suit",  
    abilities: ["Acting", "Self-loathing", "Ordering from IKEA"],
    health: 35,
    strength: 3
});

TylerDurden.fight(EdwardNorton);

function Ninja(ninjaInfo) {
    //var this = {};
    Fighter.call(this, ninjaInfo); 
    this.sneakiness = ninjaInfo.sneakiness;
}

Ninja.prototype = new Fighter({}); // this allows the Ninja to get the methods from Fighter
Ninja.prototype.constructor = Ninja; // reassign the Ninja's constructor to the proper value, since it was set to the Fighter constructor - this isn't hugely important, but it could be confusing if you don't do it

// unique method to ninjas
Ninja.prototype.stab = function(victim) {
    console.log(this.name + " brutally stabs " + victim.name);
}

var HitoriHanzo = new Ninja({
    name: "Hitori Hanzo",
    height: "5' 3''",
    armor: "Hide",  
    abilities: ["Sneaking", "Flying", "Stun"],
    health: 50,
    strength: 10,
    sneakiness: 5
});

HitoriHanzo.stab(EdwardNorton);
// EdwardNorton.stab(HitoriHanzo); // this will cause an error since EdwardNorton is not a Ninja and therefore cannot stab


// CALL method - can modify the value of THIS
// call is a method attached to other methods
// it allows us to invoke a function with a custom value of THIS
var obj = {
    name: "Alice"
}
var somethingElse = "Bob"

function logit(arg) {
    console.log(this.name + " " + arg);
}
logit();
// instead of calling logit normally, we are calling it using the value of THIS we are providing (obj)
logit.call(obj, somethingElse);


