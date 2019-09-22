/* jshint esversion: 6 */

/* just to tell jshint we are using ES6  the mmdoern javascript */
/*
 * Game Rules:
 * - Player guess number between min and max
 * - Player get certain amount of guesses
 * - Notify player number of guesses remaining
 * - Notify correct answer if loose
 * - Player can choose to play again
 */

 // Game values
 let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min max
minNum.textContent = min;
maxNum.textContent = max;

// use event delegation wohoo
/* click will detect exactly right after class is created even if 
we din't click 'Play again' button, so we use mousedown */
game.addEventListener('mousedown',function(e){
  console.log(e.target);
  if(e.target.className === 'play-again'){
    window.location.reload();
    window.location.s
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  console.log(guessInput.value);
  let guess = parseInt(guessInput.value);

  // validate input
  if( isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    if(guess === winningNum){
      // game over - win
      gameOver(true, `${winningNum} is correct, you win!`);
    } else {
      // wrong number
      guessesLeft--;
      if(guessesLeft === 0) {
        // game over - lose
        gameOver(false, `Game Over, you lose. The correct number is ${winningNum}`);
      } else {
        // continue
        guessInput.style.bordeColor = 'red';
        // clear input
        guessInput.value = '';
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
      }
    }
  }
});

// game over
function gameOver(won, msg){
  let color;
  color = won ? 'green' : 'red';
  // disable input
  guessInput.disabled = true;
  // change borderColor
  guessInput.style.bordeColor = color;
  // set message
  setMessage(msg, color);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className = 'play-again';
}

// get winning number
function getRandomNum(min, max){
  let randomNumber = Math.ceil(Math.random() * max + min);
  //console.log(randomNumber);
  return randomNumber;
}

// set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}