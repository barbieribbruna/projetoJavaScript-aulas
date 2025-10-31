let vetorStrings = [
    "Boxer",            // índice 0
    "Pastor Alemão",    // índice 1
    "Pinscher",         // índice 2
    "Husky Siberiano",  // índice 3
    "Corgi"             // índice 4
]

let indice

for (indice = 0; indice < 5; indice++) {
      console.log(`${indice + 1}º elemento: ${vetorStrings[indice]}`);
}

// `` é uma forma de concatenar (template literals), ou seja, ao invés de ficar abrindo e fechando " ", coloca tudo como `` para fechar tudo de uma vez dos elementos daquele intervalo
// envolve-se a variável com ${}

console.log(vetorStrings.length) // tamanho do vetor