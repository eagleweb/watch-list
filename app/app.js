angular.module('watch-list', ['ngRoute'])
    .config(function($routeProvider){
       $routeProvider
        //страница по умолчанию
           .whan('/',{
               templateUrl: '../template/index.html',
           })
    });

