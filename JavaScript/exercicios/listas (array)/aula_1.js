const nota = [];

nota.push[5];
nota.push[6];
nota.push[7];
nota.push[8];
nota.push[2];

let soma = 0;

for (let i = 0; i < nota.length; i++) {
    const notas = nota[i];
    soma = soma + notas;
}

const media = soma / nota.length;
console.log(media);