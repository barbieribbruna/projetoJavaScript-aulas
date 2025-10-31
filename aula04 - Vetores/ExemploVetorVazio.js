const leia = require("readline-sync")

let indice
let vetorInteiros = new Array(5) // Array(5) é o tamanho máximo que o vetor vazio poderá ter

// entrada de info
for (indice = 0; indice < 5; indice++) {
    vetorInteiros[indice] = leia.questionInt(`Digite o número ${indice + 1}: `)
    // vetor[0] = 5 (no vetor[0], o usuário digitou o número 5)
    // vetor[1] = 9 (no vetor[1], o usuário digitou o número 9)
    // vetor[2] = 4 (no vetor[2], o usuário digitou o número 4)
    // vetor[3] = 2 (no vetor[3], o usuário digitou o número 2)
    // vetor[4] = 7 (no vetor[4], o usuário digitou o número 7)
}

// saída
console.log("\nOs números digitados foram: \n")

for (indice = 0; indice < 5; indice++) {
    console.log(`${indice + 1}º número: ${vetorInteiros[indice]}`)
}