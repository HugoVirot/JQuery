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

console.log($('#iPad').parent().parent().children(".panel-footer").text());




var articles = 1;

$('img').on('click', (event) => {             //ajout au panier de l'article en cliquant sur l'image
    var textePromo = $(event.currentTarget).parent().parent().children(".panel-footer").text();  //on récupère le texte avec le nombre d'articles de la promo
    $('nav ul:last li:nth-child(2) a').html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart (' + textePromo[4] + textePromo[5] + ')'); //on affiche juste ce nombre dans le panier (chiffres en positions 4 et 5)
});    //on remplace la div contenant l'icône du panier et le total de produits par le même icône + le nouveau total

/*$('#iPad').on('mouseover', event => {                    version avec id
    console.log('L\'utilisateur regarde l\'iPad');
});*/

$('img').on('mouseover', (event) => {          //version sans id (toutes les images) : c'est mieux !
    console.log('L\'utilisateur regarde ' + $(event.currentTarget).attr('id'));
});

$('form input').on('click', () => {
    alert("vous avez cliqué dans le champ de saisie d'adresse");
});

$('form input').on('keypress', (event) => {
    console.log("saisie : " + ((event.currentTarget).value));  //afficher en temps réel la saisie dans la console
});





