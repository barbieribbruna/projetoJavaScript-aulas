import { Ciclista } from "./Ciclista"
import { Nadador } from "./Nadador"

export function main() {

    // OBJETO DA CLASSE 'NADADOR'

    const nadador: Nadador = new Nadador('Thompson')
    const ciclista: Ciclista = new Ciclista('Nina')

    /*// INSTANCIAR A CLASSE 'ATLETA' NÃO É POSSÍVEL, POIS ELA É ABSTRATA
    const atleta: Atleta = new Atleta('Bruna') // não é permitido instanciar uma Classe Abstrata*/
    
    nadador.visualizar()   
    nadador.aquecer()
    nadador.nadar()
    console.log(" ")

    ciclista.visualizar()
    ciclista.aquecer()
    ciclista.pedalar()
    console.log(" ")
    

}

main()