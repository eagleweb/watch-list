var app= angular.module('app', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    //страница по умолчанию
        .when('/', {
            templateUrl: '../template/index.html',
            controller : 'Homepage'
        })
        .when('/about', {
            templateUrl: '../template/about.html',
            controller : 'About'
        });
});

app.controller('Homepage',['$scope',function($scope){
    $scope.homepage = "Главная";
}]);
app.controller('About',['$scope', function($scope){
    $scope.about = "Lorem ipsum...";
}]);


