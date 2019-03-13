var hangman = document.getElementById("hangman");
var words = ["orange", "apple", "pineapple", "banana"];
var blanksArray=[];
var userGuessArray = [];
//var guessesLeft = 3;
var wins = 0;
var winCountElement = document.getElementById("win-count");
//var incorrectArray = [];


function startGame () {

    var randWord = Math.floor(Math.random() * words.length);
    var chosenWords = words[randWord];
    console.log(chosenWords);
    var currentWordArray = chosenWords.split("");

    for (var i=0; i < currentWordArray.length; i++) {
        blanksArray.push("_"); 
    }
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

    var incorrectArray = [];
    var guessesLeft = 3;

    document.getElementById("guesses-left").textContent = guessesLeft;

}
startGame();

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
                } else { 
                incorrectArray.push(userGuess);
                console.log("incorrectArray");
                //document.getElementById("incorrect-guesses").textContent = incorrectArray.join(" ")
                //incorrectArrayText.textContent = guessSoFar;
            }
        }
    }
})
