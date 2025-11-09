import { Transporte } from "./Transporte"

export class Terrestre extends Transporte { // Classe Filha | Subclasse

	// ATRIBUTOS ESPECÍFICOS DE TRANSPORTE TERRESTRE
	// private é um atributo que só pode ser acessado dentro da própria classe

	private _modalRodoviario: string // identifica o tipo de modal rodoviário (carro, ônibus, caminhão, motocicleta ou bicicleta)
	private _numeroRodas: number
	private _velocidade: number

	// MÉTODO CONSTRUTOR
	// inicializa os atributos específicos do transporte 'terrestre'

	constructor (capacidade: number, modalRodoviario: string, numeroRodas: number, velocidade: number) {

		super(capacidade) // chama o construtor da Classe Mãe (Transporte) e envia o valor de 'capacidade' para inicializar o atributo herdado
		this._modalRodoviario = modalRodoviario
		this._numeroRodas = numeroRodas
		this._velocidade = velocidade

	}

	// METODOS DE ACESSO (GET/SET)

	public get modalRodoviario() {
		return this._modalRodoviario
	}

	public set modalRodoviario(modalRodoviario: string) {
		this._modalRodoviario = modalRodoviario
	}

	public get numeroRodas() {
		return this._numeroRodas
	}

	public set numeroRodas(numeroRodas: number) {
		this._numeroRodas = numeroRodas
	}

	public get velocidade() {
		return this._velocidade
	}

	public set velocidade(velocidade: number) {
		this._velocidade = velocidade
	}

	// MÉTODO DE SUPORTE E EXIBIÇÃO
    
	public visualizar(): void { 

        super.visualizar() // mostra a 'capacidade' herdada da Classe Mãe
		console.log(`Modal rodoviário (estradas e ruas): ${this.modalRodoviario}`) // exibe o tipo de transporte rodoviário
        console.log(`Número de rodas: ${this.numeroRodas}`) // exibe o número de rodas do transporte terrestre
        console.log(`Velocidade máxima: ${this.velocidade.toFixed(2)} km/h`) // exibe a velocidade formatada com 2 casas decimais
    }

}



























// export class Terrestre extends Transporte { // Classe Filha | Subclasse

//     private _numeroRodas: number
// 	private _velocidade: number

//     constructor(capacidade: number, numeroRodas: number, velocidade: number) {
// 		super(capacidade) // chama o construtor da Classe Mãe (Transporte) e passa o valor de capacidade para inicializar o atributo herdado
// 		this._numeroRodas = numeroRodas
// 		this._velocidade = velocidade
// 	}

//     public get numeroRodas() {
// 		return this._numeroRodas;
// 	}

// 	public set numeroRodas(numeroRodas: number) {
// 		this._numeroRodas = numeroRodas;
// 	}

// 	public get velocidade() {
// 		return this._velocidade;
// 	}

// 	public set velocidade(velocidade: number) {
// 		this._velocidade = velocidade;
// 	}

// 	public visualizar(): void { // método público chamado 'visualizar', que não retorna nada (void)
		
//         super.visualizar() /* referência direta à super (= Super Classe/Classe Mãe = line 29), ou seja,
//                             ô 'Transporte', chama seu 'visualizar()' aqui; isso permite mostrar também as informações herdadas da Classe Mãe */        
//         console.log("Número de rodas: " + this.numeroRodas) // exibe no console o número de rodas do transporte terrestre
//         //console.log(`Velocidade "${'bike'}" é de ${bike.capacidade} pessoas.`)
// 		console.log("Velocidade: " + this.velocidade.toFixed(2)) // exibe a velocidade formatada com 2 casas decimais
// 	}

// }