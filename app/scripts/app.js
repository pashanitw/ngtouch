'use strict';

angular.module('ngtouchApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngTouch',
        'angular-gestures',
        'ngAnimate'
    ])
  .config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/', {
                templateUrl: 'views/IndexCtrl.html',
                controller: 'IndexCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
  });
