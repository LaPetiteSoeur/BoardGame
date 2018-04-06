import { createBoard } from './board.js'

const baseUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api'

let position = 0

const getHeroes = () => fetch(`${baseUrl}/all.json`)
  .then(response => response.json())

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const setPlayer = position => {
  const elem = document.getElementById(`case${position}`)
  elem.style.border = "4px solid blue"
  // elem.style.boxShadow = "inset 0 0 10px blue"
}

const unsetPlayer = position => {
  const elem = document.getElementById(`case${position}`)
  elem.style.border = "4px solid black"
  // elem.style.boxShadow = "inset 0 0 10px black"
}

const movePlayer = (board, dice) => {
  const newPosition = position + dice
  const newCell = board.find(cell => cell.position === newPosition)

  console.log('newPosition:', newPosition)

  unsetPlayer(position)

  position = newPosition

  if (newPosition > board.length) {
    console.log('GG')
    return
  }

  setPlayer(newPosition)
}

const throwDices = board => {
  const Dice1 = getRandomInt(1, 6)
  const Dice2 = getRandomInt(1, 6)
  const resultTwoDices = Dice1 + Dice2
  const diceElement = document.getElementById('resultDice')

  movePlayer(board, resultTwoDices)

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
  diceElement.addEventListener('click', () => throwDices(board))
}

const init = () => {
  setPlayer(0)
}

const start = async () => {
  const heroes = await getHeroes()
  const board = createBoard(heroes)

  setup(board)

  init()
}

console.log(throwDices())
const throwDiceElement = document.getElementById('throwDice')
throwDiceElement.addEventListener('click', throwDices)

start()
