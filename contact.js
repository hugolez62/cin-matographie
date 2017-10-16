$(document).ready(function() {
  //Une fois que le DOM est chargé, on peut exécuter des actions avec jQuery
  //Ecrivez tout votre code dans cette fonction
  $(".button").click(function(event){
    event.preventDefault();

    var v = document.getElementById("ville").value;

      $.ajax({

        dataType: "json",
        url: "https://api.themoviedb.org/3/search/movie/?api_key=84298ce1f4116edf6c28f5353209f4a4&query="+v+"",
        jsonpCallback: "callback",

        success: function (data) {
            // Je charge les données dans box
            alert('bravo');
            console.log(data);
            document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[0].poster_path +"'></img>";
            document.getElementById("villeAffich").innerHTML = data.results[0].original_title;
            document.getElementById("date").innerHTML = data.results[0].release_date;

        },
        error: function(data) {
            // J'affiche un message d'erreur
            alert('pas bravo');
            console.log(data);
        }

      });
});





});
