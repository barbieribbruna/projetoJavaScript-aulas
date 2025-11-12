import readline = require("readline-sync")
import { dividir } from "./Funcoes"
import { ExcecaoSimples } from "./exceptions/ExcecaoSimples"


export function main() {

    let resultado: number | null

    try {
        let numero1: number = readline.questionFloat("Digite o primeiro numero: ")
        let numero2: number = readline.questionFloat("Digite o segundo numero: ")

        resultado = dividir(numero1, numero2)

        console.log("O Resultado da divisão é: " + resultado)

    } catch (err) {
        if (err instanceof ExcecaoSimples) {
            console.error("Exceção Simples:", err.message) // só a mensagem
        } else if (err instanceof Error) {
            console.error("Erro inesperado:", err.message)   // sem stack
        } else {
            console.error("Erro desconhecido.")
        }
        return; // não relança
    }
}

main()