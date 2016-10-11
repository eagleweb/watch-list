angular.module('WatchList')
    .controller('Homepage', function ($scope, $http) {
        $http.get('dbFilms.json').success(function (data) {
            $scope.dbfilms = data;
        });
    });
