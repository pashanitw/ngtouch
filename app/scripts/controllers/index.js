angular.module('ngtouchApp')
    .controller('IndexCtrl', function ($scope, fbOperations, me,FB_ACCESSTOKEN,albumService) {

        $scope.pictures = ["images/slidepics/img00.jpg",
            "images/slidepics/img01.jpg",
            "images/slidepics/img02.jpg",
            "images/slidepics/img03.jpg",
            "images/slidepics/img04.jpg"
        ];
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
            fbOperations.login("user_photos");
        };
        $scope.getPicture=function(cover_photo,width,height){
            return "https://graph.facebook.com/"+cover_photo+"/picture?width="+width+"&height="+height+"&access_token="+FB_ACCESSTOKEN.token;
        }
        $scope.albums=[];
        $scope.fetchalbums=function()
        {
            var params = {
                fields: "albums.fields(id,name,cover_photo)"
            }
            me.query(params).then(function(data){
                $scope.albums=data.albums.data;
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

    })
;