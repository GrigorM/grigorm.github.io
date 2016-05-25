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
    <a href="{{url}}" data-toggle="modal" data-target=".bs-example-modal-sm" data-content="/img/gifs/{{localurl}}" onclick='$(".modal-content img").attr("src", $(this).data("content"));'>  
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
    localurl: "9.gif",
    description: "Rotating rects",
    thumbnail: "rects101.png",
    date: "9 maj",
    code: "http://pastebin.com/NYzZVtum"
  },
  {
    url: "https://media.giphy.com/media/3o6Ei16WlqqiXfyc7u/giphy.gif",
    localurl: "10.gif",
    description: "Rects and circles",
    thumbnail: "rects-and-circles.png",
    date: "10 maj",
    code: "http://pastebin.com/uxYcDBzT"
  },
  {
    url: "https://media.giphy.com/media/l0K45Xgyn16uryXde/giphy.gif",
    localurl: "11.gif",
    description: "Hexagonal waves",
    thumbnail: "hex-waves.png",
    date: "11 maj",
    code: "http://pastebin.com/FwQ6P6MT"
  },
  {
    url: "https://media.giphy.com/media/xT4uQnR1OnSp7HXJkY/giphy.gif",
    localurl: "12.gif",
    description: "Concentric hexs",
    thumbnail: "hex.png",
    date: "12 maj",
    code: "http://pastebin.com/8wE6PBZE"
  },
  {
    url: "https://media.giphy.com/media/xT4uQvBc2tt9JmfNtK/giphy.gif",
    localurl: "13.gif",
    description: "Flying carpet",
    thumbnail: "carpet.png",
    date: "13 maj",
    code: "http://pastebin.com/1nBp8gtK"
  },
  {
    url: "https://media.giphy.com/media/l396OkgEz1iJmbhCw/giphy.gif",
    localurl: "14.gif",
    description: "Waves ",
    thumbnail: "concentric-waves.png",
    date: "14 maj",
    code: "http://pastebin.com/hDSAC9M1"
  },
  {
    url: "https://media.giphy.com/media/l0K4gDkvZ2JYXKew8/giphy.gif",
    localurl: "15.gif",
    description: "Carpet 2",
    thumbnail: "tapeti-2.png",
    date: "15 maj",
    code: "http://pastebin.com/CnKPwZp9"
  },
  {
    url: "https://media.giphy.com/media/3o6EhKtkMkAZL1IHy8/giphy.gif",
    localurl: "16.gif",
    description: "Grid",
    thumbnail: "grid.png",
    date: "16 maj",
    code: "http://pastebin.com/v9NuHiM8"
  },
  {
    url: "https://media.giphy.com/media/26vUtMKae1elzGAWA/giphy.gif",
    localurl: "17.gif",
    description: "Triangles",
    thumbnail: "test6.png",
    date: "17 maj",
    code: "http://pastebin.com/m4MKuA77"
  },
  {
    url: "https://media.giphy.com/media/3o6EhE61Z7Vzi9soAU/giphy.gif",
    localurl: "18.gif",
    description: "Thjesht dhe bukur",
    thumbnail: "thjesht.png",
    date: "18 maj",
    code: "http://pastebin.com/acFikDs7"
  },
  {
    url: "https://media.giphy.com/media/l396TS4WOsPqRyGvm/giphy.gif",
    localurl: "19.gif",
    description: "Hex grid",
    thumbnail: "hex-grid.png",
    date: "19 maj",
    code: "http://pastebin.com/LaA0XW4P"
  },
  {
    url: "https://media.giphy.com/media/l41YprL1N4hXrO2VG/giphy.gif",
    localurl: "20.gif",
    description: "Hex rotations",
    thumbnail: "hex-rotations.png",
    date: "20 maj",
    code: "http://pastebin.com/pj8c4zck"
  },
  {
    url: "https://media.giphy.com/media/3o6EhJ4mutR2PUmmhq/giphy.gif",
    localurl: "21.gif",
    description: "Saturday morning randomness",
    thumbnail: "smr.png",
    date: "21 maj",
    code: "http://pastebin.com/kUuxJde9"
  },
  {
    url: "https://media.giphy.com/media/3o6EhUD41sTYYXaRjO/giphy.gif",
    localurl: "22.gif",
    description: "Stars and rhombi",
    thumbnail: "stars-and-rhombi.png",
    date: "22 maj",
    code: "http://pastebin.com/GeBzmpcF"
  },
  {
    url: "https://media.giphy.com/media/3o7qDSUXrOg7Mz3JD2/giphy.gif",
    localurl: "23.gif",
    description: "Arcs rotation",
    thumbnail: "arcs-rotation.png",
    date: "23 maj",
    code: "http://pastebin.com/Ppit3yJU"
  },
  {
    url: "https://media.giphy.com/media/xT4uQ7RIeCskCwTlK0/giphy.gif",
    localurl: "24.gif",
    description: "Particles with rotating motion",
    thumbnail: "part-rot.png",
    date: "24 maj",
    code: "http://pastebin.com/RQvWjdby"
  }     


] };

var source = $("#gif-list").html();
var template = Handlebars.compile(source);
var html = template(data);
setTimeout(function(){
  $("#lista").html(html);  
}, 10)


$("#lista a").click(function(){
  console.log($(this).data('content'));

});
</script>

<div class="row" id="lista" style="margin-bottom: 50px;">

</div>

<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <img src="" alt="#"/>
    </div>
  </div>
</div>

Sa per saktesim, ne anglisht lexohet "xhif", por per sa kohe flasim shqip do ta lexojme ashtu sic shkruhet, pra gif.
