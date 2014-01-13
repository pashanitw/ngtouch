'use strict';

angular.module('ngtouchApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngTouch',
        'ngAnimate',
        'fbservice',
        'LocalStorageModule',
        'arrayFilters'
    ])
  .config(function ($routeProvider,$interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'IndexCtrl'
            })
            .when('/profile',{
                templateUrl:'views/profile.html',
                controller:'ProfileCtrl'
            })
            .when('/friends',{
                templateUrl:'views/friends.html',
                controller:'FriendCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });
  });
