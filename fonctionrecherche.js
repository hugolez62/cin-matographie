$(document).ready(function() {


$("#research").keydown(function(event){

    var v = document.getElementById("research").value;

      $.ajax({

        dataType: "json",
        url: "http://api.themoviedb.org/3/search/movie?api_key=84298ce1f4116edf6c28f5353209f4a4&query="+v+"",
        jsonpCallback: "callback",
        success: function (data) {
            // Je charge les données dans box
            console.log(data);
            document.getElementById("result1").innerHTML = data.results[0].original_title;
            $("a#resultat").attr("href", "film.php?id="+data.results[0].id);
        }
      });
});

});
