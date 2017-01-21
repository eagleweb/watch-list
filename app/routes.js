angular.module('WatchList')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'app/main-content/main.html',
                        controller: 'Homepage'
                    },
                    'static': {
                        template: 'Hey there!!!'
                    },
                    'menu': {
                        templateUrl: 'app/menu.html',
                        controller: 'Homepage'
                    }
                }

            })
            .state('about',{
                url: '/about',
                views: {
                    '': {
                        templateUrl: 'app/about/about.html',
                        controller: 'About'
                    },
                    'static': {
                        template: 'Hey there about!!!'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
