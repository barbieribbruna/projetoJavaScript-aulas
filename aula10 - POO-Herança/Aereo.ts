import { Transporte } from "./Transporte"

export class Aereo extends Transporte { // Classe Filha | Subclasse

    // ATRIBUTOS ESPECÍFICOS DE TRANSPORTE TERRESTRE
    // private é um atributo que só pode ser acessado dentro da própria classe

    private _modalAereo: string // identifica o tipo de modal aéreo
    private _altitudeMaxima: number // altitude máxima atingida (em metros)
    private _autonomiaVoo: number // tempo ou distância que consegue voar sem reabastecer (em km)

    // MÉTODO CONSTRUTOR
    // inicializa os atributos específicos do transporte 'aéreo'

    constructor (capacidade: number, modalAereo: string, altitudeMaxima: number, autonomiaVoo: number) {

        super(capacidade) // chama o construtor da Classe Mãe (Transporte) e envia o valor de 'capacidade' para inicializar o atributo herdado
        this._modalAereo = modalAereo // modal aéreo
        this._altitudeMaxima = altitudeMaxima // altitude máxima do voo
        this._autonomiaVoo = autonomiaVoo // autonomia do voo

    }

    // METODOS DE ACESSO (GET/SET)

    public get modalAereo() {
        return this._modalAereo
    }

    public set modalAereo(modalAereo: string) {
        this._modalAereo = modalAereo
    }

    public get altitudeMaxima() {
        return this._altitudeMaxima
    }

    public set altitudeMaxima(altitudeMaxima: number) {
        this._altitudeMaxima = altitudeMaxima
    }

    public get autonomiaVoo() {
        return this._autonomiaVoo
    }

    public set autonomiaVoo(autonomiaVoo: number) {
        this._autonomiaVoo = autonomiaVoo
    }

    // MÉTODO DE SUPORTE E EXIBIÇÃO
    
    public visualizar(): void { 

        super.visualizar() // mostra a 'capacidade' herdada da Classe Mãe
        console.log(`Modal aéreo: ${this.modalAereo}`) // exibe o tipo de transporte aéreo
        console.log(`Altitude máxima: ${this.altitudeMaxima.toFixed(2)} metros`) // exibe a atitude máxima do voo
        console.log(`Autonomia do voo: ${this.autonomiaVoo.toFixed(0)} km`) // exibe a autonomia de voo
    }
}