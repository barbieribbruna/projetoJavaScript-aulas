// importando a biblioteca
const leia = require('readline-sync') // acessa a biblioteca instalada, passando as informações dela para a const leia

// declaração de variável
let idade

// entrada de dados
console.log("Digite sua idade: ")
idade = leia.questionInt()

// idade = leia.questionInt("Digite sua idade: ") # outra opção de entrada de dados

// processamento de dados - IF

if (idade < 18){ // executa alguma ação caso a condição seja verdadeira
    console.log("Você não pode dirigir.")
}


