angular.module("BigHead", [])
    .controller("LittleHeadController", littleControl);

function littleControl() {
    var lCtrl = this; // alias controller to lCtrl

    lCtrl.greeting = "Hello from the other side!";

    lCtrl.users = [];

    lCtrl.saveData = function() {
        console.log("Function running!");
        console.log(lCtrl.firstName);
        console.log(lCtrl.lastName);
        console.log(lCtrl.email);

        var userObj = {
            firstName: lCtrl.firstName,
            lastName: lCtrl.lastName,
            email: lCtrl.email
        }

        lCtrl.users.push(userObj);

        var randNum = Math.floor(Math.random() * lCtrl.catPuns.length);
        console.log(randNum);

        lCtrl.greeting = lCtrl.catPuns[randNum];
    }

    lCtrl.catPuns = [
        "I’m so purrfect that whenever I meet a pretty girl, I whisker away.",
        "I’m extremely well-read and litter-ate. My favorite book is The Great Catsby. I also don’t mind Of Mice And Men.",
        "Got a new purr coat and I’m feline good.",
        "Don’t mind me. Just baskin’ in my own pawesomeness.",
        "I mustache you a question. Aren’t these cat’s whiskers just the cat’s whiskers?",
        "Yeah, I’m a pretty great writer. They call me J.R.R. Tolkitten."
    ];
}    