console.log("exercice 3");
$('h1').text("Hugo");
$('#tagline').text("fan absolu de JQuery !");
$('nav ul:first').hide();
$('nav ul:last span').removeClass("glyphicon-log-in").addClass("glyphicon-send");
$('footer p').text("Copyright 2017").css("font-weight", "Bold");
$('#work1 .col-sm-3 p').text("Mon projet");
//mettre un texte différent par image
$('.col-sm-3 img').attr("src","https://eminence.ch/wp-content/uploads/2016/05/creation-site-internet.png");

//créer variable (div) avec attributs {} (pour 3 lignes en dessous)
$('h3').append('<h1 class="titre">Super projet récent</h1>');
$('.titre').append('<img class="image" src="https://myventurepad.com/wp-content/uploads/2017/05/webdesign1.jpg">');
$('.image').css("height", "250px");

$('footer').addClass("intro");