// importando a biblioteca
const leia = require('readline-sync') // acessa a biblioteca instalada, passando as informações dela para a const leia

// declarando variáveis
let nome, distancia

// entrada de dados
console.log("Digite o seu nome: ") // avisa o usuário (é uma saída)
nome = leia.question() // a informação será lida e guardada na variável nome

console.log("\nDigite a distância percorrida em sua corrida: ")
distancia = leia.questionFloat() // a informação será lida e guardada na variável distancia

// saída de dados
console.log("\nBom dia, " + nome + '.')
console.log("\nA distância percorrida foi de " + distancia + "km.")