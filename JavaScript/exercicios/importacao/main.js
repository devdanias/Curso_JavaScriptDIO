const {gets, print} = require('./funoes_aux');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSortado = gets();
    numerosSorteados.push(numeroSortado);
    
}
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSortado = numerosSorteados[i];
    if (numeroSortado > maiorValor){
        maiorValor = numeroSortado
    }
}

print(maiorValor);