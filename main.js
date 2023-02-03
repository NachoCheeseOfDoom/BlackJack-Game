const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const alertsEl = document.querySelector(".alert");


let sum = 0;
let cards = [];

let hasBlackJack = false;
let isAlive = false;
let message = '';

let player = {
  name: "Nacho",
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


console.log(cards)

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11
  } else if (randomCard > 10) {
    return 10
  }
  return randomCard;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard;
  renderGame();
  alertsEl.style.display = 'none';

}

function renderGame() {
  cardsEl.textContent = `Cards: `
  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerHTML += cards[i] + " ";
  }

  sumEl.innerHTML = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    hasBlackJack = false;
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    player.chips += 1000;
    playerEl.textContent = player.name + ": $" + player.chips
  } else {
    message = ''
    alertsEl.style.display = 'block';
    isAlive = false;
  }
  messageEl.innerHTML = message
}


function newCard() {
  if (isAlive && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard)
    console.log(cards)
    renderGame();
  } else {

  }
}
