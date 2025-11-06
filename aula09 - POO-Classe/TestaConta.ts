import { Conta } from "./Conta"

// é aqui que o projeto é executado | em Conta.ts é apenas a "estrutura"

export function main() { // torna a função 'main()' disponível para ser importada e usada em outros arquivos

    // INSTÂNCIA DA CLASSE CONTA (INSTANCIAMENTO DE UM OBJETO): é a ação de criar um novo Objeto do mesmo tipo de dado definido em uma Classe
    
    const conta1: Conta = new Conta(12156, 108, 1, "Bruna", 1000000) // esse () é do método constructor e a inserção das informações precisa seguir a sequência do que está lá na Classe

    console.log("Titular da conta: " + conta1.titular)

    conta1.saldo = 15000000

    console.log("Saldo da conta: " + conta1.saldo)

}

main() // chama a função 'main()' para executar o código definido acima