function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


var defaultStuff = ['jewels', 'winches', 'coins', 'secrets', 'dinnerware']

// this variable is a class, so it's name starts with a capital letter
var Burglar = function(name, stuff){
    this.name = name;
    this.dead = false;
    // if stuff is truthey, javascript will SHORT CIRCUIT this statement, assigning stuff to this.stuff.
    this.stuff = stuff || defaultStuff;
};


Burglar.prototype.steal = function(victim){
    if ( victim.stuff.length !== 0 ) {
        // pop removes an element from the end of an array, and ALSO RETURNS IT
        // our stuff array is acting kind of like a programming STACK. a STACK can have items put onto the top, or removed from the top, but the middle cannot be modified. 
        this.stuff.push( victim.stuff.pop() )
        console.log(this.name + ' now has ' + this.stuff.join(', ') + '.')
        console.log(victim.name + ' now has ' + victim.stuff.join(', ') + '.')
        console.log('=-=-=-=-=-=-=-=-=-=-=-=')
    }
    else {
        victim.dead = true;
        console.log("hasta la vista, " + victim.name)
        console.log('=-=-=-=-=-=-=-=-=-=-=-=')
    }
}

// var alice = new Burglar('Alice')
// var bob   = new Burglar('Bob')


// alice.steal(bob)
// 10 or less is a thorpe
var thorpeOfThieves = []

for ( var i = 0; i < 10; i++) {
    shuffle(defaultStuff)
    // slice, when called with no arguments, will return a NEW ARRAY, not a REFERENCE to the original array. Slice is usually used to return a smaller array, but we're just using to take advantage of a side effect.
    thorpeOfThieves.push(new Burglar('person' + i, defaultStuff.slice()))
}

// console.log(thorpeOfThieves)

// this is the ONLY way to access a single burglar, because they don't have individual variable names
// console.log(thorpeOfThieves[0])

var pickPeople = function(){
    var victim  = thorpeOfThieves[Math.floor(Math.random() * thorpeOfThieves.length)]
    var burglar = thorpeOfThieves[Math.floor(Math.random() * thorpeOfThieves.length)]
    return {
        victim  : victim,
        burglar : burglar
    } 
}
var randomTheft = function(){
    // lines 60 & 61 can be considered a javascript IDIOM for finding a random element from an array
    var people = pickPeople()

    // if we picked the same person for victim and burglar, pick a new pair until they're different
    while ( people.burglar === people.victim ) {
        people = pickPeople()
    }
    people.burglar.steal(people.victim)
}


var theftInterval = setInterval(function(){

    thorpeOfThieves = thorpeOfThieves.filter(function(thief){
        // if we return true, this thief is included in the new array. if we return false, they are filtered out
        if ( !thief.dead ) { return true }
        else if ( thief.dead ) { return false }

        // return !thief.dead // this line is functionally equivalent to lines 82 and 83
    })

    if ( thorpeOfThieves.length > 1 ) {
        randomTheft()
    }
    else {
        console.log(thorpeOfThieves[0].name + ' says: There can be only one')
        clearInterval(theftInterval)
    }

}, 10)



// this is an example of clearing an interval 
// setTimeout(function(){
//     clearInterval(theftInterval)
// }, 4000)