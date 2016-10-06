angular.module('WatchList')
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'template/main.html',
                controller : 'Homepage'
            })
            .when('/about', {
                templateUrl: 'template/about.html',
                controller : 'About'
            });
    });
