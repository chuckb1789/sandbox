class Fighter {
    constructor(fighterInfo){
         this.name = fighterInfo.name;
        this.height = fighterInfo.height;
        this.armor = fighterInfo.armor;
        this.abilities = fighterInfo.abilities;
        this.health = fighterInfo.health;
        this.strength = fighterInfo.strength;
    }

    fight(fighter) {
        if((this.health - fighter.strength) > (fighter.health - this.strength)) {
            console.log("There can only be one! " + this.name + " wins!");
        } else {
            console.log("There can only be one! " + fighter.name + " wins!");
        }
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

class Ninja extends Fighter {
    constructor(ninjaInfo) {
        super(ninjaInfo); // this calls the superclass' (Fighter) constructor
        this.sneakiness = ninjaInfo.sneakiness;
    }

    stab(victim) {
        console.log(this.name + " brutally stabs " + victim.name);
    }
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

// named function
function Tyson(name) {
}
// fat arrow syntax
var Tyson1 = (name) => {
}


