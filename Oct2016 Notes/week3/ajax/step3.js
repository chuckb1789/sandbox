// Weather Controller

angular.module('WeatherApp',[])
    .controller('WeatherController', function($http){
        var that = this;
        that.msg = "(loaded at : " + new Date() + ")";
        $http.get('http://api.github.com/').then(
            function(res){
                that.api_list = res.data;
                console.log(res.data);
            },
            function(err){
                console.log(err);
            });
        $http.get('http://api.github.com/users/chasrmartin/repos').then(
            function(res){
                that.repos = res.data;
                console.log(res.data);
            },
            function(err){
                console.log(err);
            });
    });
