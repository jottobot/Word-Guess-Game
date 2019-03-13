// all variables
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
var leftGuesses = [];
var wins = 0;
var losses = 0;
var winCountElement = document.getElementById("win-count");
var incorrectArray = [];

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

// tells how many guesses there are left 
// need to decrement the guess by one every time user guess's
function guesses() {
    var guessesLeft = 3;
    document.getElementById("leftguesses").textContent = guessesLeft;
}
guesses ();

// reveals correct user guess by replacing "_" with correct guess
document.addEventListener('keypress', event => {
    var userGuess = event.key.toLowerCase(); {
        console.log(userGuess);
    userGuessArray.push(userGuess);
    guessesLeft--;
        console.log(guessesLeft);
    leftGuesses.push(guessesLeft);
    }
    if (chosenWords.indexOf(userGuess)!== -1) {
        for (var j = 0; j < chosenWords.length; j++) {
            if (chosenWords[j] === userGuess) {
                blanksArray[j] = userGuess;
                document.getElementById("hangman").textContent = blanksArray.join(" ")
                } 
            }
        }
            else { 
                incorrectArray.push(userGuess);
                console.log("incorrectArray");
                document.getElementById("incorrect-guesses").textContent = incorrectArray.join(" ")
            }
})

// Define how to win the game
// If guessesLeft === 0 then the user loses
// If user guesses word they win and ++ to wins