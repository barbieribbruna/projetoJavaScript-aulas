const leia = require("readline-sync")

let opcao

console.log("Bem-vindo ao nosso menu de opções:")
console.log("\n-- Digite 1 para ver uma indicação de livro --")
console.log("-- Digite 2 para ler uma frase motivacional --")
console.log("-- Digite 3 para receber uma indicação de música --")

opcao = leia.questionInt()

switch (opcao) {
    case 1:
        console.log("Livro: Harry Potter")
        break;

    case 2:
        console.log("Frase motivacional: Você pode ir devagar, mas nunca pare. Quem persiste sempre chega.")
        break;

    case 3:
        console.log("Música: Coldplay - Viva La Vida")
        break;
    
    default:
        console.log("Opção inválida! Digite um número de 1 a 3.");
}
