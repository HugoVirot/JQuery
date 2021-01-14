console.log("exercice 3");
//1. changez le titre "My portfolio" par votre prénom.;

$('h1').text("Hugo");


// 2. changez aussi le texte 'Some text that represents "Me"...' par une tagline vous représentant;

$('#tagline').text("fan absolu de JQuery !");


// 3. votre portfolio ne comprendra qu'une page : supprimez la navigation de la navbar mais laissez le bouton Login;

$('nav ul:first').hide();


// 4. changez l'icone de ce bouton

$('nav ul:last span').removeClass("glyphicon-log-in").addClass("glyphicon-send");


// 5. changez votre footer en mettant **Copyright 2017** ( respecter le gras );

$('footer p').text("Copyright 2017").css("font-weight", "Bold");


// 6. modifiez le texte des paragraphes de la première ligne d'images. Tous les textes "Some text..." doivent être remplacés par "Mon projet";
//   _Bonus_: ajouter le numéro du projet c'est à dire 'Mon projet 1' 'Mon projet 2'...

// $('#work1 .col-sm-3 p').text("Mon projet");                         //mettre un texte et une image différents par div
// $('.col-sm-3 img').attr("src", "https://eminence.ch/wp-content/uploads/2016/05/creation-site-internet.png");

$('.col-sm-3 p').each(function (i) {
    $(this).text("Mon projet " + (i + 1));

    // // 7. choisissez une image sur internet et changez toutes les images du projet par cette image. _Bonus_: personnalisez chacune des images;

    $(this).next().attr("src", "image" + (i + 1) + ".jpg");
}
)


// 8. vous venez de réaliser un nouveau projet et vous souhaitez le mettre sur votre portfolio. De plus, comme c'est le dernier, vous souhaitez qu'il apparaisse 
// au dessus des autres et qu'il soit plus grand pour être mis en valeur. Choisissez une image et un texte et ajoutez le au-dessous de "Some of my work". 
// Ajustez la taille de l'image pour être de 250px de haut;

//créer variable (div) avec attributs {} (pour 3 lignes en dessous)

//version 1 
// let projetRecent = $('<div>').append(
//     $('<h1 class="titre">Super projet récent</h1>'),
//     $('<img>', {
//         class: "image",
//         src: "https://myventurepad.com/wp-content/uploads/2017/05/webdesign1.jpg",
//         style: "height : 250px"
//     })
// )

// $('h3').after(projetRecent);

//version 2
$('h3').after('<h1 class="titre">Super projet récent</h1>');
$('.titre').after('<img class="image" src="https://myventurepad.com/wp-content/uploads/2017/05/webdesign1.jpg">');
$('.image').css("height", "250px");


// 9. la classe intro a été définie dans le fichier 'index.css'. Ajoutez cette classe au footer afin de changer l'affichage en rouge.

$('footer').addClass("intro");