// Weather Controller


function k_to_F(k_deg){
    return ((k_deg - 273.15) * (9/5)) + 32 ;
}

function hPa_to_inHg(hPa){
    const in_per_hPa = 33.8638866667 ;
    return hPa / in_per_hPa ;
}

function getData(lat, lon) {
    const APPID    = "1bce853ef4079568fbb4ecbaf73b1de7 ";
    const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}`;
    var myData ;
    $http.get(BASE_URL).then(
        function(res){
            myData = res.data ;
        },
        function(err){
            console.log(err);
        });
    return myData ;
}

angular.module('WeatherApp',[])
    .controller('WeatherController', function($http){
        var that      = this;
        that.msg      = "(loaded at : " + new Date() + ")";
        that.lat      = 40.0;
        that.lon      = -105.0 ;
        var data      = getData(that.lat, that.lon);
        that.name     = data.name ;
        that.weather  = data.main ;
        that.real_lat = data.coord.lat ;
        that.real_lon = data.coord.lon ;
        that.temp     = k_to_F(data.main.temp);
        that.pres     = hPa_to_inHg(data.main.pressure);
    });
