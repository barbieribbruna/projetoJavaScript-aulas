import { IEscritor } from "./IEscritor"
import { IPintor } from "./IPintor"
import { Pessoa } from "./Pessoa"

export class Estudante extends Pessoa implements IEscritor, IPintor {

    // ATRIBUTOS
    // poderia ter atributos para essa classe específica

    // CONSTRUCTOR
    constructor(nome: string) {
        super(nome)
    }

    // MÉTODOS DE ACESSO
    // poderia ter os métodos de acesso para essa classe específica

    // MÉTODOS AUXILIARES
    public saudacao(): void {
        console.log("Olá, meu nome é " + this.nome)
    }

    public escrever(): void {
        console.log("Escrevendo com o computador...")
    }

    public pintar(): void {
        console.log("Pintando com Giz de Cera...")
    }

}