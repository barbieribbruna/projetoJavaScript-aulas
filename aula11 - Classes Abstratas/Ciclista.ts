import { Atleta } from "./Atleta"

export class Ciclista extends Atleta {

    // em 'constructor' de Ciclista não é preciso get/set por não ter construção específica da Classe
    constructor(nome: string) {
        super(nome)
    }

    // IMPLEMENTAÇÃO DO MÉTODO ABSTRATO DA CLASSE MÃE

    public aquecer(): void { // implementar a lógica
        console.log("Forma de aquecer: Alongamento")
    }

    // MÉTODO ESPECÍFICO DA CLASSE 'NADADOR'

    public pedalar(): void {
        console.log("O que está fazendo no seu esporte? Pedalando")
    }
}