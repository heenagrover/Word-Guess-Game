var words = ["italy", "france", "netherlands", "switzerland"];

var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var alphabet = getalphabetArray();

var wins = 0;
var losses = 0;
var correct = 0;
var lives = 8;
var lettersGuessed = [];
var letterBlanks = [];
var randomWord = "";

//var word = "timeup";

function gameOver() {
    if (letterBlanks.indexOf("-") === -1) {
        wins++;
        alert("You won");
    } else {
        losses++;
        alert("You lost")
    }

    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;

    restartTheGame();
}

function checkGameOver() {
    return livesLeft === 0 || correct == 6;
}

function isValidLetter(letter) {
    return alphabet.indexOf(letter) > -1;
}

function updateWronGuess() {
    livesLeft--;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
    document.getElementById("user-lives").innerHTML = livesLeft;
}

function initializeGame() {
    livesLeft = 8;
    lettersGuessed = [];
    letterBlanks = [];
    randomWord = words[Math.floor(Math.random() * words.length)];

    for (var i = 0; i < randomWord.length; i++) {
        letterBlanks.push("_ ");
    }

    document.getElementById("randomWord").innerHTML= letterBlanks.join("");

    return alphabetArray;
}

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keycode).toLowerCase();

    if (word.indexOf(userGuess) > -1) {
        alert("Correct Guess");

        document.getElementById('randomWord').innerHTML += userGuess;
        document.getElementById('lettersGuessed').innerHTML += userGuess;
        correct = correct + 1;
        if (correct == 6) {
            alert("you won");
            initializeGame();
        }

    } else {
        lives = lives - 1;
        if (lives === 0) {
            alert("you lose");
        } else {
            alert("Wrong guess. You have " + lives + " lives.");
            document.getElementById('lettersGuessed').innerHTML += userGuess;
            document.getElementById('user-lives').innerHTML = lives;
        }

    }

}
