var app = angular.module('app', []);

app.controller('mainController', ['$scope',
  function($scope){
    $scope.data = data;
    $scope.total = {};

    $scope.llogaritDeputetet = function(votat, nrMandateve){
      var temp = JSON.parse(JSON.stringify(votat));
      for(var parti in votat){
        votat[parti].mandate = 0;
      }
      while (nrMandateve > 0){
        var partia = Object.keys(temp).reduce(function(a, b){ return temp[a].vota > temp[b].vota ? a : b });
        votat[partia].mandate++;
        temp[partia].vota = votat[partia].vota / (votat[partia].mandate + 1);
        nrMandateve--;
      }
      llogaritTotalin();
    }

    function llogaritTotalin(){
      $scope.total = {};
      for( var city in data ){
        for( parti in data[city].rezultate ){
          if(data[city].rezultate[parti].mandate > 0){
            if($scope.total[parti] === undefined){
              $scope.total[parti] = data[city].rezultate[parti].mandate;
            }
            else {
              $scope.total[parti] += data[city].rezultate[parti].mandate;
            }
          }
        }
      }
    }
    llogaritTotalin();
    // $scope.llogaritDeputetet($scope.data, 7);

    // $scope.nums = [{val: 5, per: 0}, {val: 15, per: 0}, {val: 10, per: 0}];
    //
    // $scope.calculatePercentage = function(){
    //   var sum = 0;
    //   for( var i=0;i<$scope.nums.length; i++ ){
    //     sum += $scope.nums[i].val;
    //   }
    //   for( var i=0;i<$scope.nums.length; i++ ){
    //     $scope.nums[i].per = ($scope.nums[i].val/sum)*100;
    //   }
    //   // return num/(sum) * 100;
    // }
    // $scope.calculatePercentage();

  }
]);
