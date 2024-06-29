'use strict';

// .................................PROJECT 01 = GUESS THE NUMBER...........................................................
// Handling Click Events
// Use eventListener to react to something happens on the page

// 1st - Select the element that where the event should happen

//............................................................................................
// DEFINE THE SECRET NUMBER

// Math.trunc to eliminate the decimal point
// +1 because the number only between 0 - 19 with Math.random
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (guessScore) {
  document.querySelector('.score').textContent = guessScore;
};
//.................................................................
// BUILDING THE GAME LOGIC

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  /// Set the first scenario and first scenario always assume there is no input
  if (!guess) {
    displayMessage('No number!');
    //// When player WINS
  } else if (guess === secretNumber) {
    displayMessage('Perfect 💝 Correct!');
    document.querySelector('.number').textContent = secretNumber;

    //// Set the background to GREE when WINS, manipulate CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Change bigger NUMBER box when WINS
    document.querySelector('.number').style.width = '30rem';

    //// Section A
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //// When guess is equal to secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? ' Too High 📈🥲' : ' Too Low 📉🐣'; // using Ternary operator instead of duplicate
      displayMessage(guess > secretNumber ? ' Too High 📈🥲' : ' Too Low 📉🐣');
      score--; // score = score - 1;
      displayScore(score);
    } else {
      displayMessage('You Lost The Game 🤯');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//.................................................................
// SET RESET BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  /// restore the message, score, and empty box
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // Restore the background colour and the box width
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
