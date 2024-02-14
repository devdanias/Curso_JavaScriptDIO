/*Faça um programa para calcular o valor de uma viagem

Voce terá 3 variaveis. Sendo elas:

1 - Preço médio do combustivel
2 - Gasto médio de combustivel por KM
3 - O tipo de combustivel que está no seu carro
3 - Distância em KM da viagem
4 - Distancia em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoGasolina = 5.79;
const precoEtanol = 6.66
const kmPorLitro = 10; // Corrigido para refletir o consumo de 10 km por litro
const distancia = 100;
const tipoCombustivel = 'Etanol';
const gastoPorKm = distancia / kmPorLitro;

if (tipoCombustivel == 'Etanol') {
const valorTotal = gastoPorKm * precoEtanol;
console.log(valorTotal.toFixed(2));
}else{
    const valorTotal = gastoPorKm * precoGasolina;  
    console.log(valorTotal.toFixed(2));
}

