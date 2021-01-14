console.log("exercice 5");

function getComputerChoice()                 //fonction qui détermine le choix de l'ordinateur
{
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        computerChoice = 'pierre';
    }
    else if (number === 1) {
        computerChoice = 'papier';
    }
    else {
        computerChoice = 'ciseaux';
    }
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) //fonction qui détermine le gagnant
{
    if (userChoice === computerChoice) {
        $('#result p').text("Egalité").css("color", "grey");
    }
    else if (userChoice === 'pierre') {
        if (computerChoice === 'ciseaux') {
            $('#result p').text("Gagné").css("color", "green");
        }
        else {
            $('#result p').text("Perdu").css("color", "red");
        }
    }
    else if (userChoice === 'papier') {
        if (computerChoice === 'ciseaux') {
            $('#result p').text("Perdu").css("color", "red");
        }
        else {
            $('#result p').text("Gagné").css("color", "green");
        }
    }
    else {
        if (computerChoice === 'papier') {
            $('#result p').text("Gagné").css("color", "green");
        }
        else {
            $('#result p').text("Perdu").css("color", "red");
        }
    }
}

$('img').on('click', (event) => {
    let userChoice = $(event.currentTarget).attr('id');
    console.log("vous avez choisi : " + userChoice);
    $('#userChoice p').text("vous avez choisi : " + userChoice);
    let computerChoice = getComputerChoice();
    $('#computerChoice p').text("choix de l'ordinateur : " + computerChoice);
    determineWinner(userChoice, computerChoice);
});