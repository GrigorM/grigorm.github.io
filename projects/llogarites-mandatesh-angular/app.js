var app = angular.module('app', []);

app.controller('mainController', ['$scope',
  function($scope){
    $scope.data = data;
    $scope.total = {};

    $scope.llogaritDeputetet = function(votat, nrMandateve){
      var temp = JSON.parse(JSON.stringify(votat));
      for(var parti in votat){
        if( nrMandateve==34 && votat[parti].vota < 13000 ){
          delete temp[parti];
        }
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

    $scope.addParty = function(city){
      var party = prompt("Emri i partise");
      var votes = parseInt(prompt("Numri i votave"));
      if( party && votes ){
        $scope.data[city].rezultate[party] = { vota:votes, votaFillestare:0, mandate: 0};
        $scope.llogaritDeputetet($scope.data[city].rezultate, $scope.data[city].mandate);
      }
    };

  }
]);
