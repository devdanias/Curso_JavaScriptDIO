/*
Faça um programa que receba a média de um aluno. 
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >- 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

const ()
*/

const { gets, print } = require('./funcao_aux1');
const media = gets();

if (media <= 0 && media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperacao');
} else if (media >= 7) {
    print('Aprovado');
} else {
    print('Numero invalido')
}

