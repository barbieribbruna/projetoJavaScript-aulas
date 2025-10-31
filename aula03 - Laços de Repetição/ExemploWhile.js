const leia = require("readline-sync")

let continua = true
let numero1, numero2, resultado

while (continua) { // é executado até que seja true(y) e quando for false(n) ele para de executar
    numero1 = leia.questionInt("Digite primeiro valor: ")

    numero2 = leia.questionInt("Digite segundo valor: ")

    resultado = numero1 + numero2

    console.log("O resultado da soma é: " + resultado)

    console.log("\n++++++++++++++++MENU++++++++++++++++++")
    continua = leia.keyInYNStrict("\nDeseja continuar? ") // keyInYNStrict: opção de leitura do readline-sync em booleano
    console.log("++++++++++++++++++++++++++++++++++")
}