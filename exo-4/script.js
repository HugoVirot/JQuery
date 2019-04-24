console.log("exercice 4");

$('.btn').click(function(){
    alert("Merci " + $('form input').val() + " nous vous tiendrons informé des différentes offres");
});

$('nav ul:first li:nth-child(2)').on ('dblclick', (event) => { 
    $(event.currentTarget).hide();
 });

var articles = 1;

$('img').on('click', () => {
    $('nav ul:last li:nth-child(2) a').html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart (' + articles++ + ')');
});

/*$('#iPad').on('mouseover', event => {                    version avec id
    console.log('L\'utilisateur regarde l\'iPad');
});*/

$('img').on('mouseover', (event) => {          //version sans id (toutes les images)
    console.log('L\'utilisateur regarde ' + $(event.currentTarget).attr('id'));
});

$('form input').on('click', () => {
    alert("vous avez cliqué dans le champ de saisie d'adresse");
});

$('form input').on('keypress', () => {
    console.log("vous avez tapé quelque chose ici");
});

//afficher en temps réel la saisie dans la console



