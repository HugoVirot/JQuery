console.log("exercice 4");

$('.btn').click(function(){
    alert("Merci " + $('form input').val() + " nous vous tiendrons informé des différentes offres");
});

$('nav ul:first li:nth-child(2)').on ('dblclick', (event) => { 
    $(event.currentTarget).hide();
 });


/*for (var i=0; i = 4; i++)
{
    var nombreArticles[i] = $('.panel-footer')[i].text();
    alert(nombreArticles[i]);
}*/

var articles = 1;

$('img').on('click', () => {             //ajout au panier de l'article en cliquant sur l'image
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

$('form input').on('keypress', (event) => {
    console.log("saisie : " + ((event.currentTarget).value));  //afficher en temps réel la saisie dans la console
});





