fetch(
  "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/appearance.json"
).then(response => response.json())


// class : type
// 0- départ 
// 1- héros 
// 2- questions 
// 3- shi-fu-mi 
// 4- Shots 
// 5- abdou 
// 6- yo 
// 7- clément
// 8- fin 

const board = [
  {position:0, image:``, text:`DEPART`, class:`0`},
  {position:1, image:``, text:``, class:`2`},
  {position:2, image:``, text:``, class:`1`},
  {position:3, image:``, text:``, class:`3`},
  {position:4, image:``, text:``, class:`2`},
  {position:5, image:``, text:``, class:`4`},
  {position:6, image:``, text:``, class:`1`},
  {position:7, image:``, text:``, class:`4`},
  {position:8, image:``, text:``, class:`4`},
  {position:9, image:``, text:``, class:`1`},
  {position:27, image:``, text:``, class:`4`},
  {position:28, image:``, text:``, class:`3`},
  {position:29, image:``, text:``, class:`1`},
  {position:30, image:``, text:``, class:`4`},
  {position:31, image:``, text:``, class:`2`},
  {position:32, image:``, text:``, class:`4`},
  {position:33, image:``, text:``, class:`4`},
  {position:34, image:``, text:``, class:`1`},
  {position:35, image:``, text:``, class:`4`},
  {position:10, image:``, text:``, class:`4`},
  {position:26, image:``, text:``, class:`4`},
  {position:46, image:``, text:``, class:`1`},
  {position:47, image:``, text:``, class:`2`},
  {position:48, image:``, text:``, class:`7`},
  {position:49, image:``, text:``, class:`3`},
  {position:50, image:``, text:``, class:`1`},
  {position:51, image:``, text:``, class:`4`},
  {position:52, image:``, text:``, class:`2`},
  {position:36, image:``, text:``, class:`4`},
  {position:11, image:``, text:``, class:`1`},
  {position:25, image:``, text:``, class:`4`},
  {position:45, image:``, text:``, class:`5`},
  {position:58, image:``, text:`WIN`, class:`8`},
  {position:57, image:``, text:``, class:`1`},
  {position:56, image:``, text:``, class:`6`},
  {position:55, image:``, text:``, class:`3`},
  {position:54, image:``, text:``, class:`1`},
  {position:53, image:``, text:``, class:`4`},
  {position:37, image:``, text:``, class:`4`},
  {position:12, image:``, text:``, class:`2`},
  {position:24, image:``, text:``, class:`4`},
  {position:44, image:``, text:``, class:`3`},
  {position:43, image:``, text:``, class:`1`},
  {position:42, image:``, text:``, class:`4`},
  {position:41, image:``, text:``, class:`2`},
  {position:40, image:``, text:``, class:`4`},
  {position:39, image:``, text:``, class:`4`},
  {position:38, image:``, text:``, class:`1`},
  {position:38, image:``, text:``, class:`4`},
  {position:13, image:``, text:``, class:`2`},
  {position:23, image:``, text:``, class:`4`},
  {position:22, image:``, text:``, class:`4`},
  {position:21, image:``, text:``, class:`1`},
  {position:20, image:``, text:``, class:`2`},
  {position:19, image:``, text:``, class:`4`},
  {position:18, image:``, text:``, class:`2`},
  {position:17, image:``, text:``, class:`4`},
  {position:16, image:``, text:``, class:`1`},
  {position:15, image:``, text:``, class:`4`},
  {position:14, image:``, text:``, class:`4`},
]

const creatediv = cell => {
return `<div class="caseStyle"><img src="${cell.image}"/></div>`
}

const divsContainer = document.getElementById('case')
divsContainer.innerHTML = board
.map(creatediv)
.join(" ")
