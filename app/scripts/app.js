'use strict';

angular.module('ngtouchApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
        /*'ngTouch',
        'ngAnimate',
        'fbservice',
        'LocalStorageModule',
        'arrayFilters'*/
    ])
    .controller('navCtrl',function($scope){
            $scope.navigation=["Albums","Friends","Location","Events","Birthdays","weather","news"];
    })
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
            .when('/friends/:userid',{
                templateUrl:'views/friend.html',
                controller:'InfoCtrl',
                resolve:{
                    user:function($route,$routeParams,friend,localStorageService){
                        var id=$route.current.params.userid;
                        var params={
                            fields:'first_name,link,work,location'
                        }
                        var fservice=friend(id);
                        return fservice.query(params).then(function(data){
                           return data;
                        });
                    }
                }
            })

            .otherwise({
                redirectTo: '/'
            });
  });
