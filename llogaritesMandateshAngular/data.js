var shkoder = {
  "PS": {
    vota: 37984
  },
  "PD": {
    vota: 45802
  },
  "LSI": {
    vota: 12772
  },
  "PR": {
    vota: 4930
  },
  "PKDSh": {
    vota: 6764
  }
};
var kukes = {
  "PS": {
    vota: 11385
  },
  "PD": {
    vota: 22426
  },
  "LSI": {
    vota: 5650
  },
  "PR": {
    vota: 2393
  }
};
var diber = {
  "PS": {
    vota: 25103
  },
  "PD": {
    vota: 30137
  },
  "LSI": {
    vota: 10019
  }
};
var lezhe = {
  "PS": {
    vota: 26731
  },
  "PD": {
    vota: 31536
  },
  "LSI": {
    vota: 8721
  },
  "PDK": {
    vota: 2882
  }
};
var tirane = {
  "PS": {
    vota: 198837
  },
  "PD": {
    vota: 151472
  },
  "LSI": {
    vota: 35394
  }
};
var durres = {
  "PS": {
    vota: 60833
  },
  "PD": {
    vota: 52703
  },
  "LSI": {
    vota: 11605
  },
  "PR": {
    vota: 10519
  }
};
var elbasan = {
  "PS": {
    vota: 75086
  },
  "PD": {
    vota: 46788
  },
  "LSI": {
    vota: 18484
  },
  "PDIU": {
    vota: 12110
  },
  "PR": {
    vota: 6266
  }
};
var fier = {
  "PS": {
    vota: 89637
  },
  "PD": {
    vota: 46374
  },
  "LSI": {
    vota: 19677
  },
  "PDIU": {
    vota: 9058
  }
};
var berat = {
  "PS": {
    vota: 42897
  },
  "PD": {
    vota: 19022
  },
  "LSI": {
    vota: 21549
  }
};
var korce = {
  "PS": {
    vota: 63584
  },
  "PD": {
    vota: 47061
  },
  "LSI": {
    vota: 14416
  }
};
var vlore = {
  "PS": {
    vota: 56481
  },
  "PD": {
    vota: 21475
  },
  "LSI": {
    vota: 10552
  },
  "PDIU": {
    vota: 6782
  },
  "PBDNj": {
    vota: 6323
  }
};
var gjirokaster = {
  "PS": {
    vota: 25148
  },
  "PD": {
    vota: 13509
  },
  "LSI": {
    vota: 11534
  },
  "PR": {
    vota: 2642
  },
  "PBDNj": {
    vota: 1872
  }
};
// var total = {
//   "PS": {
//     vota: 713407
//   },
//   "PD": {
//     vota: 528373
//   },
//   "LSI": {
//     vota: 180470
//   },
//   "PR": {
//     vota: 52168
//   },
//   "PDIU": {
//     vota: 44957
//   },
//   "PBDNJ": {
//     vota: 14722
//   },
//   "PDK": {
//     vota: 13288
//   }
// };

var data = {};
data.shkoder = {};
data.shkoder.mandate = 11;
data.shkoder.rezultate = llogaritDeputetet(shkoder, data.shkoder.mandate);
data.kukes = {};
data.kukes.mandate = 3;
data.kukes.rezultate = llogaritDeputetet(kukes, data.kukes.mandate);
data.diber = {};
data.diber.mandate = 6;
data.diber.rezultate = llogaritDeputetet(diber, data.diber.mandate);
data.lezhe = {};
data.lezhe.mandate = 7;
data.lezhe.rezultate = llogaritDeputetet(lezhe, data.lezhe.mandate);
data.tirane = {};
data.tirane.mandate = 34;
data.tirane.rezultate = llogaritDeputetet(tirane, data.tirane.mandate);
data.durres = {};
data.durres.mandate = 14;
data.durres.rezultate = llogaritDeputetet(durres, data.durres.mandate);
data.elbasan = {};
data.elbasan.mandate = 14;
data.elbasan.rezultate = llogaritDeputetet(elbasan, data.elbasan.mandate);
data.fier = {};
data.fier.mandate = 16;
data.fier.rezultate = llogaritDeputetet(fier, data.fier.mandate);
data.berat = {};
data.berat.mandate = 7;
data.berat.rezultate = llogaritDeputetet(berat, data.berat.mandate);
data.vlore = {};
data.vlore.mandate = 12;
data.vlore.rezultate = llogaritDeputetet(vlore, data.vlore.mandate);
data.korce = {};
data.korce.mandate = 11;
data.korce.rezultate = llogaritDeputetet(korce, data.korce.mandate);
data.gjirokaster = {};
data.gjirokaster.mandate = 5;
data.gjirokaster.rezultate = llogaritDeputetet(gjirokaster, data.gjirokaster.mandate);

for( var city in data ){
  for( parti in data[city].rezultate ){
    data[city].rezultate[parti].votaFillestare = data[city].rezultate[parti].vota;
  }
}

// var d = {};
// var test = {
//   "A": {
//     vota: 63584
//   },
//   "B": {
//     vota: 47061
//   },
//   "C": {
//     vota: 14416
//   }
// };

// data.push(shkoder);
// data.push(kukes);
// data.push(diber);
// data.push(lezhe);
// data.push(tirane);
// data.push(durres);
// data.push(elbasan);
// data.push(fier);
// data.push(berat);
// data.push(vlore);
// data.push(korce);
// data.push(gjirokaster);
function llogaritDeputetet( votat, nrMandateve ){
  // ruajme një kopje të objektit votat, për ta perdorur për llogaritje
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
  return votat;
}
