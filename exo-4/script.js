console.log("exercice 4");

// 1. si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : "Merci nous vous tiendrons informé des différentes offres";
// 2. récupérer maintenant le contenu de l'input pour adapter votre message : "Merci `adresse email rentrée`, nous vous tiendrons informé des différentes offres`;

$('.btn').on("click", () => alert("Merci " + $('form input').val() + " nous vous tiendrons informé des différentes offres"));


// 3. si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits';

$('nav ul:first li:nth-child(2)').on('dblclick', function (event){
    $(this).hide();
});


// 4. si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite pour marquer le fait qu'un produit a été ajouté au panier. S'il clique deux fois on doit avoir le texte Cart(2);
// for (var i=0; i = 4; i++)
// {
//     var nombreArticles[i] = $('.panel-footer')[i].text();
//     alert(nombreArticles[i]);
// }

// console.log($('#iPad').parent().parent().children(".panel-footer").text());


// let articles = 1;

// $('img').on('click', () => {
//     $('ul:last li:nth-child(2) a').text('Cart (' + articles++ + ')');
// });

// $('img').on('click', (event) => {             //ajout au panier de l'article en cliquant sur l'image
//     var textePromo = $(event.currentTarget).parent().parent().children(".panel-footer").text();  //on récupère le texte avec le nombre d'articles de la promo
//     $('nav ul:last li:nth-child(2) a').html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart (' + textePromo[4] + textePromo[5] + ')'); //on affiche juste ce nombre dans le panier (chiffres en positions 4 et 5)
// });    //on remplace la div contenant l'icône du panier et le total de produits par le même icône + le nouveau total



// 5. un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit. Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au dessus d'une image de produit. Vous pouvez ajouter des ids sur les images dans la page HTML. _Bonus_: faire de même sans utiliser les ids;

//version avec ids dans la page html

// $('img').on('mouseover', event => {   
//     console.log('L\'utilisateur regarde ' + $(event.currentTarget).attr('id'));
// });

//version sans ids dans la page htm

$('img').on('mouseover', event => {
    let text = $(event.currentTarget).parent().next()[0].innerText;
    text = text.split(" ").pop();
    console.log('L\'utilisateur regarde ' + text);
});



$('form input').on('click', () => {
    alert("vous avez cliqué dans le champ de saisie d'adresse");
});

$('form input').on('keypress', (event) => {
    console.log("saisie : " + (event.currentTarget).value);  //afficher en temps réel la saisie dans la console
});





