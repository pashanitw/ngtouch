angular.module('ngtouchApp')
    .controller('FriendCtrl', function ($scope, me,$location) {
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
        $scope.redirect=function(id){
            $location.path('friends/'+id);
        }
    })
.controller("InfoCtrl",function($scope,$routeParams,friend,localStorageService,user){
         console.log(user);
        var getImg=function(id,width,height){
            return "https://graph.facebook.com/"+id+"/picture?width="+width+"&height="+height+"&access_token="+localStorageService.get("FB_TOKEN");
        }
        $scope.friend={
            name:"",
            location:"",
            work:"",
            img:getImg(user.id,100,100)
        }
            $scope.friend.link = user.link;
            $scope.friend.name = user.first_name,
                $scope.friend.location = user.location.name;
            $scope.friend.work = user.work[0].employer.name;
            $scope.friend.link = user.link;


    });