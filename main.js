const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');

const firstCard = 2;
const secondCard = 15;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];

let hasBlackJack = false;
let isAlive = true;
let message = '';

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.innerHTML = "Sum: " + sum;
  cardsEl.innerHTML = `Cards: ${cards[0]} ${cards[1]}`
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.innerHTML = message
}


function newCard() {
  let newCard = 4;
  sum = sum + newCard;
  renderGame();
}