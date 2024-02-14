/*Faça um programa para calcular o valor de uma viagem

Voce terá 3 variaveis. Sendo elas:

1 - Preço médio do combustivel
2 - Gasto médio de combustivel por KM
3 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem
*/

const precocombustivel = 5.79;
const kmPorLitro = 10; // Corrigido para refletir o consumo de 10 km por litro
const distancia = 100;

const gastoPorKm = distancia / kmPorLitro;
const valorTotal = gastoPorKm * precocombustivel;
console.log(valorTotal.toFixed(2));
