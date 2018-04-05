fetch(
  "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/appearance.json"
).then(response => response.json())

//get a reference to the stage
var stage = document.querySelector("#stage")

//the 2d array that defines the board
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

//the size of each cell
var SIZE = 100

//the space between each cell
var SPACE = 5

//display the array
var ROWS = board.length
var COLUMNS = board[0].length

for (var row = 0; row < ROWS; row++) {
  for (var column = 0; column < COLUMNS; column++) {
    //create a div HTML element called cell
    var cell = document.createElement("div")

    //set its CSS class to cell
    cell.setAttribute("id", `cell${row}${column}`)
    cell.setAttribute("class", `cell`)

    //add the div HTML element to the stage
    stage.appendChild(cell)

    //position the cell
    cell.style.top = row * (SIZE + SPACE) + "px"
    cell.style.left = column * (SIZE + SPACE) + "px"
  }
}
