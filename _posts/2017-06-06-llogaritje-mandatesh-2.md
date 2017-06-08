---
category: essay
layout: post
title: "Aplikacion interaktiv për llogaritjen e mandateve parlamentare në bazë të votave"
excerpt: "Çdo kotësi meriton një 'aplikacion interaktiv'"
lang: sq
image: /img/Harta-e-qarqeve.jpg
---

Në vazhdim të [postimit të mëparshëm](https://grigorm.github.io/essay/2017/05/21/llogartije-mandatesh/){:target="_blank_"} rreth shpërndarjes së mundshme të mandateve ne zgjedhjet e 2017 bazuar në votat e 2013 ndërtova një ndërfaqe interaktive nëpërmjet të cilës mund të llogaritet shpërndarja e re e mandateve duke u hequr dhe shtuar vota secilës parti. Ndërfaqja tregon diferencën nga votat e marra në 2013, dhe përditëson numrin e mandateve për qark dhe atë total pas çdo ndryshimi votash. Formula llogaritëse është e njejta si në postimin e parë, por me një artificë të shtuar për qarkun e Tiranës, ku për shkak të numrit të madh të mandateve formula D'Hondt të jep mandat edhe pa kaluar pragun e 3%. Prandaj shtova një kufi prej 14000 votash, që është 3% i një totali hipotetik prej 466667 votash, pak më shumë se votat totale të 2013 në Tiranë që ishin 457668, duke marrë parasysh se me rritjen e popullsisë ka gjasa që të rritet dhe numri i votuesve (sigurisht, në mungesë të një bojkoti masiv, që gjithmonë trumpetohet por asnjëherë nuk del pertej parashikimeve; shqiptarët déjà votojnë vetëm 50%).

Nga ana teknike, aplikacioni është ndërtuar me angularjs, që e bën lidhjen e dyanshme të të dhënave me vlerat e elementeve html dhe përditësimin e tyre veçanërisht të thjeshtë. Kodi që gjeneron ndërfaqet për çdo qytet është:

{% raw %}
``` html
<div ng-repeat="(city, info) in data">
  <h3 class="city">{{ city }}</h3>
  <div ng-repeat="(parti, vota) in info.rezultate" class="col-sm-12 party-row">
      <div class="col-sm-1 partia">{{parti}}:</div>
      <input class="col-sm-2" type="number" step="100" min="0" ng-model="vota.vota" ng-change="llogaritDeputetet(info.rezultate, info.mandate)"/>
      <div class="col-sm-offset-1 col-sm-6">
        <div class="diferenca" ng-class="{ 'green': (vota.vota - vota.votaFillestare > 0), 'red': (vota.vota - vota.votaFillestare < 0) }">Diferenca: <span ng-if="vota.vota - vota.votaFillestare > 0">+</span><span>{{ vota.vota - vota.votaFillestare }}</span></div>
        <span>{{ vota.mandate }} mandat<span ng-if="vota.mandate != 1">e</span></span>
      </div>
  </div>
  <button type="button" class="add-party" ng-click="addParty(city)">Shto parti</button>
  <hr>
</div>
```
{% endraw %}

Pas çdo ndryshimi vlerash rillogariten mandatet për atë qytet dhe nderfaqja përditësohet automatikisht.  

Aplikacioni mund të aksesohet në [këtë lidhje](https://grigorm.github.io/projects/llogarites-mandatesh-angular/){:target="_blank_"} ose duke klikuar në imazhin më poshtë. Hape, luaj, dhe ndjehu si në shtabin qendror të një partie :p

[![llogaritës mandatesh](/img/mandate-2.png)](https://grigorm.github.io/projects/llogarites-mandatesh-angular/)

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
