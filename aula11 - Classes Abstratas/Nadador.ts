import { Atleta } from "./Atleta"

export class Nadador extends Atleta {

    // em 'constructor' de Nadador não é preciso get/set por não ter construção específica da Classe
    constructor(nome: string) {
        super(nome)
    }

    // IMPLEMENTAÇÃO DO MÉTODO ABSTRATO DA CLASSE MÃE

    public aquecer(): void { // implementar a lógica
        console.log("Forma de aquecer: Polichinelo")
    }

    // MÉTODO ESPECÍFICO DA CLASSE 'NADADOR'

    public nadar(): void {
        console.log("O que está fazendo no seu esporte? Nadando")
    }
}