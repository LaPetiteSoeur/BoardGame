fetch(
  "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/appearance.json"
).then(response => response.json())

//get a reference to the stage
var stage = document.querySelector("#stage")

//the 2d array that defines the board
var board = [0,
1,
2,
3,
4,
5,
6,
7,
8,
9,
27,
28,
29,
30,
31,
32,
33,
34,
35,
10,
26,
46,
47,
48,
49,
50,
51,
52,
36,
11,
25,
45,
58,
57,
56,
55,
54,
53,
37,
12,
24,
44,
43,
42,
41,
40,
39,
38,
38,
13,
23,
22,
21,
20,
19,
18,
17,
16,
15,
14
]

for (const b of board) {
  `<div>'hello'<div>`
  if (b % 10) {
    <br>
  }
}

// //the size of each cell
// var SIZE = 100
//
// //the space between each cell
// var SPACE = 5
//
// //display the array
// var ROWS = board.length
// var COLUMNS = board[0].length
//
// for (var row = 0; row < ROWS; row++) {
//   for (var column = 0; column < COLUMNS; column++) {
//     //create a div HTML element called cell
//     var cell = document.createElement("div")
//
//     //set its CSS class to cell
//     cell.setAttribute("id", `cell${row}${column}`)
//     cell.setAttribute("class", `cell`)
//
//     //add the div HTML element to the stage
//     stage.appendChild(cell)
//
//     //position the cell
//     cell.style.top = row * (SIZE + SPACE) + "px"
//     cell.style.left = column * (SIZE + SPACE) + "px"
//   }
// }
