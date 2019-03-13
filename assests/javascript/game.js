var hangman = document.getElementById("hangman");
var words = ["orange", "apple", "pineapple", "banana"];
var randWord = Math.floor(Math.random() * words.length);
var chosenWords = words[randWord];
    console.log(chosenWords);
var currentWordArray = chosenWords.split("");
console.log(currentWordArray);
var blanksArray=[];
var userGuessArray = [];
var guessesLeft = 3;

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

document.addEventListener('keypress', event => {
    var userGuess = event.key.toLowerCase(); {
    console.log(userGuess);
    userGuessArray.push(userGuess);
    }
    if (chosenWords.indexOf(userGuess)!== -1) {
        for (var j = 0; j < chosenWords.length; j++) {
            if (chosenWords[j] === userGuess) {
                blanksArray[j] = userGuess;
                document.getElementById("hangman").textContent = blanksArray.join(" ")
            }
        }
    } else {
            // update ui to say incorrect guess, try again
            //guessesLeft--;
        }
    }
    // evaluateGuess(userGuess);
 )
 

// Capture users guess; when user presses a key this event will happen

// Code runs until max number of guesses is reached
if (guessesLeft > 0) {
    evaluateGuess(userGuess);
} else {
    // update ui to say "you lost the game"
}