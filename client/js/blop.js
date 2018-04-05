fetch(
  "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/appearance.json")   
      .then(response => response.json())



const board = [
  { position: 0, image: `IMG_4182.jpg`, text: ``, class: `` },
  { position: 1, image: ``, text: ``, class: `` },
  { position: 2, image: ``, text: ``, class: `` },
  { position: 3, image: ``, text: ``, class: `` },
  { position: 4, image: ``, text: ``, class: `` },
  { position: 5, image: ``, text: ``, class: `` },
  { position: 6, image: ``, text: ``, class: `` },
  { position: 7, image: ``, text: ``, class: `` },
  { position: 8, image: ``, text: ``, class: `` },
  { position: 9, image: ``, text: ``, class: `` },
  { position: 27, image: ``, text: ``, class: `` },
  { position: 28, image: ``, text: ``, class: `` },
  { position: 29, image: ``, text: ``, class: `` },
  { position: 30, image: ``, text: ``, class: `` },
  { position: 31, image: ``, text: ``, class: `` },
  { position: 32, image: ``, text: ``, class: `` },
  { position: 33, image: ``, text: ``, class: `` },
  { position: 34, image: ``, text: ``, class: `` },
  { position: 35, image: ``, text: ``, class: `` },
  { position: 10, image: ``, text: ``, class: `` },
  { position: 26, image: ``, text: ``, class: `` },
  { position: 46, image: ``, text: ``, class: `` },
  { position: 47, image: ``, text: ``, class: `` },
  { position: 48, image: ``, text: ``, class: `` },
  { position: 49, image: ``, text: ``, class: `` },
  { position: 50, image: ``, text: ``, class: `` },
  { position: 51, image: ``, text: ``, class: `` },
  { position: 52, image: ``, text: ``, class: `` },
  { position: 36, image: ``, text: ``, class: `` },
  { position: 11, image: ``, text: ``, class: `` },
  { position: 25, image: ``, text: ``, class: `` },
  { position: 45, image: ``, text: ``, class: `` },
  { position: 58, image: ``, text: ``, class: `` },
  { position: 57, image: ``, text: ``, class: `` },
  { position: 56, image: ``, text: ``, class: `` },
  { position: 55, image: ``, text: ``, class: `` },
  { position: 54, image: ``, text: ``, class: `` },
  { position: 53, image: ``, text: ``, class: `` },
  { position: 37, image: ``, text: ``, class: `` },
  { position: 12, image: ``, text: ``, class: `` },
  { position: 24, image: ``, text: ``, class: `` },
  { position: 44, image: ``, text: ``, class: `` },
  { position: 43, image: ``, text: ``, class: `` },
  { position: 42, image: ``, text: ``, class: `` },
  { position: 41, image: ``, text: ``, class: `` },
  { position: 40, image: ``, text: ``, class: `` },
  { position: 39, image: ``, text: ``, class: `` },
  { position: 38, image: ``, text: ``, class: `` },
  { position: 38, image: ``, text: ``, class: `` },
  { position: 13, image: ``, text: ``, class: `` },
  { position: 23, image: ``, text: ``, class: `` },
  { position: 22, image: ``, text: ``, class: `` },
  { position: 21, image: ``, text: ``, class: `` },
  { position: 20, image: ``, text: ``, class: `` },
  { position: 19, image: ``, text: ``, class: `` },
  { position: 18, image: ``, text: ``, class: `` },
  { position: 17, image: ``, text: ``, class: `` },
  { position: 16, image: ``, text: ``, class: `` },
  { position: 15, image: ``, text: ``, class: `` },
  { position: 14, image: ``, text: ``, class: `` }
]

const creatediv = cell => {
  return `<div class="caseStyle" id="case${cell.position}"><img src="${cell.image}"/></div>`
}

const divsContainer = document.getElementById("case")
divsContainer.innerHTML = board.map(creatediv).join(" ")
