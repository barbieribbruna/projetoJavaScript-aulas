// importando a biblioteca
const leia = require('readline-sync') // acessa a biblioteca instalada, passando as informações dela para a const leia

// variáveis
let celsius, fahrenheit

// entrada de dados
celsius = leia.questionFloat("Insira a temperatura em Celsius: ")

// processamento de dados
fahrenheit = celsius * 1.8 + 32

// saída de dados
console.log("A temperatura em fahrenheit é " + fahrenheit)
console.log("A temperatura em fahrenheit é %f", fahrenheit)