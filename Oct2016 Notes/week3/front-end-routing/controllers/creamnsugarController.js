mainApp
    .controller('CreamNSugar', creamSugarCtrl);

// define a basic angular controller with a couple of properties that we can acces from our html code
function creamSugarCtrl () {
    var csCtrl = this;
    
    csCtrl.greeting = "Welcome to Bozo Coffee!";

    csCtrl.menu = [{
        name:'coffee',
        price: 6.75
    },{
        name:'mocha',
        price:4.21
    }, {
        name:'tea',
        price: 3.5
    }
    ];
};

