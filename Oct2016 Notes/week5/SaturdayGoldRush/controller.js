angular.module("GoldRush", [])
    .controller("GoldController", goldFunction);

function goldFunction() {
    var gCtrl = this;

    gCtrl.greeting = "Where da gold at?!";

    // create an empty array that represents our list of markers to display on the page
    gCtrl.markers = [];

    gCtrl.addMarker = function($event){
        //console.log($event);

        var marker = {
            x: $event.clientX,
            y: $event.clientY,
            hide: false
        }
        console.log("Adding a new marker to the list: ", marker);

        // add the new marker into our list of markers
        gCtrl.markers.push(marker);
        console.log("The new markers list is ", gCtrl.markers);
    }

    gCtrl.hideMarker = function($index){
        console.log("Trying to hide marker at postion " + $index, gCtrl.markers[$index]);

        gCtrl.markers[$index].hide = true;
    }

    gCtrl.showMarkers = function() {
        console.log("Attempting to show all markers!");

        // for(var i = 0; i < gCtrl.markers.length; i++) {
        //     gCtrl.markers[i].hide = false;
        // }

        // this is the foreach loop equivalent of the normal for loop above
        gCtrl.markers.forEach(function(marker) {
            marker.hide = false;
        });
    }
}


    