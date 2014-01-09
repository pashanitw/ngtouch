
angular.module('ngtouchApp')
.controller('IndexCtrl',function($scope){

        $scope.pictures=["images/slidepics/img00.jpg",
                         "images/slidepics/img01.jpg",
                         "images/slidepics/img02.jpg",
                         "images/slidepics/img03.jpg",
                         "images/slidepics/img04.jpg"
                        ];
        $scope.activeIndex=0;
        $scope.isActiveIndex= function ($index) {
          return $index==$scope.activeIndex;
        };
        $scope.isNext=true;
        $scope.showPrev=function($event){
            $scope.isNext=false;
           $scope.activeIndex=(--$scope.activeIndex<0)?$scope.pictures.length-1:$scope.activeIndex;
        }
        $scope.showNext= function () {
            $scope.isNext=true;
            $scope.activeIndex=(++$scope.activeIndex)%$scope.pictures.length;
        };
        $scope.showPic=function($index){
            $scope.activeIndex=$index;
        }
        $scope.animate=false;
        $scope.anm=function(){
            $scope.animate=true;
        }
    });