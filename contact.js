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


        //FILM 1
            document.getElementById("img1").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[0].poster_path +"'></img>";
            document.getElementById("titre1").innerHTML = data.results[0].original_title;
            document.getElementById("note1").innerHTML = "note : "+data.results[0].vote_average;
            document.getElementById("votes1").innerHTML ="nombre de votes : " +data.results[0].vote_count;
            document.getElementById("date1").innerHTML = "date de sortie : "+ data.results[0].release_date;
            document.getElementById("over1").innerHTML = "Synopsis : " + data.results[0].overview;

      //FILM 2


            document.getElementById("img2").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[1].poster_path +"'></img>";
            document.getElementById("titre2").innerHTML = data.results[1].original_title;
            document.getElementById("note2").innerHTML = "note : "+data.results[1].vote_average;
            document.getElementById("votes2").innerHTML ="nombre de votes : " +data.results[1].vote_count;
            document.getElementById("date2").innerHTML = "date de sortie : "+ data.results[1].release_date;
            document.getElementById("over2").innerHTML = "Synopsis : " + data.results[1].overview;

      //FILM 3


            document.getElementById("img3").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[2].poster_path +"'></img>";
            document.getElementById("titre3").innerHTML = data.results[2].original_title;
            document.getElementById("note3").innerHTML = "note : "+data.results[2].vote_average;
            document.getElementById("votes3").innerHTML ="nombre de votes : " +data.results[2].vote_count;
            document.getElementById("date3").innerHTML = "date de sortie : "+ data.results[2].release_date;
            document.getElementById("over3").innerHTML = "Synopsis : " + data.results[2].overview;

      //FILM 4

            document.getElementById("img4").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[3].poster_path +"'></img>";
            document.getElementById("titre4").innerHTML = data.results[3].original_title;
            document.getElementById("note4").innerHTML = "note : "+data.results[3].vote_average;
            document.getElementById("votes4").innerHTML ="nombre de votes : " +data.results[3].vote_count;
            document.getElementById("date4").innerHTML = "date de sortie : "+ data.results[3].release_date;
            document.getElementById("over4").innerHTML = "Synopsis : " + data.results[3].overview;


      //FILM 5
            document.getElementById("img5").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[4].poster_path +"'></img>";
            document.getElementById("titre5").innerHTML = data.results[4].original_title;
            document.getElementById("note5").innerHTML = "note : "+data.results[4].vote_average;
            document.getElementById("votes5").innerHTML ="nombre de votes : " +data.results[4].vote_count;
            document.getElementById("date5").innerHTML = "date de sortie : "+ data.results[4].release_date;
            document.getElementById("over5").innerHTML = "Synopsis : " + data.results[4].overview;

      //FILM 6

            document.getElementById("img6").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.results[5].poster_path +"'></img>";
            document.getElementById("titre6").innerHTML = data.results[5].original_title;
            document.getElementById("note6").innerHTML = "note : "+data.results[5].vote_average;
            document.getElementById("votes6").innerHTML ="nombre de votes : " +data.results[5].vote_count;
            document.getElementById("date6").innerHTML = "date de sortie : "+ data.results[5].release_date;
            document.getElementById("over6").innerHTML = "Synopsis : " + data.results[5].overview;









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
















});
