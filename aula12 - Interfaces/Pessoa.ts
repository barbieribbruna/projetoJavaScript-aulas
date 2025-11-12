export abstract class Pessoa { // define a Classe Atleta como abstrata (serve de modelo, não pode ser instanciada diretamente)

private _nome: string // atributo privado que guarda o nome do atleta

    constructor (nome: string) { // construtor chamado ao criar um objeto da Classe Filha
        this._nome = nome // atribui o valor recebido ao atributo _nome
    }

    // MÉTODOS DE ACESSO - GET E SET

    public get nome(){ // permite acessar/ler o valor do atributo _nome de forma segura, inclusive nas Classes Filhas e fora da Classe Abstrata Atleta
        return this._nome // retorna o nome armazenado
    }

    public set nome(nome: string) { // permite alterar o valor do atributo _nome de forma segura, inclusive nas Classes Filhas e fora da Classe Abstrata Atleta
        this._nome = nome // atualiza o atributo _nome com o valor recebido
    }

    // MÉTODOS AUXULIARES

    public visualizar(): void { // método comum (concreto) para mostrar os dados da pessoa atleta no console
        console.log("***************************************")
        console.log("           Dados da Pessoa             ")
        console.log("***************************************")
        console.log("Nome da pessoa: ", this._nome)
    }
}