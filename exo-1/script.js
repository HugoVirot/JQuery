console.log('exercice 1');
/*
1) JQuery est un framework JS qui permet d'écrire beaucoup moins de lignes de code pour arriver au même résultat.
Pour l'utiliser, on insère quelques lignes spécifiques juste avant la balise </body> de l'index.html.
Utiliser JQuery par rapport à JS, c'est comme construire une ville en Lego avec des éléments déjà assemblés
(immeubles, routes, etc) plutôt que de partir des briques elles-mêmes. C'est bien plus rapide ! 

2) La balise script de JQuery est placée à la fin du body, juste avant la balise </body>. afin que le html
se charge d'abord et ne soit pas ralenti. 
Autre intérêt : JQuery fait référence à des élements HTML, il faut que ceux-ci soient déjà existants.
J'ai déplacé la balise <script src="script.js"></script> juste après celle de JQuery, pour que les
méthodes JQuery qu'on appellera dans script.js puissent s'exécuter.


$(document).ready(function(){
	console.log('Je peux maintenant écrire du code jQuery');
});


5) La ligne $(document).ready(function(){ est indispensable, car elle permet d'attendre le chargement complet
du document (index.html) avant que le JS ne s'exécute. Cela permet de ne pas ralentir l'affichage de la page.

6)C'est le symbole $.
*/

