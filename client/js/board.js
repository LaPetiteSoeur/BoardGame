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

export const createBoard = heroes => [
  {position:0, image:`../assets/depart.jpg`, text:`DEPART`, class:`0`},
  {position:1, image: `../assets/TF.png`, text:`Tous les allemands ne sont pas nazis!`, class:`2`},
  {position:2, image:heroes[49].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:3, image:`../assets/PFC.jpg`, text:`Défonce ton voisin de gauche au SHI-FU-MI! Si tu perds, bois 1 gorgée`, class:`3`},
  {position:4, image:`../assets/TF2.jpg`, text:`Les dauphins sont des violeurs`, class:`2`},
  {position:5, image:`../assets/INSULTE.jpg`, text:`Quand j'te vois j'me dis que tes parents on oublié le <head>!`, class:`9`},
  {position:6, image: heroes[341].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:7, image:`../assets/alcool.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:8, image:`../assets/alcool2.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:9, image: heroes[226].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:27, image:`../assets/alcool3.jpg`, text:`Tu bois ! 2 shots !`, class:`4`},
  {position:28, image:`../assets/PFC2.png`, text:`Défonce ton voisin de gauche au SHI-FU-MI! Si tu perds, bois 1 gorgée`, class:`3`},
  {position:29, image: heroes[228].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:30, image:`../assets/alcool4.jpg`, text:`Tu bois ! 3 shots !`, class:`4`},
  {position:31, image:`../assets/TF4.png`, text:`Le pluriel de chacal c'est chacaux`, class:`2`},
  {position:32, image:`../assets/alcool5.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:33, image:`../assets/alcool6.jpg`, text:`Tu bois ! 3 shots !`, class:`4`},
  {position:34, image: heroes[176].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:35, image:`../assets/alcool7.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:10, image:`../assets/alcool8.jpg`, text:`Tu bois ! 3 shots !`, class:`4`},
  {position:26, image:`../assets/alcool10.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:46, image: heroes[265].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:47, image:`../assets/TF6.jpg`, text:`Legolas est une femme`, class:`2`},
  {position:48, image:`../assets/clement.jpg`, text:`Tu perds 15 pts de respouet (^^respet), c kado c magiques`, class:`7`},
  {position:49, image:`../assets/PFC3.jpg`, text:`Défonce ton voisin de gauche au SHI-FU-MI! Si tu perds, bois 1 gorgée`, class:`3`},
  {position:50, image: heroes[307].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:51, image:`../assets/alcool10.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:52, image:`../assets/INSULTE2.jpg`, text:`Bois 3 gorgées fils d'unijambiste.`, class:`9`},
  {position:36, image:`../assets/alcool11.jpg`, text:`Tu bois ! 2 shots !`, class:`4`},
  {position:11, image: heroes[332].images.lg, text:`Tu perds X points et tu bois 2 gorgées.`, class:`1`},
  {position:25, image:`../assets/alcool12.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:45, image:`../assets/abdou.jpg`, text:`C'est normal si vous comprenez pas !! Gagne 20 points de respect !`, class:`5`},
  {position:58, image:`../assets/fin.jpg`, text:`l'alcool est dangereux pour la santé ! Buvez avec modération!`, class:`8`},
  {position:57, image: heroes[346].images.lg, text:``, class:`1`},
  {position:56, image:`../assets/yoann.jpg`, text:`TAIS-TOI ! et retourne à la case départ.`, class:`6`},
  {position:55, image:`../assets/INSULTE3.jpg`, text:`Ton père c'est un marketeux et tu bois 1 shot`, class:`9`},
  {position:54, image: heroes[370].images.lg, text:``, class:`1`},
  {position:53, image:`../assets/alcool13.jpeg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:37, image:`../assets/alcool14.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:12, image:`../assets/INSULTE4.jpg`, text:`Mes couilles sur ton nez! Tu bois!`, class:`9`},
  {position:24, image:`../assets/alcool15.jpg`, text:`Tu bois ! 3 shots !`, class:`4`},
  {position:44, image:`../assets/PFC4.jpg`, text:`Défonce ton voisin de gauche au SHI-FU-MI! Si tu perds, bois 1 gorgée`, class:`3`},
  {position:43, image: heroes[160].images.lg, text:`Tu perds X points et tu bois 2 gorgées.`, class:`1`},
  {position:42, image:`../assets/alcool16.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:41, image:`../assets/TF8.png`, text:`Ta mère en Open Source!`, class:`2`},
  {position:40, image:`../assets/abdou2.jpg`, text:`C'est normal si vous comprenez pas !! Gagne 20 points de respect !`, class:`5`},
  {position:39, image:`../assets/alcool16.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:38, image: heroes[213].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:38, image:`../assets/alcool16.jpg`, text:`Tu bois ! 3 shots !`, class:`4`},
  {position:13, image:`../assets/INSULTE.jpg`, text:`En garde, espèce de vieille pute dégarnie! Tu bois 1 shot!`, class:`9`},
  {position:23, image:`../assets/alcool16.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:22, image:`../assets/alcool16.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
  {position:21, image: heroes[385].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:20, image:`../assets/INSULTE5.jpg`, text:`C'est la piquette jack! Tu bois (de la piquette)!`, class:`9`},
  {position:19, image:`../assets/alcool16.jpg`, text:`Tu bois ! 2 shots !`, class:`4`},
  {position:18, image:`../assets/INSULTE6.jpg`, text:`Ta soeur c'est comme Wow: toute la Chine paye pour aller dessus et tu bois 1 gorgée.`, class:`9`},
  {position:17, image:`../assets/clement2.jpg`, text:`Tu perds 15 pts de respouet (^^respet), c kado c magiques`, class:`7`},,
  {position:16, image: heroes[307].images.lg, text:`Tu perds 15 points et tu bois 2 gorgées.`, class:`1`},
  {position:15, image:`../assets/alcool16.jpg`, text:`Tu bois ! 2 shots !`, class:`4`},
  {position:14, image:`../assets/alcool16.jpg`, text:`Tu bois ! 1 shot !`, class:`4`},
]