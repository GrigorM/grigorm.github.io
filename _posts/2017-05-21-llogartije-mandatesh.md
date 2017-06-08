---
category: essay
layout: post
title: "Projektim i mandateve për zgjedhjet e 2017 sipas votave të 2013"
excerpt: "Llogartije joqenësore të numrit te hajdutëve për parti që pritet të kemi në parlament"
lang: sq
image: /img/Harta-e-qarqeve.jpg
---

Unë jam i bindjes që elektoralizmi i demokracive borgjeze është një farsë, proceset zgjedhore nuk ndryshojnë asgjë thelbësore, madje përkundrazi, duke dhënë iluzionin e ndryshimit, ato kthehen në pengesë ndaj formimit të një politike emancipuese, pasi ezaurojnë energjitë e qytetarëve me gjithfarësoj shfaqjesh dhe përrallash, për tu lënë në fund vetëm shijen e hidhur të zhgënjimit.
Por ka diçka në keto sistemet zgjedhore, grafikët me rezultate, hartat, ndarja e mandateve që gjithmonë me është dukur afashinante. Mbase është raporti im me numrat dhe vizualizimet që ma bën të gjithën të duket si lojë. Ndaj shfrytëzova privilegjin tim mikroborgjez të fundjaves pushim për të shkruar këtë blogpost dhe bërë ca llogaritje që mbase nuk i hyjnë në punë njeriu, por mund të japin një panoramë të rezultatit të zgjedhjeve të ardhshme parlamentare.

### Sistemi zgjedhor në Shqipëri

Ne Shqipëri zbatohet një sistem zgjedhor i quajtur proporcional rajonal. Partitë ose koalicionet masin forcat e tyre në 12 qarqe të vendit, ku secili qark ka një numër të caktuar deputetësh në bazë të popullsisë. Deputetët shpërndahen ndërmejt partive ose koalicioneve përmes [formules D'Hondt](https://en.wikipedia.org/wiki/D%27Hondt_method){:target="_blank_"}, me një prag 3% për partitë dhe 5% për koalicionet. Sistemi është ndërtuar në mënyrë të tillë që të favorizojë partitë dhe koalicionet e mëdha, ku ndarja në qarqe dhe formula e shpërndarjes së mandateve bëjnë që shumë vota për partitë e vogla të shkojnë dëm. Kjo vihet re sidomos në qarqet me numër të vogel deputetësh, ku partitë me pak vota jo vetëm që nuk arrijnë të marrin mandate, por votat e tyre në keto qarqe jane praktikisht të pavlefshme. Kjo nxit një organizim rreth grupimeve të medha dhe dekurajon partitë e vogla nga të dalurit vetëm në zgjedhje.

### Metoda D'Hondt

Metoda D'Hondt bën alokimin e mandateve partive sipas numrit të votave të marra. Shpërndarja fillon duke i dhënë mandatin e parë partisë me më shumë vota. Pasi një parti merr një mandat, numri total i votave të saj pjestohet me numrin e mandateve që ka marrë deri në këtë çast plus 1, dhe rishikohet se cila parti ka tani numrin më të madh të votave për të marre mandatin e rradhës. Formula përsëritet deri sa të shpërndahen të gjitha mandatet. Për një shembull konkret ndiqni [lidhjen në Wikipedia](https://en.wikipedia.org/wiki/D%27Hondt_method#Allocation){:target="_blank_"}.

### Projektimi i mandateve sipas votave të 2013

Për mos të bërë llogaritje manuale të deputeteve që i takojne cdo partie vendosa të shkruaj një funksion që zbaton metodën D'Hondt dhe shpërndan një numër të caktuar mandatesh sipas votave:
``` javascript
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
    console.log(parti+": "+votat[parti].mandate+" mandate");
  }
  return votat;
}
```
Funksioni merr 2 argumenta:
1. votat - një objekt i formes
``` javascript
{
  "Partia 1": {
    vota: 37984
  },
  "Partia 2": {
    vota: 45802
  },
  "Partia 3": {
    vota: 12772
  }
}
```
2. nrMandateve - numri i mandateve për atë qark

dhe kthen objektin e kaluar, të pasuruar me fusha për numrin e mandateve në formën:
``` javascript
{
  "Partia 1": {
    vota: 37984,
    mandate: 3
  },
  "Partia 2": {
    vota: 45802,
    mandate: 3
  },
  "Partia 3": {
    vota: 12772,
    mandate: 1
  }
}
```
Tani që kemi funksionin tonë mund ta perdorim për të llogaritur deputetët që do merrte secila parti me votat e vitit 2013 sikur të hynte e vetme në zgjedhje, ngaqë këtë vit nuk do kemi koalicione parazgjedhore. Manualisht nxorra nga [te dhënat e KQZ për cdo qark](http://cec.org.al/sq-al/PE2013-Results) numrin e votave për partitë që kane arritur të kalojnë pragun elektoral (proces që mund të lehtësohej shumë nëse KQZ do ofronte tabela të filtrueshme me rezultate dhe jo thjesht pdf-ra. Ndërkohë [vota.al](http://vota.al){:target="_blank_"} ka një organizim shumë të keq informacioni, në kufi të të padobishmes). Duke ekzekutuar funksionin për cdo qark, [me numrat e mandateve të perditesuar për 2017](https://grigorm.github.io/img/Harta-e-qarqeve.jpg){:target="_blank_"}, marrim këto rezultate:

Shkodër: 11 mandate    
PD: 6, PS: 4, LSI, 1

Kukës: 3 mandate   
PD: 2, PS: 1

Dibër: 6 mandate   
PD: 3, PS: 2, LSI: 1

Lezhë: 7 mandate   
PD: 3, PS: 3, LSI: 1

Tiranë: 34 mandate   
PS: 18, PD: 13, LSI: 3

Durrës: 14 mandate   
PS: 6, PD: 6, LSI: 1, PR: 1

Elbasan: 14 mandate   
PS: 8, PD: 4, LSI: 1, PDIU: 1

Fier: 16 mandate   
PS: 9, PD: 5, LSI: 2

Berat: 7 mandate   
PS: 4, LSI: 2, PD: 1

Korçë: 11 mandate   
PS: 6, PD: 4, LSI: 1

Vlorë: 12 mandate   
PS: 8, PD: 3, LSI: 1

Gjirokastër: 5 mandate   
PS: 3, PD: 1, LSI: 1

Në total: 140 mandate   
PS: 72, PD: 51, LSI: 15, PR: 1, PDIU: 1

Pra nëse partitë marrin të njejtin numër votash si në 2013 (pak gjasa ka të ndodhe, por mund të merret si pikë referimi), PS fiton dhe krijon e vetme maxhorancën në parlament. Gjithashtu, LSI duket se nuk do ndikohej shumë nga të dalurit vetëm në zgjedhje, pasi edhe e vetme ajo arrin të marre 15 deputetë, vetëm 1 më pak se sa në koalicion me PS. Mesa duket ajo ka tejkaluar pengesat që kodi zgjedhor i vë partive të vogla, pasi me 180 mijë votues në total ajo nuk është më një parti e vogel dhe arrin të marre deputete në cdo qark, pervec Kukesit. Madje PS+LSI marrin më shumë mandate duke garuar veç e veç (72+15=87) nga sa moren zgjedhjet e fundit (83). Nga ana tjetër PD mund të shpresojë të marre një numër më të madh votash duke mos regjistruar partitë e tjera aleate në zgjedhje, por duke futur kryetarët e tyre në listën e saj, me qëllim grumbullimin e votave të tyre nën siglën e saj. Por çfarëdo që të ndodhë, në fund gjithçka do shkojë keq, qeveria do sakrifikojë mirëqënien tonë për interesa të caktuara, dhe populli do i heqë në kurriz të gjitha.

Shënim: rezultatet e ndarjes së mandateve mund të riprodhohen në browserin tuaj. Shtyp CTRL+SHIFT+J për të hapur consolën. Rezultatet e partive që kalojnë pragun për çdo qark janë ruajtur si variabla me emrin e qarkut (tiranë, durrës etj). Për të parë ndarjen shkruaj në console   
llogaritDeputetet( emri-i-qarkut, numri-i-mandateve )  
p.sh. llogaritDeputetet( tirane, 34 ) dhe shtyp enter.

<script>
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
var total = {
  "PS": {
    vota: 713407
  },
  "PD": {
    vota: 528373
  },
  "LSI": {
    vota: 180470
  },
  "PR": {
    vota: 52168
  },
  "PDIU": {
    vota: 44957
  },
  "PBDNJ": {
    vota: 14722
  },
  "PDK": {
    vota: 13288
  }
};
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
    console.log(parti+": "+votat[parti].mandate+" mandate");
  }
  return votat;
}
</script>

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
