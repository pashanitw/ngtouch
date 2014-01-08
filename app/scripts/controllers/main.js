'use strict';
Array.prototype.move=function(from,to){
    this.slice(to,0,this.slice(from,1)[0]);
    return this;
}
angular.module('ngtouchApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'varma'
    ];
        $scope.items=[


        ];
        $scope.tapped = function ($event) {
           // console.log(tapped);
            var ele = $event.target;
            var x = Math.floor(Math.random() * 200) + 1,
                y = Math.floor(Math.random() * 100) + 1,
                z = Math.floor(Math.random() * 6) + 1,
                rot = Math.floor(Math.random() * 360) + 1;
            $(ele).css({
                'transform': "translate3d(" + x + "px," + y + "px," + z + "px)" +
                    "rotate(" + rot + "deg)"
            });
        }
        var item={
            to: "xxx",
            from: "yyy",
            body: "kxdvksd sxcvhsdh adfhiuh v asdfadvhoh zsdfghy8 zsdfuih asdfiug adfigh  adfiuihuisfv adfviusdhfi asdfigizhf asidfih asdfias" +
                "sfdkksfdhsdfhhsd fsxdfgsi d sadfgik sadfuh zsdfiuhs dfx",
            showAction:false,
            click:function(){
                alert("clicked third");
            }
        }
       $scope.push= function () {
          $scope.items.push(item);
       };
        $scope.pop= function () {
          $scope.items.pop();
        };
        $scope.move=function(){
          if($scope.items.length>2){
              $scope.items.move($scope.items.length-1,$scope.items.length-1);
          }
        }
  });
