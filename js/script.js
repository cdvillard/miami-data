document.addEventListener("DOMContentLoaded", function (){
  var URL = "1Ph7X5OlEspwtQrvZnuOomhtioCqMyP1O3WvSyltYnsw";
  Tabletop.init({
    key: URL,
    callback: myData,
    debug: true
  })
});

function myData(data) {
  console.log(data);
};