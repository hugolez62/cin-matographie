$(document).ready(function() {



  /* --------------------------- */
  /* --------------------------- */
  /*    FONCTION RECHERCHE       */
  /* --------------------------- */
  /* --------------------------- */

  $(".button").click(function(event){
    event.preventDefault();
    document.getElementById("suivant").style.visibility = "visible";
    document.getElementById("precedent").style.visibility = "visible";

    var v = document.getElementById("ville").value;

      $.ajax({

        dataType: "json",
        url: "https://api.themoviedb.org/3/search/movie/?api_key=84298ce1f4116edf6c28f5353209f4a4&query="+v+"",
        jsonpCallback: "callback",

        success: function (data) {
            // Je charge les données dans box
            console.log(data);

            if(data.results[0] != null ){

            document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[0].poster_path +"'></img>";
            document.getElementById("titre").innerHTML = data.results[0].original_title;
            document.getElementById("note").innerHTML = "note : "+data.results[0].vote_average;
            document.getElementById("votes").innerHTML ="nombre de votes : " +data.results[0].vote_count;

            document.getElementById("date").innerHTML = "date de sortie : "+ data.results[0].release_date;
            document.getElementById("over").innerHTML = "Synopsis : " + data.results[0].overview;
            document.getElementById("idfilm").innerHTML = data.results[0].id;
            }
            else{
              alert("Aucun film trouvé");
            }

        },
        error: function(data) {
            // J'affiche un message d'erreur
            alert("Nom de film non valide");
            console.log(data);
        }

      });
});



/* --------------------------- */
/* --------------------------- */
/* FONCTION BOUTON PRECEDENT   */
/* --------------------------- */
/* --------------------------- */
$("button#precedent").click(function(event){
  event.preventDefault();

  var v = parseInt($("span#idfilm").text()) - 1;

    $.ajax({

      dataType: "json",
      url: "https://api.themoviedb.org/3/movie/"+v+"?api_key=84298ce1f4116edf6c28f5353209f4a4",
      jsonpCallback: "callback",

      success: function (data) {
          // Je charge les données dans box
          console.log(data);

          if(data != null ){
          $("button#suivant").fadeIn();

          document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.poster_path +"'></img>";
          document.getElementById("titre").innerHTML = data.original_title;
          document.getElementById("note").innerHTML = "note : "+data.vote_average;
          document.getElementById("votes").innerHTML ="nombre de votes : " +data.vote_count;

          document.getElementById("date").innerHTML = "date de sortie : "+ data.release_date;
          document.getElementById("over").innerHTML = "Synopsis : " + data.overview;
          document.getElementById("idfilm").innerHTML = data.id;

          }
          else{
            alert("Aucun film trouvé");
          }

      },
      error: function(data) {
          // J'affiche un message d'erreur
          $("button#precedent").fadeOut();
          alert("Plus de films précédents");
          console.log(data);
      }

    });

});




/* --------------------------- */
/* --------------------------- */
/* FONCTION BOUTON SUIVANT */
/* --------------------------- */
/* --------------------------- */
$("button#suivant").click(function(event){
  event.preventDefault();

  var v = parseInt($("span#idfilm").text()) + 1;

    $.ajax({

      dataType: "json",
      url: "https://api.themoviedb.org/3/movie/"+v+"?api_key=84298ce1f4116edf6c28f5353209f4a4",
      jsonpCallback: "callback",

      success: function (data) {
          // Je charge les données dans box
          console.log(data);

          if(data != null ){
          $("button#precedent").fadeIn();
          document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.poster_path +"'></img>";
          document.getElementById("titre").innerHTML = data.original_title;
          document.getElementById("note").innerHTML = "note : "+data.vote_average;
          document.getElementById("votes").innerHTML ="nombre de votes : " +data.vote_count;

          document.getElementById("date").innerHTML = "date de sortie : "+ data.release_date;
          document.getElementById("over").innerHTML = "Synopsis : " + data.overview;
          document.getElementById("idfilm").innerHTML = data.id;
          }
          else{
            alert("Aucun film trouvé");
          }

      },
      error: function(data) {
          // J'affiche un message d'erreur
          $("button#suivant").fadeOut();
          alert("Plus de films suivants");
          console.log(data);
      }

    });

});





});
