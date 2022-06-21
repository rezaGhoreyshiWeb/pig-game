"use strict";

// selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRollEl = document.querySelector(".btn--roll");
const btnNewEl = document.querySelector(".btn--new");
const btnHoldEl = document.querySelector(".btn--hold");

// variable
let scores;
let currentScore;
let activePlayer;
let playing;

const initialConditions = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = "0";
  score1El.textContent = "0";
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};

initialConditions();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRollEl.addEventListener("click", function () {
  if (playing) {
    // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //   2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3.Check for rolled 1: if true, switch player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      switchPlayer();
    }
  }
});

btnHoldEl.addEventListener("click", function () {
  if (playing) {
    // add current score to active player score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player score is 100 or more
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }

    // switch player
    switchPlayer();
  }
});

btnNewEl.addEventListener("click", initialConditions);
