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
data.shkodër = {};
data.shkodër.mandate = 11;
data.shkodër.rezultate = llogaritDeputetet(shkoder, data.shkodër.mandate);
data.kukës = {};
data.kukës.mandate = 3;
data.kukës.rezultate = llogaritDeputetet(kukes, data.kukës.mandate);
data.dibër = {};
data.dibër.mandate = 6;
data.dibër.rezultate = llogaritDeputetet(diber, data.dibër.mandate);
data.lezhë = {};
data.lezhë.mandate = 7;
data.lezhë.rezultate = llogaritDeputetet(lezhe, data.lezhë.mandate);
data.tiranë = {};
data.tiranë.mandate = 34;
data.tiranë.rezultate = llogaritDeputetet(tirane, data.tiranë.mandate);
data.durrës = {};
data.durrës.mandate = 14;
data.durrës.rezultate = llogaritDeputetet(durres, data.durrës.mandate);
data.elbasan = {};
data.elbasan.mandate = 14;
data.elbasan.rezultate = llogaritDeputetet(elbasan, data.elbasan.mandate);
data.fier = {};
data.fier.mandate = 16;
data.fier.rezultate = llogaritDeputetet(fier, data.fier.mandate);
data.berat = {};
data.berat.mandate = 7;
data.berat.rezultate = llogaritDeputetet(berat, data.berat.mandate);
data.vlorë = {};
data.vlorë.mandate = 12;
data.vlorë.rezultate = llogaritDeputetet(vlore, data.vlorë.mandate);
data.korçë = {};
data.korçë.mandate = 11;
data.korçë.rezultate = llogaritDeputetet(korce, data.korçë.mandate);
data.gjirokastër = {};
data.gjirokastër.mandate = 5;
data.gjirokastër.rezultate = llogaritDeputetet(gjirokaster, data.gjirokastër.mandate);

for( var city in data ){
  for( parti in data[city].rezultate ){
    data[city].rezultate[parti].votaFillestare = data[city].rezultate[parti].vota;
  }
}
