class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.nome = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const daniele = new Pessoa();
daniele.nome = 'Daniele A Silva';
daniele.idade = 20;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

daniele.descrever();
renan.descrever();