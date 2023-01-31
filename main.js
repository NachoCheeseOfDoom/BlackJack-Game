const firstCard = -20;
const secondCard = 19;
let sum = firstCard + secondCard;
console.log(sum)

if (sum < 21) {
  console.log("Do you want to draw a new card?")
} else if (sum === 21) {
  console.log('congrats 🥳');
} else {
  console.log('😢')
}