import { Estudante } from "./Estudante"

export function main() {

    const estudante: Estudante = new Estudante('Bruna')

    // método herdado da Classe Pessoa
    estudante.visualizar()

    // método específico da Classe Estudante
    estudante.saudacao()

    // método implementado através das Interfaces
    estudante.escrever()
    estudante.pintar()

}

main()