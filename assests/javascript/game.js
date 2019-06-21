// variables
var words = ["orange", "apple", "pineapple", "banana", "peach", "nectarine", "pear", "kiwi", "blueberry", "strawberry"];

// global variables
var numWins = document.getElementById("win-count");
var numLoss = document.getElementById("loss-count");
var currentWord = document.getElementById("hangman");
var guessesLeft = document.getElementById("guessesleft");
var wrongGuess = document.getElementById("incorrect-guesses");
///
var wins = 0;
var losses = 0;
var numGuess;
///
var lettersGuessed;
///
var randWord;
var randArray;
//
var blanksArray;
//
var userGuess;

//Print the number of Wins//
function printWins() {
    numWins.textContent = "Wins: " + wins;
}
printWins();

//Print the number of Losses//
function printLosses() {
    numLoss.textContent = "Losses: " + losses;
}
printLosses();


// start game
function start() {
    randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);
    lettersGuessed = [];
    numGuess = 15;
    guessesLeft.textContent = numGuess;
    randArray = [];
    for (var i = 0; i < randWord.length; i++) {
        randArray.push(randWord[i]);
    }
    return randArray;
}
start();



// creating and printing "_" spaces 
function blankSpaces() {
    blanksArray = [];
    for (var i = 0; i < randWord.length; i++) {
        blanksArray.push("_");
    }
    return blanksArray;
}
function printSpaces() {
    currentWord.textContent = blanksArray.join(" ");
}

blankSpaces();
printSpaces();
console.log(blanksArray);

// function when user presses a key
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    
    if ((event.which <= 90 && event.which >= 65) && lettersGuessed.indexOf(userGuess) === -1) {
        lettersGuessed.push(userGuess);
        console.log(lettersGuessed);
        // $("#incorrect-guesses").append(lettersGuessed);
        if (randArray.indexOf(userGuess) > -1) {
            for (var j = 0; j < randArray.length; j++) {
                if (randArray[j] == userGuess) {
                    blanksArray[j] = userGuess;
                    console.log(blanksArray);
                    printSpaces();
                    // document.getElementById("hangman").textContent = randArray.join(" ")
                }
            }
            if (randArray.toString() === blanksArray.toString()) {
                wins++;
                printWins();
                start();
                lettersGuessed = [];
                blanksArray = [];
                blankSpaces();
                printSpaces();
                wrongGuess.textContent = "";
            }
        } else {
            wrongGuess.textContent += userGuess + " ";
            numGuess--;
            guessesLeft.textContent = numGuess;
            if (numGuess === 0) {
                losses++;
                printLosses();
                start();
                lettersGuessed = [];
                blanksArray = [];
                blankSpaces();
                printSpaces();
                wrongGuess.textContent = "";
            }
        }

    }
    else if (event.which <= 90 && event.which >= 65) {
      
      alert("You have already guessed this letter.");
  }
  //Run this if a number is pressed
  else if (event.which >= 48 && event.which <= 57) {
      alert("Please only choose letters A-Z.");
  }
};