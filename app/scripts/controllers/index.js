angular.module('ngtouchApp')
    .controller('IndexCtrl', function ($scope, fbOperations, me,FB_ACCESSTOKEN,albumService) {

        $scope.showCont=false;
        $scope.pictures = [];
        $scope.activeIndex = 0;
        $scope.isActiveIndex = function ($index) {
            return $index == $scope.activeIndex;
        };
        $scope.isNext = true;
        $scope.showPrev = function ($event) {
            $scope.isNext = false;
            $scope.activeIndex = (--$scope.activeIndex < 0) ? $scope.pictures.length - 1 : $scope.activeIndex;
        }
        $scope.showNext = function () {
            $scope.isNext = true;
            $scope.activeIndex = (++$scope.activeIndex) % $scope.pictures.length;
        };
        $scope.showPic = function ($index) {
            $scope.isNext = ($index < $scope.activeIndex) ? false : true;
            $scope.activeIndex = $index;
        }
        $scope.animate = false;
        $scope.anm = function () {
            $scope.animate = true;
        }
        $scope.login = function () {
            fbOperations.login("user_photos,user_birthday,user_friends,user_location,user_relationship_details");
        };
        $scope.getPicture=function(cover_photo,width,height){
            return "https://graph.facebook.com/"+cover_photo+"/picture?width="+width+"&height="+height+"&access_token="+FB_ACCESSTOKEN.token;
        }
        $scope.albums=[];
        $scope.fetchalbums=function()
        {
            var params = {
                fields: "albums.fields(id,name,cover_photo,count)"
            }
            me.query(params).then(function(data){
                $scope.albums=data.albums.data;
                $scope.showCont=true;
                console.log($scope.albums);
            },function(){
                console.log("failed");
            });
        }
        $scope.fetchAlbumById=function(albumid){
            var album=albumService(albumid);
            var params={
                fields:'photos.fields(id)'
            }
            album.query(params).then(function(data){
                console.log(data);
                $scope.pictures=data.photos.data;
            },function(){
                console.log("failed");
            });
        }
        $scope.albumInfo={
            name:"",
            count:0
        }

    })
    .controller('AlbumCtrl',function($scope){
        $scope.showPicture=function(id){
            $scope.fetchAlbumById(id);
            $scope.albumInfo.name=$scope.album.name;
            $scope.albumInfo.count=$scope.album.count;
        }
    });
