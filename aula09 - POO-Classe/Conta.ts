export class Conta {

    // MODIFICADORES: públic (padrão), private e protect e podem ser usados em atributos e métodos

    // ATRIBUTOS DA CLASSE
    // private indica que o atributo (informação) só é acessível dentro da Classe (export class Conta)
    // encapsulamento é proteger os dados da Classe, permitindo acesso controlado apenas por métodos

    private _numero: number // atributo privado (encapsulado)
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    // MÉTODO CONSTRUTOR
    // inicializa os atributos quando o objeto é criado

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) { // constructor é sempre escrito dentro da Classe
        this._numero = numero // this => "essa" Conta (da classe atual (class Conta)) | pode ser usado dentro de toda a Classe, não necessariamente no constructor
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }

    // MÉTODOS DE ACESSO - GETTERS (GET) e SETTERS (SET)
    // como esses itens que estão privados podem ser usados de forma segura

    public get numero() { // permite ler o valor de forma controlada
        return this._numero // retorna o valor do atributo _numero
    }

    public set numero(novoValor: number) { // atualiza, de forma segura, os atributos | método público chamado ao atribuir um valor
        this._numero = novoValor // guarda o valor no atributo _numero privado
    }

    public get agencia() {
        return this._agencia
    }

    public set agencia(agencia: number) {
        this._agencia = agencia
    }

    public get tipo() {
        return this._tipo
    }

    public set tipo(tipo: number) {
        this._tipo = tipo
    }

    public get titular() {
        return this._titular
    }

    public set titular(titular: string) {
        this._titular = titular
    }

    public get saldo() {
        return this._saldo
    }

    public set saldo(saldo: number) {
        this._saldo = saldo
    }  
}