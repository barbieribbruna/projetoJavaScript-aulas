// import { Stack } from "../aula07 - Estrutura de Dados/Stack"

// const pilha = new Stack<string>()

// pilha.push("")

// // function nome(argumento: tipo, argumento:tipo,...): tipo_de_retorno {
// //    // Corpo da função
// // }

//     // argumento precisa ser number, boolean, string
//     // todas as funções terão um tipo de retorno (true/false, 64 bits, string, any, void (não existe null como está na documentação 14))
//      // no TS evita-se usar - any ("qualquer coisa)")


// DECLARAÇÃO DE FUNÇÃO

export function somar(a: number, b: number): number { // declara uma função chamada "somar" que recebe dois parâmetros numéricos (a e b) e retorna um valor do tipo número (a soma de a e b)
    // lógica da função

    let resultado: number = a + b   // 2 + 2 => resultado = 4

    return resultado // a função, depois de somar, retorna resultado (number)
                    // return é usado sempre que não é usado any, void, null; se usado um desses três, não precisa ser usado
}

export function logar(usuario: number | string): void { // declara uma função chamada "logar" que recebe um parâmetro "usuario", que pode ser do tipo número ou string, e não retorna nenhum valor (void)
    
    if (typeof(usuario) === "number") // verifica se o tipo do valor armazenado em "usuario" é um número // typeof sempre retorna string
        console.log("\nVocê está acessando o Instagram pelo seu celular.");
    else
        console.log("\nVocê está acessando o Instagram pelo seu e-mail.");
}

export function transformarNumeroEmExtenso(valor: number): string {
    let texto: string
    if(valor === 5) {
        texto = "Valor digitado é cinco"
    }else{
        texto = "Você digitou um número diferente de cinco"
    }
    return texto

}


