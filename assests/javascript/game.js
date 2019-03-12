var hangman = document.getElementById("hangman");

// Press any key to start game

// Array of words
var words = ["orange", "apple", "pineapple", "banana"];

// Chooses randomly from words array
var randWord = Math.floor(Math.random() * words.length);

// Assigns random choice to exact fruit in word array
var chosenWords = words[randWord];
    console.log(chosenWords);

// Randomly selected word, should this all be in one function???
// var currentWord = "orange";

// Split word into letters
var currentWordArray = chosenWords.split("");
console.log(currentWordArray);

// Add "_"
var blanksArray=[];
// console.log(blanksArray);

// Loop adding "_" per letter of word
function blankSpaces () { 
    for (var i=0; i < currentWordArray.length; i++) {
    blanksArray.push("_"); 
    }
    return blanksArray;
}

function printSpaces () {
    hangman.textContent = blanksArray.join(" ");
}
    
blankSpaces();
printSpaces ();
console.log(blanksArray);

// If/else statement where if the letter guess is right it is revealed or ELSE it is wrong and they get another turn
// Capture users guess; when user presses a key this event will happen
document.addEventListener('keypress', (event) => {
    // Assigns press of letter to keycode
    var keycode = event.keyCode;
    // Converts to string (letter)
    var keyword = String.fromCharCode(keycode);
    console.log(chosenWords.indexOf(keyword));
    // Check if guess matches the random word, if it does it will be greater than -1
    if (chosenWords.indexOf(keyword) > -1) {       
    } else {
    }  
});

// Code runs until max number of guesses is reached
var numberGuesses = guesses.length;
    if (numberGuesses >= 10 ) {
        console.log("You Lose");
    } else {
        guessedLetters.push(guess);
    }
