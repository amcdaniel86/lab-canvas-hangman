let wordsArray = ["button", "selector", "div", "commit", "add", "touch", "length", "push", "shift", "unshift", "pop", "function", "array", "object", "random", "floor", "ceil", "property", "key", "argument", "parameter", "boolean", "value", "constructor", "console", "result", "variable", "declare", "method", "branch", "master", "loop", "switch", "statement", "camelcase", "concatenate", "callback", "background", "padding", "margin", "flexbox", "bootstrap", "jquery", "border", "position"
];

class Hangman {
    constructor( , , , )
      this.wordsArray = wordPool;
      this.getWord = secretWord;
      this.wrongLetters = ;
      this.errorsLeft = ;

}

Hangman.getWord = function(wordsArray) {
  let newWord = Math.floor(Math.random()*wordsArray.length);
  return wordsArray[newWord];
  }


// Hangman.checkIfLetter = function (keyCode) {

// };

// Hangman.checkClickedLetters = function (key) {

// };

// Hangman.addCorrectLetter = function (i) {

// };

// Hangman.addWrongLetter = function (letter) {

// };

// Hangman.checkGameOver = function () {

// };

// Hangman.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};

// wordsArray for the game to use for each game iteration.

secretWord - random word chosen from wordsArray for each game.

// triedLetters - array for already clicked letters in each game, so they're NOT repeated.

// errorsLeft: starts at 10, reduces each time user clicks on letter not in word. reduces when letters array increases by 1.

// getWord() - returns from random word from array [wordsArray]

// checkIfLetter() - verifies the key user types is a letter. qwerty, a-z, not symbols, fxn keys etc

// checkClickedLetters() - verifies pressed letter is first time was clicked. returns true if first time, false if already pressed.

// checkGameOver() - returns boolean value true, if hangman is created, false any other case. } else {

//   checkWinner() - checks if user wins, returns a boolean value if they do.

//   addCorrectLetter() - adds pressed letter to the 'letters' array. also, should check if user wins, since once pressed, final letter starts checkWinner function.

//   addWrongLetter() - subtract one from the variable errorsLeft, and also check if errorsLeft hits 0, then plays game over screen.

//

//Nick's version below vvvvvvvvv

// let theGame;
class Hangman{
constructor(){
  this.potentialWords = ['innovation', 'passion', 'sriracha', 'burlap', 'ROI', 'ethical', 'sustainable']
    this.secretWord = "";
    this.correctGuesses = [];
    this.incorrectGuesses = [];
    this.errorsLeft = 10;    
    this.getWord();
    }
// run hangman means run the constructor function

//noargument needed below for getWord
  getWord(){
    let randomNumber = Math.floor(Math.random()*this.potentialWords.length);

    this.secretWord = this.potentialWords[randomNumber];
    // or this way - this.secretWord = this.potentialWords[Math.floor(Math.random()*this.potentialWords.length)]

  }
  checkIfThisThingIsALetter(thisThing){
        if(thisThing.keyCode >= 65a && thisThing.keyCode <= 90){
          return true;
        } else {
          return false;
        }
// theGuess - passes through event object.


        evaluateGuess(theGuess){
            if(!this.checkIfThisThingIsALetter(theGuess)){
              console.log('not a letter');
              return;
            }
            // .includes or 
            if(this.correctGuesses.includes(theGuess.key) || this.incorrectGuesses.includes(theGuess.key) ){
              console.log('already guessed, try again');
              return;
            }





            if(this.secretWord.includes(theGuess.key)){
              
              //loop through secret word,for each letter, if equals theGuess.key, take index of current letter, then push it into an array. write .incldudes function
              let arrayOfIndexes = [];
              
              this.correctGuesses.push(theGuess.key)

              for(let=0; i < this.secretWord.length, i++){
                if(this.secretWord[i]===theGuess.key){
                  arrayOfIndexes.push(i)
                }
              }

                this.canvas.drawCorrectLetteer(theGuess.key, arrayOfIndexes)
                this.checkWinner();
              } else {
                this.incorrectGuesses.push(theGuess.key);
                this.errorsLeft--;
                this.canvas.drawWrongLetter(theGuess.key);
                this.checkGameOver();
              }

            }
                checkGameOver(){
                  if(this.errorsLeft <1){
                    alert('you lose');
                  }
                }

                checkWinner(){
                  let secretArray = this.secretWord.split('').filter((letter, i)=>{
                    return this.secretWord.split('').indexOf(letter) === i;
                  })
                  if(secretArray.sort().join('') === this.correctGuesses.sort().join('')){
                    alert('you win');
                  }
                }


        }

      // console.log(thisThing.key);
      // console.log(thisThing.keyCode);




document.getElementById('start-game-button').onlick = function () {
  theGame = new Hangman();
  theGame.canvas = new GameAnimator();
  theGame.canvas.wordToGuess = theGame.secretWord();
  theGame.canvas.drawLines();
  // theGame.getWord(); - optional instead of this.getWord(); above at top in constructor
};

document.onkeydown = function (e){
  if(theGame){
    theGame.evaluateGuess(e)

  }
};

// eventObject in dev tools, returns large list of values related to a key click.