import { createBoard } from "./board.js"

const baseUrl = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api"

const getHeroes = () =>
  fetch(`${baseUrl}/all.json`).then(response => response.json())

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const throwDices = () => {
  const Dice1 = getRandomInt(1, 6)
  const Dice2 = getRandomInt(1, 6)
  const resultTwoDices = Dice1 + Dice2
  const diceElement = document.getElementById("resultDice")

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

const healthElement = document.getElementById("health")

const updateHealth = cell => {
  if (cell.class === '1') {
    healthElement.value -= 15
  } else if (cell.class === '5') {
    healthElement.value += 20
  } else if (cell.class === '6') {
    healthElement.value -= 50
  } else if (cell.class === '7') {
    healthElement.value -= 25
  } else if (cell.class === '9') {
    healthElement.value -= 20
  }
}

const setup = board => {
  // generate cells
  const cellsContainer = document.getElementById("case")
  cellsContainer.innerHTML = board.map(createCell).join("")

//   document
//     .getElementById(`case`)
//     .addEventListener("click", () => {
//       const divText = document.getElementById("history")
//       divText.innerHTML = board[].text
//     })

//   //   }

  // add event on dice click

  const diceElement = document.getElementById('throwDice')
  diceElement.addEventListener('click', throwDices)

  // health handler
  const pos = 2
  const cell = board[pos]
  updateHealth(cell)

  healthElement.addEventListener('click', () => updateHealth(cell))

}

const init = () => {
  document.getElementById("case0").style.border = "4px solid blue"
}

const start = async () => {
  const heroes = await getHeroes()
  const board = createBoard(heroes)

  setup(board)

  init()
}


start()
