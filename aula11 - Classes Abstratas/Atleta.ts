// essa Classe não poderá ser instanciada, mas apenas herdada
// abstract define que a Classe não pode gerar objetos diretamente (não pode ser instanciada)
// serve apenas de modelo para outras Classes herdarem seus atributos e métodos
// quanto mais genérica for a Classe, mais abstrata ela é
// 'Pessoa' é muito genérico/abstrata
// 'Atleta' também é muito genérico/abstrato
// 'Ciclista' já é mais específico, então deixa a abstratividade (tem suas especificidades e das Classes anteriores)

export abstract class Atleta {  // define a Classe Atleta como abstrata (serve de modelo, não pode ser instanciada diretamente)

    private _nome: string // atributo privado que guarda o nome do atleta

    constructor(nome: string) { // construtor chamado ao criar um objeto da Classe Filha
        this._nome = nome // atribui o valor recebido ao atributo _nome
    }

    // MÉTODOS DE ACESSO - GET E SET

    public get nome() { // permite acessar/ler o valor do atributo _nome de forma segura, inclusive nas Classes Filhas e fora da Classe Abstrata Atleta
        return this._nome // retorna o nome armazenado
    }

    public set nome(nome: string) { // permite alterar o valor do atributo _nome de forma segura, inclusive nas Classes Filhas e fora da Classe Abstrata Atleta
        this._nome = nome // atualiza o atributo _nome com o valor recebido
    }

    // MÉTODOS ABSTRATOS - apenas a assinatura do método, ou seja, como deve ser escrito o método das Classes Filhas

    public abstract aquecer(): void // método abstrato, ou seja, cada Classe Filha é obrigada a implementar sua própria forma de aquecer

    // MÉTODOS AUXILIARES

    public visualizar(): void { // método comum (concreto) para mostrar os dados da pessoa atleta no console
        console.log("***************************************")
        console.log("           Dados da Pessoa             ")
        console.log("***************************************")
        console.log("Nome da pessoa: ", this._nome)
    }

}
