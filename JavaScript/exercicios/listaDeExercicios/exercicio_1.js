/*
Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
susa mé e a sua classificação conforme a tabela abaixo
Média = (nota 1 + nota 2 + nota 3) / 3

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação
- Média acima de 7, passoi de semestre
*/

const nota1 = 7;
const nota2 = 8;
const nota3 = 10;

const mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal < 5) {
    console.log('Reprovado');
} else if (mediaFinal >= 5 && mediaFinal <= 7) {
    console.log('O aluno está de recuperação');
} else {
    console.log('Aluno passou de ano');
}
