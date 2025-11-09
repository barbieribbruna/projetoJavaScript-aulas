import readlinesync = require("readline-sync")
import { Terrestre } from "./Terrestre"
import { Aquatico } from "./Aquatico"
import { Aereo } from "./Aereo"

export function main() {

    // pergunta-se o meio de transporte (Terrestre, Aquático ou Aéreo) e depois o respetivo modal
    const meioTransporte: string = readlinesync.question("Digite o meio de transporte (Terrestre, Aquático ou Aéreo): ")
    console.log(`Meio de transporte escolhido: ${meioTransporte}`)

    // cria-se o objetvo e chama o visualizar()

    if (meioTransporte.toLowerCase() === "terrestre") {
        const terrestre = new Terrestre(4, "carro", 4, 160) 
        terrestre.visualizar()
    }
    else if (meioTransporte.toLowerCase() === "aquático" || meioTransporte.toLowerCase() === "aquatico") {
        const aquatico = new Aquatico(2000, "Navio", 300, "motor elétrico") 
        aquatico.visualizar()
    }
    else if (meioTransporte.toLowerCase() === "aéreo" || meioTransporte.toLowerCase() === "aereo") {
        const aereo = new Aereo(8, "balão", 300, 3) 
        aereo.visualizar()
    }
    else {
        console.log("Tipo de transporte inválido.")
    }











    
    // const carro: Terrestre = new Terrestre(2, "Terrestre", 4, 100)

    // console.log("A capacidade do meio de transporte é: " + carro.capacidade)

    // carro.visualizar()

}

// executa o programa
main()