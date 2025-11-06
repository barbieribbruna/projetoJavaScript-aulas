import { logar, somar, transformarNumeroEmExtenso } from "./Exemplo1"


// CHAMADA DAS FUNÇÕES
let valor: number = somar(7, 12) // cria uma variável chamada "valor" do tipo número e armazena nela o resultado da função somar(7, 12)
let valor1: number = somar(6, 11)

let login: string | number = "seuemail@seuemail.com"

console.log("O resultado da sua adição é " + valor)
console.log("O resultado da sua adição é " + valor1)

logar(login)

let numeroEmTexto: string = transformarNumeroEmExtenso(5)
console.log(numeroEmTexto)