angular.module('ngtouchApp')
    .controller('NavCtrl', function ($scope,$location) {
        $scope.selectedRoute = {
            template: 'views/index.html',
            controller:'IndexCtrl'
        }
        $scope.$watch(function(){
            return $location.path();
        },function(newPath){
            console.log(newPath);
        })
    });
