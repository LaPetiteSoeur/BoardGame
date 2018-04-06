import { createBoard } from './board.js'

const baseUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api'

const getHeroes = () => fetch(`${baseUrl}/all.json`)
  .then(response => response.json())

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const throwDices = () => {
  const Dice1 = getRandomInt(1, 6)
  const Dice2 = getRandomInt(1, 6)
  const resultTwoDices = Dice1 + Dice2
  const diceElement = document.getElementById('resultDice')

  diceElement.innerHTML = `
    <div>
      <span class="dice">${Dice1}</span> + <span class="dice">${Dice2}</span>
    </div>
    <div id="move">Player 1 Moves ${resultTwoDices} steps </div>
  `
}

const createCell = cell => `
  <div class="caseStyle" id="case${cell.position}">
    <img src="${cell.image}"/>
  </div>
`

const setup = board => {
  // generate cells
  const cellsContainer = document.getElementById("case")
  cellsContainer.innerHTML = board.map(createCell).join("")

  // add event on dice click
  const diceElement = document.getElementById('throwDice')
  diceElement.addEventListener('click', throwDices)
}

const init = () => {
  document.getElementById('case0').style.border = "4px solid blue"
}

const start = async () => {
  const heroes = await getHeroes()
  const board = createBoard(heroes)

  setup(board)

  init()
}

// const movePlayer = () => {
//   newPosition = arr.find(s => s.position === (precPosition + resultTwoDices)
// }

start()

// Barre de respect

// 0- départ
// 1- héros (-15)
// 2- vrai ou faux (Si faux, tu bois!)
// 3- shi-fu-mi
// 4- Shots
// 5- abdou (+20)
// 6- yo (-50)
// 7- clément (-25)
// 8- fin
// 9- insulte (-20)

let health = document.getElementById("health")


const addLessHealth = () => {
  if (board.class === 1) {
    health.value -= 15
  } else if (board.class === 5) {
    health.value += 20
  } else if (board.class === 6) {
    health.value -= 50
  } else if (board.class === 7) {
    health.value -= 25
  } else if (board.class === 9) {
    health.value -= 20
  }
}


addLessHealth()

health.addEventListener('click', addLessHealth)
