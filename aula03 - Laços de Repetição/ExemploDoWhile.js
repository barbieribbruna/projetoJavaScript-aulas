const leia = require("readline-sync")

let numero, resultado, contador = 3

do { // o código dentro do bloco será executado pelo menos uma vez, independentemente da condição ser verdadeira ou falsa inicialmente
    
    numero = leia.questionInt("\nDigite um numero inteiro: ")

    resultado = numero * 5

    console.log("\nO resultado da multiplicação é: " + resultado)

}

while (contador <= 2)