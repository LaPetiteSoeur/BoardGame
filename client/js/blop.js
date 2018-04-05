const baseUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api'

const getHeroes = () => fetch(`${baseUrl}/all.json`)
  .then(response => response.json())

const start = async () => {
  const heroes = await getHeroes()

  // console.log(heroes)
console.log(heroes[0].images.lg);

  /* heroes.map(...) */
  const board = [
    { position: 0, image: ``, text: `DEPART`, class: `` },
    { position: 1, image: ``, text: ``, class: `` },
    { position: 2, image: heroes[49].images.lg, text: ``, class: `1` },
    { position: 3, image: ``, text: ``, class: `` },
    { position: 4, image: ``, text: ``, class: `` },
    { position: 5, image: ``, text: ``, class: `` },
    { position: 6, image: heroes[341].images.lg, text: ``, class: `1` },
    { position: 7, image: ``, text: ``, class: `` },
    { position: 8, image: ``, text: ``, class: `` },
    { position: 9, image: heroes[226].images.lg, text: ``, class: `1` },
    { position: 27, image: ``, text: ``, class: `` },
    { position: 28, image: ``, text: ``, class: `` },
    { position: 29, image: heroes[228].images.lg, text: ``, class: `1` },
    { position: 30, image: ``, text: ``, class: `` },
    { position: 31, image: ``, text: ``, class: `` },
    { position: 32, image: ``, text: ``, class: `` },
    { position: 33, image: ``, text: ``, class: `` },
    { position: 34, image: heroes[176].images.lg, text: ``, class: `1` },
    { position: 35, image: ``, text: ``, class: `` },
    { position: 10, image: ``, text: ``, class: `` },
    { position: 26, image: ``, text: ``, class: `` },
    { position: 46, image: heroes[265].images.lg, text: ``, class: `1` },
    { position: 47, image: ``, text: ``, class: `` },
    { position: 48, image: ``, text: ``, class: `` },
    { position: 49, image: ``, text: ``, class: `` },
    { position: 50, image: heroes[307].images.lg, text: ``, class: `1` },
    { position: 51, image: ``, text: ``, class: `` },
    { position: 52, image: ``, text: ``, class: `` },
    { position: 36, image: ``, text: ``, class: `` },
    { position: 11, image: heroes[332].images.lg, text: ``, class: `1` },
    { position: 25, image: ``, text: ``, class: `` },
    { position: 45, image: ``, text: ``, class: `` },
    { position: 58, image: ``, text: `WIN`, class: `` },
    { position: 57, image: heroes[346].images.lg, text: ``, class: `1` },
    { position: 56, image: ``, text: ``, class: `` },
    { position: 55, image: ``, text: ``, class: `` },
    { position: 54, image: heroes[370].images.lg, text: ``, class: `1` },
    { position: 53, image: ``, text: ``, class: `` },
    { position: 37, image: ``, text: ``, class: `` },
    { position: 12, image: ``, text: ``, class: `` },
    { position: 24, image: ``, text: ``, class: `` },
    { position: 44, image: ``, text: ``, class: `` },
    { position: 43, image: heroes[160].images.lg, text: ``, class: `1` },
    { position: 42, image: ``, text: ``, class: `` },
    { position: 41, image: ``, text: ``, class: `` },
    { position: 40, image: ``, text: ``, class: `` },
    { position: 39, image: ``, text: ``, class: `` },
    { position: 38, image: heroes[213].images.lg, text: ``, class: `1` },
    { position: 38, image: ``, text: ``, class: `` },
    { position: 13, image: ``, text: ``, class: `` },
    { position: 23, image: ``, text: ``, class: `` },
    { position: 22, image: ``, text: ``, class: `` },
    { position: 21, image: heroes[385].images.lg, text: ``, class: `1` },
    { position: 20, image: ``, text: ``, class: `` },
    { position: 19, image: ``, text: ``, class: `` },
    { position: 18, image: ``, text: ``, class: `` },
    { position: 17, image: ``, text: ``, class: `` },
    { position: 16, image: heroes[307].images.lg, text: ``, class: `1` },
    { position: 15, image: ``, text: ``, class: `` },
    { position: 14, image: ``, text: ``, class: `` }
  ]
  // console.log(board)
  const creatediv = cell => {
    return `<div class="caseStyle" id="case${cell.position}"><img src="${
      cell.image
    }"/></div>`
  }
  
  const divsContainer = document.getElementById("case")
  divsContainer.innerHTML = board.map(creatediv).join(" ")
  
}

start()


