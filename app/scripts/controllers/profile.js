angular.module('ngtouchApp')
    .controller('ProfileCtrl', function ($scope, fbOperations, me,FB_ACCESSTOKEN,albumService) {

        me.query().then(function(data){
            console.log(data);
            $scope.info=data;
        })
    });