export class Transporte { // é a super Classe - Classe Mãe

    // ATRIBUTOS DA CLASSE
    // private indica que o atributo (informação) só é acessível dentro da Classe (export class Conta)
    // atributo deve ser sempre privado e colocado na Classe

    private _capacidade: number // atributo que representa a quantidade máxima suportada pelo meio de transporte

    // MÉTODO CONSTRUTOR
    // inicializa os atributos quando o objeto é criado

    constructor(capacidade: number) {
        this._capacidade = capacidade
    }

    // MÉTODOS DE ACESSO - GET/SET

    public get capacidade() {
        return this._capacidade
    }

    public set capacidade(novaCapacidade: number) { // define (altera) o valor do atributo privado '_capacidade'
        this._capacidade = novaCapacidade // atribui ao atributo 'tipo_Transporte' o novo valor recebido como parâmetro
    }

    // MÉTODO DE SUPORTE

    public visualizar(): void {        
      
        console.log(`Capacidade: ${this.capacidade} passageiros`)
        
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     private _capacidade: number


//     // MÉTODO CONSTRUTOR
//     // inicializa os atributos quando o objeto é criado

//     constructor(capacidade: number) { // constructor é sempre escrito dentro da Classe
//         this._capacidade = capacidade
//     }

//     // MÉTODOS DE ACESSO - GETTERS (GET) e SETTERS (SET)
//     // como esses itens que estão privados podem ser usados de forma segura

//     public get capacidade() { // permite acessar o valor de forma controlada
//         return this._capacidade // retorna o valor do atributo _capacidade
//     }

//     public set capacidade(novaCapacidade: number) { // atualiza, de forma segura, o atributo _capacidade | método público chamado ao atribuir um valor
//         this._capacidade = novaCapacidade // guarda o valor no atributo _capacidade privado
//     }

//     // MÉTODOS DE SUPORTE/AUXILIARES

//     public visualizar(): void {
		
// 		console.log("\n\n************************************************************")
// 		console.log("Dados do meio de transporte:")
// 		console.log("****************************************************************")
// 		console.log("Capacidade (número de passageiros): " + this.capacidade) /* exibe a capacidade do transporte (nº de passageiros),
//                                                                             acessando o valor de forma segura por meio do get public get capacidade() */
// 	}
// }



