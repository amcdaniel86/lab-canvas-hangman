
class GameAnimator {
  constructor(){
    this.ctx = document.getElementById('theCanvas').getContext('2d');

  }

  drawLines(){
    let numberOfLines = this.wordToGuess.length;

    let x = 500; //must be outside the loop
    for(let i = 0; i < numberOfLines; i++){
      this.ctx.lineWidth = 8;
      this.ctx.beginPath();
      this.ctx.moveto(500 + (i*10),500);
      this.ctx.lineTox + 50, 300);
      this.ctx.stroke();
      x += 75;
    }
  }

  drawWrongLetter(whichLetter){

    this.ctx.font = '30px serif';
    this.ctx.fillText(whichLetter, this.wrongLetterY, this.wrongLetterX);
    this.wrongLetterX+= 50;
      if(this.wrongLetterX > 1100){
          this.wrongLetterY += 50;
          this.wrongLetterX = 900;
      }
    
  }

  drawCorrectLetter(whichLetter, indexes){
    console.log('correct guess');
    console.log(whichLetter);
    console.log(indexes);
    this.ctx.font = '30px serif';

    indexes.forEach((theIndex)=>{
      this.ctx.fillText(whichLetter, 310 + indexes[0]*75, 280)

    })
  }

}


function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {

};

HangmanCanvas.prototype.drawLines = function () {

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
