angular.module('ngtouchApp')
    .controller('FriendCtrl', function ($scope, me) {
        var params={
            fields:'friends.fields(location,birthday,first_name,last_name,gender,relationship_status)'
        }
        me.query(params).then(function(data){
            console.log(data);
            $scope.friends=data.friends.data;
        });
        $scope.sortField=undefined;
        $scope.reverse=false;
        $scope.sort=function(field){
            if($scope.sortField===field){
                $scope.reverse=!$scope.reverse;
            }else{
                $scope.reverse=false;
                $scope.sortField=field;
            }
        }
        $scope.pageIndex=2;
        $scope.pageSize=10;
    });