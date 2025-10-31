const leia = require("readline-sync")

/*let nome1, nome2, nome3

nome1 = leia.question("Digite o primeiro nome: ")
console.log("O 1º nome é: " + nome1)

nome2 = leia.question("Digite o segundo nome: ")
console.log("O 2º nome é: " + nome2)

nome3 = leia.question("Digite o terceiro nome: ")
console.log("O 3º nome é: " + nome3) */

let nome, contador

//enquanto o contador for menor do que 4, ele vai executar essa linha for
for (contador = 1; contador < 4; contador++) { // ++ é operador incremento que é o mesmo que contador = contador + 1, que é o mesmo que contador = contador =+ 1
  nome = leia.question("Digite um nome: ")
  console.log("O " + contador + "º nome digitado foi: " + nome)
}