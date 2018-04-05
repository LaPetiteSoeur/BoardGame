const baseUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api'

const getHeroes = () => fetch(`${baseUrl}/all.json`)
  .then(response => response.json())

const start = async () => {
  const heroes = await getHeroes()

  // console.log(heroes)
console.log(heroes[0].images.lg);

// class : type
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

  const board = [
    {position:0, image:``, text:`DEPART`, class:`0`},
    {position:1, image: heroes[49].images.lg, text:`Tous les allemands ne sont pas nazis!`, class:`2`},
    {position:2, image:``, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:3, image:``, text:`Défonce ton voisin de gauche au SHI-FU-MI! Si tu perds, bois 1 gorgée`, class:`3`},
    {position:4, image:``, text:`Les dauphins sont des violeurs`, class:`2`},
    {position:5, image:``, text:`Quand j'te vois j'me dis que tes parents on oublié le <head>!`, class:`9`},
    {position:6, image: heroes[341].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:7, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:8, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:9, image: heroes[226].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:27, image:``, text:`Tu bois ! 2 shots !`, class:`4`},
    {position:28, image:``, text:`Défonce ton voisin de gauche au SHI-FU-MI! Si tu perds, bois 1 gorgée`, class:`3`},
    {position:29, image: heroes[228].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:30, image:``, text:`Tu bois ! 3 shots !`, class:`4`},
    {position:31, image:``, text:`Le pluriel de chacal c'est chacaux`, class:`2`},
    {position:32, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:33, image:``, text:`Tu bois ! 3 shots !`, class:`4`},
    {position:34, image: heroes[176].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:35, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:10, image:``, text:`Tu bois ! 3 shots !`, class:`4`},
    {position:26, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:46, image: heroes[265].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:47, image:``, text:`Legolas est une femme`, class:`2`},
    {position:48, image:``, text:`Tu perds 15 pts de respouet (^^respet), c kado c magiques`, class:`7`},
    {position:49, image:``, text:`Défonce ton voisin de gauche au SHI-FU-MI! Si tu perds, bois 1 gorgée`, class:`3`},
    {position:50, image: heroes[307].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:51, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:52, image:``, text:`Bois 3 gorgées fils d'unijambiste.`, class:`9`},
    {position:36, image:``, text:`Tu bois ! 2 shots !`, class:`4`},
    {position:11, image: heroes[332].images.lg, text:`Tu perds X points et tu bois 2 gorgées.`, class:`1`},
    {position:25, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:45, image:``, text:`C'est normal si vous comprenez pas !! Gagne 20 points de respect !`, class:`5`},
    {position:58, image:``, text:`l'alcool est dangereux pour la santé ! Buvez avec modération!`, class:`8`},
    {position:57, image: heroes[346].images.lg, text:``, class:`1`},
    {position:56, image:``, text:`TAIS-TOI ! et retourne à la case départ.`, class:`6`},
    {position:55, image:``, text:`Ton père c'est un marketeux et tu bois 1 shot`, class:`9`},
    {position:54, image: heroes[370].images.lg, text:``, class:`1`},
    {position:53, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:37, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:12, image:``, text:`Mes couilles sur ton nez! Tu bois!`, class:`9`},
    {position:24, image:``, text:`Tu bois ! 3 shots !`, class:`4`},
    {position:44, image:``, text:`Défonce ton voisin de gauche au SHI-FU-MI! Si tu perds, bois 1 gorgée`, class:`3`},
    {position:43, image: heroes[160].images.lg, text:`Tu perds X points et tu bois 2 gorgées.`, class:`1`},
    {position:42, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:41, image:``, text:`Ta mère en Open Source!`, class:`2`},
    {position:40, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:39, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:38, image: heroes[213].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:38, image:``, text:`Tu bois ! 3 shots !`, class:`4`},
    {position:13, image:``, text:`En garde, espèce de vieille pute dégarnie! Tu bois 1 shot!`, class:`9`},
    {position:23, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:22, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:21, image: heroes[385].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:20, image:``, text:`C'est la piquette jack! Tu bois (de la piquette)!`, class:`9`},
    {position:19, image:``, text:`Tu bois ! 2 shots !`, class:`4`},
    {position:18, image:``, text:`Ta soeur c'est comme Wow: toute la Chine paye pour aller dessus et tu bois 1 gorgée.`, class:`9`},
    {position:17, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
    {position:16, image: heroes[307].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
    {position:15, image:``, text:`Tu bois ! 2 shots !`, class:`4`},
    {position:14, image:``, text:`Tu bois ! 1 shot !`, class:`4`},
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

// DICE MODULE

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
  diceElement.innerHTML  = `
  <div><span class="dice">${Dice1}</span> + 
  <span class="dice">${Dice2}</span></div>
  <div id="move">Player 1 Moves ${resultTwoDices} steps </div>
  `
}

console.log(throwDices())
const throwDiceElement = document.getElementById('throwDice')
throwDiceElement.addEventListener('click', throwDices)

start()
