angular.module('weatherApp')
    .controller('weatherController', weatherControllerFunction);

// any api is going to need to make http calls, so we inject $http
// we also inject our own factory so that we can access the data in the object that is returned from it
weatherControllerFunction.$inject = ['$http', 'weatherFactory'];

function weatherControllerFunction($http, weatherFactory) {
    var wCtrl = this;
    // I like lots of console.logs so I can get context for my red text
    console.log('weather congtroller loaded')

    // let's make sure that out controller is working and start with a simple greeting/title
    wCtrl.greeting = "Today's Weather";

    // we start by looking at the documentation for the api   http://openweathermap.org/api

    // create a function to call the api to get information about a given city
    wCtrl.citySubmit = function () {
        console.log("searching...")
        // if wCtrl.city = Denver then this URL becomes
        // api.openweathermap.org/data/2.5/weather?q=Denver&APPID={api_key}
        // this will get the current weather conditions for the given city    http://openweathermap.org/current
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + wCtrl.city + '&APPID=' + weatherFactory.APIKEY)
            .then(function successCallback(res) {
                console.log('Response from weather API', res.data);
                wCtrl.weatherData = res.data;
            }, function errorCallBack(err) {
                console.log('Weather API failed', err);
            });
    }

    // thi swill update the weather information every second (1000 milliseconds)
    // this is called 'polling'
    wCtrl.autoUpdate = function() {
        console.log('start updating');
        // setInterval takes two arguments - a function to run and how often to run it
        wCtrlInterval = setInterval(function(){
            // I've commented out the actual call so that we don't completely consume my API calls (there is a limit)
            // wCtrl.citySubmit();
            // we'll just console.log to show how the autoUpdate polling would work
            console.log('updated the weather')
        }, 1000)
    }

}