$(document).ready(function() {
top6();
ajout_recent();


  /* --------------------------- */
  /* --------------------------- */
  /*    FONCTION RECHERCHE       */
  /* --------------------------- */
  /* --------------------------- */

  $(".button").click(function(event){
    event.preventDefault();

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
          document.getElementById("note").innerHTML = data.vote_average;
          document.getElementById("votes").innerHTML = data.vote_count;

          document.getElementById("date").innerHTML = data.release_date;
          document.getElementById("over").innerHTML = data.overview;
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





/* --------------------------- */
/* --------------------------- */
/* FONCTION TOP 6 DES FILMS LES PLUS POPULAIRES */
/* --------------------------- */
/* --------------------------- */
function top6() {
  $.ajax({

    dataType: "json",
    url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84298ce1f4116edf6c28f5353209f4a4",
    jsonpCallback: "callback",

    success: function (data) {
        // Je charge les données dans box
        console.log(data);

        //AFFICHAGE DES 6 FILMS
              var z;
              for(z=0;z<7;z++){
                  $("#lien"+(z+1).toString()).attr("href", "film.html?id="+data.results[z].id);
                  document.getElementById("img"+((z+1).toString())).innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[z].poster_path +"'></img>";
                  document.getElementById("titre"+((z+1).toString())).innerHTML = data.results[z].original_title;
                  document.getElementById("date"+((z+1).toString())).innerHTML = data.results[z].release_date;
                  document.getElementById("note"+((z+1).toString())).innerHTML = data.results[z].vote_average;

                }
    },
    error: function(data) {
        // J'affiche un message d'erreur
        alert("Plus de films suivants");
        console.log(data);
    }

  });
}


$("button#boutontop6").click(function(event){

  top6();

});

function ajout_recent() {
  $.ajax({

    dataType: "json",
    url: "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=84298ce1f4116edf6c28f5353209f4a4",
    jsonpCallback: "callback",

    success: function (data) {
        // Je charge les données dans box
        console.log(data);


        //FILM 1
            document.getElementById("imgajoutrecent1").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[0].poster_path +"'></img>";
            document.getElementById("titreajoutrecent1").innerHTML = data.results[0].original_title;
            document.getElementById("dateajoutrecent1").innerHTML = data.results[0].release_date;

      //FILM 2


            document.getElementById("imgajoutrecent2").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[1].poster_path +"'></img>";
            document.getElementById("titreajoutrecent2").innerHTML = data.results[1].original_title;
            document.getElementById("dateajoutrecent2").innerHTML = data.results[1].release_date;

      //FILM 3


            document.getElementById("imgajoutrecent3").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[2].poster_path +"'></img>";
            document.getElementById("titreajoutrecent3").innerHTML = data.results[2].original_title;
            document.getElementById("dateajoutrecent3").innerHTML = data.results[2].release_date;

    },
    error: function(data) {
        // J'affiche un message d'erreur
        alert("désolé pas d'autres films");
        console.log(data);
    }

  });
};




});
