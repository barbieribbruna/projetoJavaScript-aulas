import { Transporte } from "./Transporte"

export class Aquatico extends Transporte { // Classe Filha | Subclasse

    // ATRIBUTOS ESPECÍFICOS DE TRANSPORTE TERRESTRE
	// private é um atributo que só pode ser acessado dentro da própria classe

	private _modalAquatico: string // identifica o tipo de modal aquático
	private _comprimento: number
	private _tipoPropulsao: string

	// MÉTODO CONSTRUTOR
	// inicializa os atributos específicos do transporte 'aquático'

	constructor (capacidade: number, modalAquatico: string, comprimento: number, tipoPropulsao: string) {

		super(capacidade) // chama o construtor da Classe Mãe (Transporte) e envia o valor de 'capacidade' para inicializar o atributo herdado
		this._modalAquatico = modalAquatico // modal aquático
		this._comprimento = comprimento // comprimento da embarcação em metros
		this._tipoPropulsao = tipoPropulsao // tipo de propulsão: motor, vela, remo, submersão, etc

	}

	// METODOS DE ACESSO (GET/SET)

	public get modalAquatico() {
		return this._modalAquatico
	}

	public set modalAquatico(modalAquatico: string) {
		this._modalAquatico = modalAquatico
	}

	public get comprimento() {
		return this._comprimento
	}

	public set comprimento(comprimento: number) {
		this._comprimento = comprimento
	}

	public get tipoPropulsao() {
		return this._tipoPropulsao
	}

	public set tipoPropulsao(tipoPropulsao: string) {
		this._tipoPropulsao = tipoPropulsao
	}

	// MÉTODO DE SUPORTE E EXIBIÇÃO
    
	public visualizar(): void { 

        super.visualizar() // mostra a 'capacidade' herdada da Classe Mãe
        console.log(`Modal aquático: ${this.modalAquatico}`) // exibe o tipo de transporte aquático
        console.log(`Comprimento: ${this.comprimento.toFixed(2)} metros`) // exibe o comprimento da embarcação
        console.log(`Tipo de propulsão: ${this.tipoPropulsao}`) // exibe o tipo de propulsão usada
    }
}