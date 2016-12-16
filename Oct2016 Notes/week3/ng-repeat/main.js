// create the angular module and attach the controller to it
angular.module("DwarvesApp", [])
    .controller("DwarvesController", DwarvesCtrl);

// define the controller
function DwarvesCtrl() {
    // alias this to the controller-as name
    var dCtrl = this;

    // define a greeting we can display to make sure angular is working
    dCtrl.greeting = "Hello from Dwarf Controller!";

    // define a simple array of strings
    dCtrl.dwarves = [
        "Sleepy",
        "Dopey",
        "Doc",
        "Bashful",
        "Sneezy",
        "Grumpy",
        "Drunky"
    ];

    // define a slightly more complex data structure - an object whose properties are the dwarf names and the values are the dwarf descriptions
    dCtrl.dwarvesObj = {
        // 'Sleepy': {
        //     "Description":'The napping one',
        //     "Home": "Mom's basement",
        //     "Car": "1972 Ford Pinto"
        // },
        'Sleepy': 'The napping one',   
        'Dopey': 'The slow/high one',
        'Doc': 'The smart/drunk one',
        'Bashful': 'The shy/pansy one',
        'Sneezy': 'The allergic to everything one',
        'Grumpy': 'The asshole of the group',
        'Drunky': 'Lives with Dopey in his mom\'s basement'
    }

    // for-in loop: used to loop through an object's properties
    for(dwarf in dCtrl.dwarvesObj) {
        console.log(dwarf + ": " + dCtrl.dwarvesObj[dwarf]);
    }

    // define an array that has duplicated elements
    // this will cause an error in an ng-repeat - will need to track by $index to fix this
    dCtrl.dwarfClones = [
        "Sleepy",
        "Dopey",
        "Dopey",
        "Doc",
        "Bashful",
        "Sneezy",
        "Sneezy",
        "Grumpy",
        "Drunky",
        "Drunky",
        "Drunky",
        "Drunky",
        "Drunky"
    ];

    // create an array of dwarf objects who have a property that is an array (will need a nested ng-repeat to loop over the array)
    dCtrl.arrObjDwarves = [
        {
            name: "Sleepy",
            hobbies: ['Sleepwalking', 'Scaring the shit out of his roommates', "Napping"]
        },
        {
            name: "Dopey",
            hobbies: ['Smoking','Licking walls','Sniffing glue']
        },
        {
            name: 'Drunky',
            hobbies: ['Polishing his shotgun', 'Sippin on some sizzurp']
        }
    ];

    dCtrl.printDwarf = function(name){
        console.log(name);
    }
}    