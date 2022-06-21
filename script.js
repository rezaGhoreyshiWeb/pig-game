"use strict";

// selecting Elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRollEl = document.querySelector(".btn--roll");
const btnNewEl = document.querySelector(".btn--new");
const btnHoldEl = document.querySelector(".btn--hold");

// starting conditions
score0El.textContent = "0";
score1El.textContent = "0";
diceEl.classList.add("hidden");

// variable
let currentScore = 0;

// Rolling dice functionality
btnRollEl.addEventListener("click", function () {
  // 1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3.Check for rolled 1: if true, switch player
  if (dice !== 1) {
    currentScore += dice;
    currentScore0El.textContent = currentScore; //change later
  } else {
  }
});
