angular.module('App')
    .factory('dungeonFactory', dungeonFact);


function dungeonFact (){

    // Player
    // Rooms
    // Monsters
    // Phat Lewt

    // Room {
    //     loot : [Phat Lewt]
    //     barrels : boolean
    //     monster : Monster
    //     description : string
    // }

    var descriptions = [
        "This room smells bad",
        "This room is sticky",
        "This room is pretty cool",
        "This room may not be a room"
    ];

    function roomGenerator() {
        var room = {};

        // Barrels
        var barrelNum = Math.random();
        room.barrels = barrelNum < 0.5 ? true : false;

        // Description
        var descriptionNum = Math.floor( Math.random() * descriptions.length );
        room.description = descriptions[descriptionNum];

        // Monster
        room.monster = monsterGenerator();

        // Loot
        room.loot = [];
        var numLoot = Math.floor(Math.random() * 3)
        for(var i = 0; i < numLoot; i++){
            room.loot.push(lootGenerator());
        }

        return room
    }

    // Monster {
        // eyeballs : Number,
        // name     : String,
        // weapon   : String
        // size     : String
    // }

    var monsterNames = [
        "Ogre",
        "Turask",
        "Roberte Hugs",
        "Mel Gibson"
    ];
    var monsterWeapons = [
        "Dildo",
        "Axe",
        "Frickin' Lazor Beams",
        "2-hd Great Shark"
    ];
    var monsterSizes = [
        "Small",
        "Medium",
        "Big Gulp"
    ];
    

    function monsterGenerator(){
        var monster = {};

        // Name
        var nameNum = Math.floor(Math.random() * monsterNames.length);
        monster.name = monsterNames[nameNum];
        // Weapon
        var weaponNum = Math.floor(Math.random() * monsterWeapons.length);
        monster.weapon = monsterWeapons[weaponNum];
        // Size
        var sizeNum = Math.floor(Math.random() * monsterSizes.length);
        monster.size = monsterSizes[sizeNum];

        // Eyeballs
        monster.eyeballs = Math.floor(Math.random() * 70);

        return monster
    }

    // Loot {
    //     name : String
    //     weight : Number
    // }

    var lootNames = [
        "Crunchy Cheetos",
        "Flamin' Hot Cheetos",
        "Regular Fat Cheeto Puffs",
        "Jalapeno Lime Cheetos"
    ]
    function lootGenerator (){
        var loot = {};

        // Name
        var nameNum = Math.floor(Math.random() * lootNames.length);
        loot.name = lootNames[nameNum];

        // Weight
        loot.weight = Math.random();

        return loot
    }


    return {
        Player : {},
        RoomGen : roomGenerator,
        MonsterGen : monsterGenerator,
        LootGen : lootGenerator,
    }
}