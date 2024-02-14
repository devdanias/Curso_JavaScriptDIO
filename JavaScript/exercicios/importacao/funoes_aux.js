/*
Uma sala contem 5 aulas e para cada aluno foi sorteado um número de 1 - 100
Faça um programa que receba os 5 números sorteados para alunos e mostre o maior número sorteado

Dados de entrada
5
60
10
98
23

Sáida: 
98

*/

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets (){
   const valor = entradas[i];
   i++;
    return valor;
}