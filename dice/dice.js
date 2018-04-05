const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log (getRandomInt(1, 12))
const throwDices = () => {
  const Dice1 = getRandomInt(1, 2)
  const Dice2 = getRandomInt(1, 2)  
  const resultTwoDices = Dice1 + Dice2
  const diceElement = document.querySelectorAll('resultDice')
  diceElement.innerHTML  = `
  <div><span class="dice">${Dice1}</span> + 
  <span class="dice">${Dice2}</span></div>
  `
}

console.log(throwDices())
const throwDiceElement = document.querySelectorAll('throwDices')
throwDiceElement.addEventListener('click', throwDices)