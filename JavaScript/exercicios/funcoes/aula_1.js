// Função para calcular o aumento de um valor com base em um percentual de juros
function incrementarJuros(valor, percentualJuros) {
    // Calcula o valor do acréscimo com base no percentual de juros fornecido
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    
    // Retorna o valor original acrescido do valor calculado de acréscimo
    return valor + valorDeAcrescimo;
}

// Chama a função incrementarJuros com um valor de 100 e uma taxa de juros de 10%
console.log(incrementarJuros(100, 10));
