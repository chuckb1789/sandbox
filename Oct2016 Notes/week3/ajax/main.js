// Weather Controller


function k_to_F(k_deg){
    return ((k_deg - 273.15) * (9/5)) + 32 ;
}

function hPa_to_inHg(hPa){
    const in_per_hPa = 33.8638866667 ;
    return hPa / in_per_hPa ;
}

angular.module('WeatherApp',[])
    .controller('WeatherController', function($http){
        var that     = this;
        that.msg     = "(loaded at : " + new Date() + ")";
        that.lat     = 40.0;
        that.lon     = -105.0 ;
        var APPID    = "1bce853ef4079568fbb4ecbaf73b1de7 ";
        var BASE_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${that.lat}&lon=${that.lon}&APPID=${APPID}`;
        $http.get(BASE_URL).then(
            function(res){
                that.name     = res.data.name ;
                that.weather  = res.data.main ;
                that.real_lat = res.data.coord.lat ;
                that.real_lon = res.data.coord.lon ;
                that.temp     = k_to_F(res.data.main.temp);
                that.pres     = hPa_to_inHg(res.data.main.pressure);
            },
            function(err){
                console.log(err);
            });

    });
