'use strict';

angular.module('ngtouchApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngTouch',
        'ngAnimate',
        'fbservice'
    ])
  .config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/', {
                templateUrl: 'views/index.html',
                controller: 'IndexCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
  });
