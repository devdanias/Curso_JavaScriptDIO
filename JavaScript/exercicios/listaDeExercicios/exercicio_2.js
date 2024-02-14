/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta

Formula do IMC

IMC = peso / (aultura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMD:
- Abaixo de 18.5 = Abaixo do peso
= Abaixo 18.5 e 25 = Peso Normal
- Entre 25 e 30 = Acima do peso
- Entre 30 e 40 = Obeso
- Acima de 40 = Obesidade
*/

const peso = 60;
const altura = 1.65;
const imc =  (peso / (altura * altura));

if (imc < 18.5){
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25){
    console.log('Peso normal');
} else if (imc === 30 || imc === 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade');
}
