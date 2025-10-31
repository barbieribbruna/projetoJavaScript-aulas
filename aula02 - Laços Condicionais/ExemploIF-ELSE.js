// importando a biblioteca
const leia = require('readline-sync') // acessa a biblioteca instalada, passando as informações dela para a const leia

// declarando variáveis

let nota1, nota2, media

nota1 = leia.questionFloat("Digite a primeira nota: ")

nota2 = leia.questionFloat("Digite a segunda nota: ")

// processamento de dados
media = (nota1 + nota2) / 2

if(media >= 6){ // executa alguma ação caso a condição seja verdadeira
    console.log("Parabéns, você foi aprovado.")
}

else if (media == 5){ // executa alguma ação caso a condição anterior seja falsa
    console.log("Você está de recuperação.")
}

else{ // executa alguma ação caso todas as condições anteriores sejam falsas
    console.log("Você foi reprovado.")
}