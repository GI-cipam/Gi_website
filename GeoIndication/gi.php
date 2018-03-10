<html>

	<head>
		<title>Geographical Indications</title>
		<link href="css/style.css" rel='stylesheet' type='text/css' />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
		</script>
		<script src="js/jquery.min.js"></script>
		<!---script---->
		<link rel="stylesheet" href="css/jquery.bxslider.css" type="text/css" />
		<script src="js/jquery.bxslider.js"></script>
			<script type="text/javascript">
				$(document).ready(function(){
					$('.bxslider').bxSlider({
						 auto: true,
 						 autoControls: true,
						 minSlides: 4,
						 maxSlides: 4,
						 slideWidth:450,
						 slideMargin: 10
					});
				});
			</script>
		<!---//script---->
		<!---smoth-scrlling---->
			<script type="text/javascript">
				$(document).ready(function(){
									$('a[href^="#"]').on('click',function (e) {
									    e.preventDefault();
									    var target = this.hash,
									    $target = $(target);
									    $('html, body').stop().animate({
									        'scrollTop': $target.offset().top
									    }, 1000, 'swing', function () {
									        window.location.hash = target;
									    });
									});
								});
				</script>
		<!---//smoth-scrlling---->
		<!----start-top-nav-script---->
		<script type="text/javascript" src="js/flexy-menu.js"></script>
		<script type="text/javascript">$(document).ready(function(){$(".flexy-menu").flexymenu({speed: 400,type: "horizontal",align: "right"});});</script>
		<!----//End-top-nav-script---->
		<!---webfonts---->
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
		<!---webfonts---->
		<!--start slider -->
	    <link rel="stylesheet" href="css/fwslider.css" media="all">
		<script src="js/jquery-ui.min.js"></script>
		<script src="js/css3-mediaqueries.js"></script>
		<script src="js/fwslider.js"></script>
		<!--end slider -->
		<!---calender-style---->
		<link rel="stylesheet" href="css/jquery-ui.css" />
		<!---//calender-style---->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
    .vl {
        border-left: 3px;
        height: 500px;
    }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

<style>
#map{
  margin-top: 20px;
  margin-bottom: 50px;
  height: 500px;
  width: 90%;
  margin-right: 5%;
  margin-left:5%;
}
</style>
	</head>
<body>
  <!-- <div class="top-header" id="header">
    <div class="wrap">

    <div class="top-header-right">
      <ul>
        <li><a class="face" href="https://www.facebook.com/cipamindia/"><span> </span></a></li>
        <li><a class="twit" href="https://twitter.com/CIPAM_India"><span> </span></a></li>
        <li><a class="pin" href="https://www.youtube.com/channel/UCVi34sYvMBclXSk4JJV6r6A"><span> </span></a></li>
        <div class="clear"> </div>
      </ul>
    </div>
    <div class="clear"> </div>
  </div>
  </div> -->
  <!----//End-top-header----->
  <!---start-header---->

	<!-- start-side-social-icons -->
	<div class="sidebar" style="margin-right:0; margin-top:10%; z-index: 20; ">

		<div class="footer-social-icons">

			<ul class="social-icons">
					<div class="wid1"><li><a href="https://www.facebook.com/cipamindia/" class="social-icon"> <i class="fa fa-facebook"></i></a></li></div>
					<div class="wid1"><li><a href="https://twitter.com/CIPAM_India" class="social-icon"> <i class="fa fa-twitter"></i></a></li></div>
					<div class="wid1"> <li><a href="https://www.facebook.com/cipamindia/" class="social-icon"> <i class="fa fa-rss"></i></a></li></div>
					<div class="wid1"><li><a href="https://www.youtube.com/channel/UCVi34sYvMBclXSk4JJV6r6A" class="social-icon"> <i class="fa fa-youtube"></i></a></li></div>
					<!-- <div class="wid1"><li><a href="" class="social-icon"> <i class="fa fa-linkedin"></i></a></li></div> -->
					<!-- <div class="wid1" id="enddiv"><li><a href="" class="social-icon"> <i class="fa fa-google-plus"></i></a></li></div> -->
			</ul>
	</div>
	 </div>
	 <!-- End-side-social-icons -->
  <div class="header">
    <div class="wrap">
    <!--- start-logo---->
    <div class="logo">
      <a href="index.php"><img src="images/gi_img.jpg" style="max-width: 200px; max-height: 100px; margin-top: -30px;" /></a>
    </div>
    <!--- //End-logo---->
    <!--- start-top-nav---->
    <div class="top-nav">
        <ul class="flexy-menu thick orange">
          <li class="active"><a href="index.php">Home</a></li>
          <li><a href="list.php?name=">GI's</a></li>
          <li><a href="feed.html">Feed</a></li>
					<li><a href="aboutPage.html">About</a></li>
        </ul>
        <div class="search-box">
          <div id="sb-search" class="sb-search">
            <form>
              <input class="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search">
              <input class="sb-search-submit" type="submit" value="">
              <span class="sb-icon-search"> </span>
            </form>
          </div>
        </div>
        <!----search-scripts---->
        <script src="js/modernizr.custom.js"></script>
        <script src="js/classie.js"></script>
        <script src="js/uisearch.js"></script>
        <script>
          new UISearch( document.getElementById( 'sb-search' ) );
        </script>
        <!----//search-scripts---->
    </div>
    <!--- //End-top-nav---->
    <div class="clear"> </div>
  </div>
  <!---//End-header---->
</div>



<div style="margin-top: 40px; margin-bottom: 30px;">
  <center>
	<?php
	$my_gi=$_GET['gi'];
	 echo '<u><h1><font color="#303090" id="gi" >'.$my_gi.'</font></h1></u>';
	?>
</center>
</div>
<hr>


<div class="row" style="margin-top: 30px; margin-botton: 20px; display: initial;">

  <div class="col-sm-2"></div>

  <div class="col-sm-4">
    <center><p id="gi_img"></p></center>
    <center><p style="display:inline;" id="gstate"></p> / <p style="display:inline;"id="gcat"></p></center>
  </div>

  <div class="col-sm-4">
    <center><u><b><h3><font color="#2C3E50">DETAIL</font></h3></b></u></center>
    <center><p id="detail"></p></center>
  </div>

  <div class="col-sm-2"></div>

</div>




<hr>
<div class="row" style="margin-bottom: 50px; display: initial;">

  <div class="col-sm-2"></div>

  <div class="col-sm-4">
  <center><u><b><h3><font color="#2C3E50">DESCRIPTION</font></h3></b></u></center>
  <p id="des"></p>
</div>

<div class="col-sm-4">
<center><u><b><h3><font color="#2C3E50">HISTORY</font></h3></b></u></center>
<p id="his"></p>
</div>

  <div class="col-sm-2"></div>

</div>
<hr>
<!-- <div class="row" style="margin-bottom: 50px; display: initial;">
  <div class="col-sm-2"></div>

  <div class="col-sm-4">
  <center><u><b><h3><font color="#2C3E50">SELLERS</font></h3></b></u></center>
<center>
  <table  class="table table-hover">
  	 <thead>
  		 <tr>
  			 <th>Name</th>
  			 <th>Address</th>
  			 <th>Contact</th>
  		 </tr>
  	 </thead>
  	 <tbody id="sellerd">

  	 </tbody>
   </table>
</center>

  </div>

    <div class="col-sm-2"></div>
</div>
 -->




 <div style="margin-bottom: 50px;">
 	<div class="client-head" style="margin-bottom: 30px;">
 		<u><h3>Map</h3></u>
 	</div>
 	<div>
 	<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15280355.937844243!2d73.72803740341402!3d20.76879687797472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1520109892279"  frameborder="0" allowfullscreen></iframe>
 	</div>
 </div>


<!-- <script>

// var c = document.getElementById("giname").innerHTML;
// alert(c);


</script> -->


<div class="footer" style="bottom: 0px">
	<div class="wrap">
	<div class="footer-grids">
		<div class="footer-grid Newsletter">
			<h3>News letter </h3>
			<p>The Cell for IPR Promotions and Management (CIPAM) has launched a social media campaign to promote Indian Geographical Indications (GIs) with "#LetsTalkIP"</p>
			<form>
				<input type="text" placeholder="Subscribes.." /> <input type="submit" value="GO" />
			</form>
		</div>
		<div class="footer-grid Newsletter">
			<h3>Latest News </h3>
			<div class="news">
				<div class="news-pic">
					<img src="images/f01.jpg" title="news-pic1" />
				</div>
				<div class="news-info">
					<a href="https://www.facebook.com/cipamindia/">Ms. Suvarna Pande from RNA, IP Attorneys and Ms. Astha Negi from Fidus Law Chambers had interactive sessions on Patents, Industrial Designs, Trademarks and Counterfeiting at 3 Days 'Training of Trainers' Program organised in collaboration with Rajasthan Council for Science & Technology at Jaipur.</a>
					<span>February 20, 2018</span>
				</div>
				<div class="clear"> </div>
			</div>

		</div>
		<div class="footer-grid tags">
			<h3>Tags</h3>
			<ul>
				<li><a href="index.php">Login</a></li>
				<li><a href="index.php">Not a Member?</a></li>
				<li><a href="list.php?name=">States</a></li>
				<li><a href="list.php?name=">Categories</a></li>
				<li><a href="feed.html">Feeds</a></li>
				<li><a href="aboutPage.html">About</a></li>

				<div class="clear"> </div>
			</ul>
		</div>
		<div class="footer-grid address">
			<h3>Address </h3>
			<!-- <div class="address-info">
				<span>DieSachbearbeiter Schonhauser </span>
				<span>Allee 167c,10435 Berlin Germany</span>
				<span><i>E-mail:</i><a href="mailto:moin@blindtextgenerator.de">moin@blindtextgenerator.de</a></span>
			</div> -->
			<div class="footer-social-icons">
				<ul>
					<li><a class="face1 simptip-position-bottom simptip-movable" data-tooltip="facebook" href="https://www.facebook.com/cipamindia/"><span> </span></a></li>
					<li><a class="twit1 simptip-position-bottom simptip-movable" data-tooltip="twitter" href="https://twitter.com/CIPAM_India"><span> </span></a></li>
					<!-- <li><a class="tub1 simptip-position-bottom simptip-movable" data-tooltip="tumblr" href="#"><span> </span></a></li> -->
					<li><a class="pin1 simptip-position-bottom simptip-movable" data-tooltip="youtube" href="https://www.youtube.com/channel/UCVi34sYvMBclXSk4JJV6r6A"><span> </span></a></li>
					<div class="clear"> </div>
				</ul>
			</div>
		</div>
		<div class="clear"> </div>
	</div>
	</div>
</div>





<!--
<script>
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('here').innerHTML = data.name;
}
</script> -->


<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>
<script>
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCFS8wmVg-qy3VEXPCr2wooxKPNrZgBG4M",
		authDomain: "gi-india.firebaseapp.com",
		databaseURL: "https://gi-india.firebaseio.com",
		projectId: "gi-india",
		storageBucket: "gi-india.appspot.com",
		messagingSenderId: "901822549863"
	};
	firebase.initializeApp(config);
</script>
<script src="gi.js"></script>
</body>
</html>
