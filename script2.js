$(document).ready(function() {
film_page();
function film_page(){
var v = 346364;
$.ajax({

  dataType: "json",
  url: "https://api.themoviedb.org/3/movie/"+v+"?api_key=84298ce1f4116edf6c28f5353209f4a4",
  jsonpCallback: "callback",

  success: function (data) {
    // Je charge les données dans box
    console.log(data);

    document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.poster_path +"'></img>";
    document.getElementById("titre").innerHTML = data.original_title;
    document.getElementById("note").innerHTML = data.vote_average;
    document.getElementById("votes").innerHTML = data.vote_count;

    document.getElementById("date").innerHTML = data.release_date;
    document.getElementById("over").innerHTML = data.overview;
    document.getElementById("idfilm").innerHTML = data.id;


  },

  error: function(data) {
      // J'affiche un message d'erreur
      console.log(data);
  }

});










}

});
