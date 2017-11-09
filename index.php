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
  <script src="jquery.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  <script src="fonctionrecherche.js"></script>

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
        <input id="research" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
        <div id='resultat'>
        <a id="resultat" href='film.php'><span id='result1'></span></a>
        </div>
    </div>
  </nav>



  <section id="recent">
    <h1>Ajoutés récemment</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien_recent1">
            <div class="product-div2">
              <div id="image"><span id="imgajoutrecent1"></span></div>
              <h3><span id="titreajoutrecent1"></span></h3>
              <hr/>
              <p><b>Date de sortie : </b><span id="dateajoutrecent1"></span><br/>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien_recent2">
            <div class="product-div2">
              <div id="image"><span id="imgajoutrecent2"></span></div>
              <h3><span id="titreajoutrecent2"></span></h3>
              <hr/>
              <p><b>Date de sortie : </b><span id="dateajoutrecent2"></span><br/>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien_recent3">
            <div class="product-div2">
              <div id="image"><span id="imgajoutrecent3"></span></div>
              <h3><span id="titreajoutrecent3"></span></h3>
              <hr/>
              <p><b>Date de sortie : </b><span id="dateajoutrecent3"></span><br/>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section id="top6">
    <h1>TOP 6</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien1">
            <div class="product-div2">
              <div id="image"><span id="img1"></span></div>
              <h3><span id="titre1"></span></h3>
              <hr/>
              <p><b>Date de sortie : </b><span id="date1"></span><br/>
                  <b>Note : </b><span id="note1"></span>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien2">
            <div class="product-div2">
              <div id="image"><span id="img2"></span></div>
              <h3><span id="titre2"></span></h3>
              <hr/>
              <p> <b>Date de sortie : </b><span id="date2"></span><br/>
                  <b>Note : </b><span id="note2"></span>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>


        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien3">
            <div class="product-div2">
              <div id="image"><span id="img3"></span></div>
              <h3><span id="titre3"></span></h3>
              <hr/>
              <p> <b>Date de sortie : </b><span id="date3"></span><br/>
                  <b>Note : </b><span id="note3"></span>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>



        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien4">
            <div class="product-div2">
              <div id="image"><span id="img4"></span></div>
              <h3><span id="titre4"></span></h3>
              <hr/>
              <p> <b>Date de sortie : </b><span id="date4"></span><br/>
                  <b>Note : </b><span id="note4"></span>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>



        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien5">
            <div class="product-div2">
              <div id="image"><span id="img5"></span></div>
              <h3><span id="titre5"></span></h3>
              <hr/>
              <p> <b>Date de sortie : </b><span id="date5"></span><br/>
                  <b>Note : </b><span id="note5"></span>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6">
          <a href="film.php" id="lien6">
            <div class="product-div2">
              <div id="image"><span id="img6"></span></div>
              <h3><span id="titre6"></span></h3>
              <hr/>
              <p> <b>Date de sortie : </b><span id="date6"></span><br/>
                  <b>Note : </b><span id="note6"></span>
              </p>
              <div class="text-view transition">
                <h4>Voir plus</h4>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>

  <footer>
    <p><a href="mentionslegales.html">Mentions légales</a>|<a href="#">Copyright</a>|<a href="#">Contact</a></p>
  </footer>

</body>

</html>
