console.log('exercice 2');
/*
1) Les 3 principaux types de sélections en JQuery sont :
- la sélection par balise : ex : paragraphes : $('p') 
- la sélection par id : ex : $('#test')
- la sélection par classe : ex : $('.productPhoto') 
*/

//1
$('#title');//.css("background-color", "red");

//2
$('.sidenav').on("click", function() {
    alert("hello");
});

//3
$("footer").css("background-color", "blue");

//4
$('.form-control').click(function() {
    alert("good morning");
});

//5
$('.glyphicon').css("background-color", "green");

//6
$('.label-success').css("color", "yellow");

//7
$('p.intro').click(function() {          //aucun paragraphe ne porte cette classe !
    alert("how are you ?");
});

//8
$('.glyphicon-time').css("background-color", "grey");

//9
$('.sidenav li:first-child').click(function() {
    alert("hi");
});

//10
$('p:odd').css("background-color", "purple");
