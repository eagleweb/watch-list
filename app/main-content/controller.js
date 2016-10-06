angular.module('WatchList')
    .controller('Homepage', [$http, function ($http) {
        var store = this;
        store.films = [];
        $http.get('dbFilms.json').success(function (data) {
            store.films = data;
        });
    }]);
