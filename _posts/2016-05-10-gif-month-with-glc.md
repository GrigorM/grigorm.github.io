---
category: gif
layout: post
title: "Nje muaj plot me .gif-e"
excerpt: "Kete muaj vendosa t'i rikthehem gifloopcoder..."
lang: sq
image: /img/gif-may.png
---

Këtë muaj vendosa t'i rikthehem [gifloopcoder](http://gifloopcoder.com){:target="_blank_"}, ose më saktë të mësoj seriozisht ta përdor (kupto: seriozisht siç mund të marrësh seriozisht një lojë). Gifloopcoder është një aplikacion i bazuar në javascript për krijimin e gifeve të animuara. Gjithmonë më kanë tërhequr përdorimet jokonvencionale të kodit për të krijuar gjëra pa ndonje dobi të veçantë, dhe gifet e përmbushin mjaft mirë këtë kriter. Ndaj për cdo ditë në vazhdim të muajit maj do postoj nje gif të krijuar me gifloopcoder, të shoqeruar me kodin burim. Pa e zgjatur shumë, ja ku është lista:

<script id="gif-list" type="text/x-handlebars-template">
  {% raw %}
  {{#gifs}}
  <div class="col-sm-3 col-xs-6">
    <a href="{{url}}">
      <img src="/img/{{thumbnail}}" alt="{{description}}" style="width: 100%;" hspace="8" vspace="8" align="center" border="2" />
    </a>
    <div class="text-center">{{date}}, <a href="{{code}}" target="_blank_">kodi burim</a></div>
  </div>
  {{/gifs}}
  {% endraw %}
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>

<script>
var data = { gifs : [
  {
    url: "https://media.giphy.com/media/l396NsQTsbuU9ireM/giphy.gif",
    description: "Rotating rects",
    thumbnail: "rects101.png",
    date: "9 maj",
    code: "http://pastebin.com/NYzZVtum"
  },
  {
    url: "https://media.giphy.com/media/3o6Ei16WlqqiXfyc7u/giphy.gif",
    description: "Rects and circles",
    thumbnail: "rects-and-circles.png",
    date: "10 maj",
    code: "http://pastebin.com/uxYcDBzT"
  },
  {
    url: "https://media.giphy.com/media/l0K45Xgyn16uryXde/giphy.gif",
    description: "Hexagonal waves",
    thumbnail: "hex-waves.png",
    date: "11 maj",
    code: "http://pastebin.com/FwQ6P6MT"
  },
  {
    url: "https://media.giphy.com/media/xT4uQnR1OnSp7HXJkY/giphy.gif",
    description: "Concentric hexs",
    thumbnail: "hex.png",
    date: "12 maj",
    code: "http://pastebin.com/8wE6PBZE"
  },
  {
    url: "https://media.giphy.com/media/xT4uQvBc2tt9JmfNtK/giphy.gif",
    description: "Flying carpet",
    thumbnail: "carpet.png",
    date: "13 maj",
    code: "http://pastebin.com/1nBp8gtK"
  },
  {
    url: "https://media.giphy.com/media/l396OkgEz1iJmbhCw/giphy.gif",
    description: "Waves ",
    thumbnail: "concentric-waves.png",
    date: "14 maj",
    code: "http://pastebin.com/hDSAC9M1"
  },
  {
    url: "https://media.giphy.com/media/l0K4gDkvZ2JYXKew8/giphy.gif",
    description: "Carpet 2",
    thumbnail: "tapeti-2.png",
    date: "15 maj",
    code: "http://pastebin.com/CnKPwZp9"
  },
  {
    url: "https://media.giphy.com/media/3o6EhKtkMkAZL1IHy8/giphy.gif",
    description: "Grid",
    thumbnail: "grid.png",
    date: "16 maj",
    code: "http://pastebin.com/v9NuHiM8"
  },
  {
    url: "https://media.giphy.com/media/26vUtMKae1elzGAWA/giphy.gif",
    description: "Triangles",
    thumbnail: "test6.png",
    date: "17 maj",
    code: "http://pastebin.com/m4MKuA77"
  },
  {
    url: "https://media.giphy.com/media/3o6EhE61Z7Vzi9soAU/giphy.gif",
    description: "Thjesht dhe bukur",
    thumbnail: "thjesht.png",
    date: "18 maj",
    code: "http://pastebin.com/acFikDs7"
  },
  {
    url: "https://media.giphy.com/media/l396TS4WOsPqRyGvm/giphy.gif",
    description: "Hex grid",
    thumbnail: "hex-grid.jpg",
    date: "19 maj",
    code: "http://pastebin.com/LaA0XW4P"
  }          
] };

var source = $("#gif-list").html();
var template = Handlebars.compile(source);
var html = template(data);
setTimeout(function(){
  $("#lista").html(html);  
}, 10)

</script>

<div class="row" id="lista" style="margin-bottom: 50px;">

</div>


Sa per saktesim, ne anglisht lexohet "xhif", por per sa kohe flasim shqip do ta lexojme ashtu sic shkruhet, pra gif.
