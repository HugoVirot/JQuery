console.log('exercice 2');
/*
1) Les 3 principaux types de sélections en JQuery sont :
- la sélection par balise : ex : paragraphes : $('p') 
- la sélection par id : ex : $('#test')
- la sélection par classe : ex : $('.productPhoto') 
*/
$('#title');//.css("background-color", "red");

$('.sidenav').click(function() {
    alert("hello");
});

$('footer').css("background-color", "blue");

$('.form-control').click(function() {
    alert("good morning");
});

$('.glyphicon').css("background-color", "green");

$('.label-success').css("color", "yellow");

$('p.intro').click(function() {          //aucun paragraphe ne porte cette classe !
    alert("how are you ?");
});

$('.glyphicon-time').css("background-color", "grey");

$('.sidenav ul li:first').click(function() {
    alert("hi");
});


$('p:odd').css("background-color", "purple");
