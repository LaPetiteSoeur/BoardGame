import { createBoard } from "./board.js"

const baseUrl = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api"

let position = 0

const getHeroes = () =>
  fetch(`${baseUrl}/all.json`).then(response => response.json())

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const healthElement = document.getElementById("health")

const updateHealth = cell => {
  if (cell.class === "1") {
    healthElement.value -= 15
  } else if (cell.class === "5") {
    healthElement.value += 20
  } else if (cell.class === "6") {
    healthElement.value -= 50
  } else if (cell.class === "7") {
    healthElement.value -= 25
  } else if (cell.class === "9") {
    healthElement.value -= 20
  }
}

const setPlayer = position => {
  const elem = document.getElementById(`case${position}`)
  elem.style.border = "4px solid yellow"
}

const unsetPlayer = position => {
  const elem = document.getElementById(`case${position}`)
  elem.style.border = "4px solid transparent"
}

const movePlayer = (board, dice) => {
  const newPosition = position + dice

  if (newPosition >= board.length) {
    unsetPlayer(position)
    setPlayer(59)
    console.log("GG")
    const messageElement = document.getElementById("message")
    messageElement.innerHTML = `
    <p>BRAVO</p>
    <img src="./assets/fin.jpg"/>
  `
    return
  }

  const newCell = board.find(cell => cell.position === newPosition)
  const messageElement = document.getElementById("message")
  messageElement.innerHTML = `
    <p>${newCell.text}</p>
    <img src="${newCell.image}">
  `

  updateHealth(newCell)

  unsetPlayer(position)
  setPlayer(newPosition)

  position = newPosition
}

const throwDices = board => {
  const Dice1 = getRandomInt(1, 3)
  const Dice2 = getRandomInt(1, 3)
  const resultTwoDices = Dice1 + Dice2
  const diceElement = document.getElementById("resultDice")

  movePlayer(board, resultTwoDices)

  diceElement.innerHTML = `
    <div id="move">Player 1 Moves ${resultTwoDices} steps </div>
  `
}

const createCell = cell => `
  <div class="caseStyle" id="case${cell.position}">
    <img src="${cell.image}"/><span id="number">${cell.position + 1}</span>
  </div>
`

const setup = board => {
  // generate cells
  const cellsContainer = document.getElementById("case")
  cellsContainer.innerHTML = board.map(createCell).join("")

  // add event on dice click
  const diceElement = document.getElementById("throwDice")
  diceElement.addEventListener("click", () => throwDices(board))

  // add event for health
  healthElement.addEventListener("click", () => updateHealth(cell))
}

const init = () => {
  setPlayer(0)
  const messageElement = document.getElementById("message")
  messageElement.innerHTML = `
    <p>Welcome</p>
    <img src="./assets/depart.jpg">`
}

const start = async () => {
  const heroes = await getHeroes()
  const board = createBoard(heroes)

  setup(board)

  init()
}

start()
