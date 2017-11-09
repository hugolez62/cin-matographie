
<?php $_GET['id']?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <link rel="stylesheet" media="screen" type="text/css" title="Exemple" href="css/style.css" />
</head>

<body>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  <script>
	$(document).ready(function() {

		var id = <?= $_GET['id'] ?>;
		$.ajax({

		  dataType: "json",
		  url: "https://api.themoviedb.org/3/movie/"+id+"?api_key=84298ce1f4116edf6c28f5353209f4a4",
		  jsonpCallback: "callback",

		  success: function (data) {
		    // Je charge les données dans box
		    console.log(data);

		    document.getElementById("img").innerHTML = "<img src='https://image.tmdb.org/t/p/w500/"+data.poster_path +"'/>";
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
	});
  </script>

  <nav id="menu" class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <img id="logo" src="img/cinemallo.png" class="col-lg-2 rounded mx-auto d-block" alt="Responsive image">

    <div class="col-lg-8 collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a href="index.php"><button type="button" class="btn btn-danger">Accueil</button></a>
        </li>
        <li class="nav-item">
          <a href="film.php"><button type="button" class="btn btn-warning">Films</button></a>
        </li>
        <li class="nav-item">
          <a href="about.html"><button type="button" class="btn btn-success">A propos</button></a>
        </li>
      </ul>
      <form class="col-lg-6 form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

<section id="film">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4">

        <span id="img"></span>

      </div>

      <div class="col-lg-8 col-md-8">

        <p><b>Titre du film :</b> <span id="titre"></span></br>
        <b>Date de sortie :</b> <span id="date"></span></br>
        <b>Note :</b> <span id="note"></span></br>
        <b>Votes :</b> <span id="votes"></span></br>
        <b>Résumé :</b> <span id="over"></span></br>
      </p>


      </div>


      </div>
    </div>
</section>








  <footer>
    <p><a href="mentionslegales.html">Mentions légales</a>|<a href="#">Copyright</a>|<a href="#">Contact</a></p>
  </footer>

</body>

</html>
