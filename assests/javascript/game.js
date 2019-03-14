// variables
var words = ["orange", "apple", "pineapple", "banana"];
var randWord = Math.floor(Math.random() * words.length);
var chosenWords = words[randWord];
var currentWordArray = chosenWords.split("");
var blanksArray=[];
var userGuessArray =[];
var guessesLeft = 10;
document.getElementById("leftguesses").textContent = guessesLeft;
var wins = 0;
document.getElementById("win-count").textContent = wins;
var losses = 0;
document.getElementById("loss-count").textContent = losses;
var incorrectArray = [];
// var remainingLetters = chosenWords.length;
var guessesCountEl = document.getElementById("leftguesses");
var lossesCountEl = document.getElementById("loss-count")
var winCountEl = document.getElementById("win-count");
var hangman = document.getElementById("hangman");

// functions spliting the current word's # of letters into "_"
function blankSpaces () { 
    for (var i=0; i < currentWordArray.length; i++) {
    blanksArray.push("_"); 
    }
}
function printSpaces () {
    hangman.textContent = blanksArray.join(" ");
}    
blankSpaces();
printSpaces ();
console.log(blanksArray);

// press any key to get started

// reveals correct user guess by replacing "_" with correct guess and decrementing guesses left with each guess
document.addEventListener('keypress', event => {
    var userGuess = event.key.toLowerCase(); {
        userGuessArray.push(userGuess);
        guessesLeft--;
        guessesCountEl.textContent = guessesLeft;
    }

// if/else conditional stating loss or win 
if (guessesLeft === 0) {
    losses++;
    lossesCountEl.textContent = losses;
    // reset game after loss
} else if (currentWordArray.toString() === blanksArray.toString()) {
    wins++;
    winCountEl.textContent = wins;
    // reset game after win
}

    // if/else conditional printing guessed letters into blanksArray or incorrectArray
    if (chosenWords.indexOf(userGuess)!== -1) {
        for (var j = 0; j < chosenWords.length; j++) {
            if (chosenWords[j] === userGuess) {
                blanksArray[j] = userGuess;
                document.getElementById("hangman").textContent = blanksArray.join(" ")
                } 
            }
        } else { 
                incorrectArray.push(userGuess);
                console.log("incorrectArray");
                document.getElementById("incorrect-guesses").textContent = incorrectArray.join(" ")
                }
    })
