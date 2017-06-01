var app = angular.module('app', []);

app.controller('mainController', ['$scope',
  function($scope){
    // for(var city in data){
    //   data[city] = llogaritDeputetet(data[city], )
    // }
    $scope.data = data;

    $scope.llogaritDeputetet = function(votat, nrMandateve){
      var temp = JSON.parse(JSON.stringify(votat));
      // inicializo mandatet
      for(var parti in votat){
        votat[parti].mandate = 0;
      }
      // shpërnda mandatet mes partive
      while (nrMandateve > 0){
        // llogarit se kujt i takon mandati, pra cila parti ka me shumë vota
        var partia = Object.keys(temp).reduce(function(a, b){ return temp[a].vota > temp[b].vota ? a : b });
        // shto një mandat partise
        votat[partia].mandate++;
        // pjesto numrin total të votave të partise me mandatet + 1
        temp[partia].vota = votat[partia].vota / (votat[partia].mandate + 1);
        nrMandateve--;
      }
      // printo numrin e mandateve për cdo parti
      for(var parti in votat){
        // console.log(parti+": "+votat[parti].mandate+" mandate");
      }
    }
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
