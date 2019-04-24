console.log("exercice 5");

/*$('#pierre').on('click', () => {             //version avec ids
    console.log("vous avez choisi la pierre");
});

$('#papier').on('click', () => {
    console.log("vous avez choisi le papier");
});

$('#ciseaux').on('click', () => {
    console.log("vous avez choisi les ciseaux");
});*/

/*var monTexte = $('#userChoice p').textContent;
var userChoice = monTexte.split(" ").splice(-1);
*/

function getComputerChoice()                 //fonction qui détermine le choix de l'ordinateur
{
    let number = Math.floor(Math.random()*3);
    if (number === 0)
    {
        computerChoice = 'pierre';
    } 
    else if (number === 1)
    {
        computerChoice ='papier';
    }
    else
    {
        computerChoice = 'ciseaux';
    }
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) //fonction qui détermine le gagnant
{
    if (userChoice === computerChoice)
    {
        $('#result p').text("Egalité").css("color", "grey");
    }
    else if (userChoice === 'pierre')
    {
        if (computerChoice === 'ciseaux')
        {
            $('#result p').text("Gagné").css("color", "green");
        }
        else
        {
            $('#result p').text("Perdu").css("color", "red");
        }
    }
    else if (userChoice === 'papier')
    {
        if (computerChoice === 'ciseaux')
        {
            $('#result p').text("Perdu").css("color", "red");
        }
        else
        {
            $('#result p').text("Gagné").css("color", "green");
        }
    }
    else
    {
        if (computerChoice === 'papier')
        {
            $('#result p').text("Gagné").css("color", "green");
        }
        else
        {
            $('#result p').text("Perdu").css("color", "red");
        }
    }
}

var userChoice = "";

$('img').on('click', (event) => {            //version pour toutes les images
    console.log("vous avez choisi : " + $(event.currentTarget).attr('id'));
    $('#userChoice p').text("vous avez choisi : " + $(event.currentTarget).attr('id'));
    userChoice = $(event.currentTarget).attr('id');
    getComputerChoice();                        //appel fonction
    $('#computerChoice p').text("choix de l'ordinateur : " + computerChoice);  //afficher choix ordi
    determineWinner(userChoice, computerChoice);
});