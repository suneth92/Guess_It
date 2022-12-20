'use strict';

//Tke the numbers between 0 - 20 random. Math.random()*20 will give with decimale numbers.
//to cut down decimle number has to use Math.trunc.

let scretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //when there is no input
  if (!guess) {
    //function created (displayMessage) and called to function.
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');

    //When player wins
  } else if (guess === scretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = scretNumber;

    //change the BG color and size on css
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Setting up HighScore

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when guess is wrong
  else if (guess !== scretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > scretNumber ? 'Too high' : 'Too low';
      displayMessage(guess > scretNumber ? 'Too high' : 'Too low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you loose the game! ;(';
      displayMessage('you loose the game! ;(');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  //when guess is too high
  //   else if (guess > scretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you loose the game! ;(';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }

  //     //when guess is too low
  //   } else if (scretNumber > guess) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you loose the game! ;(';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //   }
});

//Reset function (Again)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing... ';
  displayMessage('Start guessing... ');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
