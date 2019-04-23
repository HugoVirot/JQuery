console.log('exercice 2');
/*
1) Les 3 principaux types de sélections en JQuery sont :
- la sélection par élément : ex : paragraphes : $('p') 
- la sélection par id : ex : $('#test')
- la sélection par classe : ex : $('.productPhoto') 
*/
$('#title').css("background-color", "red");

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

$('ul li:first').click(function() {
    alert("hi");
});

for (var i=0; i<p.count; i+2)
{
$('p')[i].css("background-color", "purple");
}