angular.module('WatchList')
    .controller('Homepage',['$scope',function($scope){
        $scope.homepage = "Главная";
    }])
    .controller('About',['$scope', function($scope){
        $scope.about = "Lorem ipsum...";
    }]);
