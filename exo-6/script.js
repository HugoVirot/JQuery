console.log("exercice 6");
btn.onclick = function (e) {
    alert("saisie réussie");
    e.preventDefault();
    console.log($('#email').val());
    console.log($('#password').val());
    //if (($('#email').val()) === (undefined))
    if (!($('#email').val()))
    {
       $('#formulaire').append('<div class="alert alert-warning"')
    }
}


