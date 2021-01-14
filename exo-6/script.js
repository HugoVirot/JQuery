console.log("exercice 6");
btn.onclick = function (e) {

    function verifEmail(mail)      //fonction qui vérifie l'email
    {
        let reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
        return (reg.test(mail))
    }

    if (!($('#email').val()) && !($('#password').val()))    //si 2 champs vides
    {
        $('#formulaire').after('<div id="message" class="alert alert-warning">');
        $('#message').text("email et mot de passe obligatoires !");
        e.preventDefault();
    }

    else if (!($('#email').val()))                          //si email vide
    {
        $('#formulaire').after('<div id="message" class="alert alert-warning">');
        $('#message').text("email obligatoire !");
        e.preventDefault();
        setTimeout(function () {
            $('#message').fadeOut('fast');
        }, 1000); 
    }

    else if (!verifEmail(($('#email').val())))             //si email invalide
    {
        $('#formulaire').after('<div id="message" class="alert alert-warning">');
        $('#message').text("email invalide !");
        e.preventDefault();
        setTimeout(function () {
            $('#message').fadeOut('fast');
        }, 1000); 
    }

    else if (!($('#password').val()))                       //si mdp vide
    {
        $('#formulaire').after('<div id="message" class="alert alert-warning">');
        $('#message').text("mot de passe obligatoire !");
        e.preventDefault();
        setTimeout(function () {
            $('#message').fadeOut('fast');
        }, 1000); 
    }

    else if (($('#password').val().length < 6))            //si mdp moins de 6 caractères
    {
        $('#formulaire').after('<div id="message" class="alert alert-warning">');
        $('#message').text("mot de passe trop court : minimum 6 caractères !");
        e.preventDefault();
        setTimeout(function () {
            $('#message').fadeOut('fast');
        }, 1000); 
    }

    else if ((($('#email').val()) === "hello@me.com") && (($('#password').val() === 'secret8'))) {
        alert("Vous êtes connecté");
    }

    else                                                     //autres cas (tout est ok)
    {
        console.log($('#email').val());
        console.log($('#password').val());
        alert("saisie réussie");
    }
}


