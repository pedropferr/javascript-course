

// Criar um array de faixa de preço para que ela possa ser usada em um site igual mercado livre

// Priemira Opção


let Faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$ 700 até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999999}
];

// Segunda Opção (Factory Function)

function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let Faixas2 = [
    criaFaixaPreco('a',0,700),
    criaFaixaPreco('b',700,1000),
    criaFaixaPreco('c',1000,9999999),
]

console.log(Faixas);
console.log(Faixas2);


// Terceira Opção (Constructor Function)

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

const faixa1 =  new FaixaPreco('até R$700', '0', '700');
const faixa2 =  new FaixaPreco('de R$700 até R$1000', '700', '1000');
const faixa3 =  new FaixaPreco('R$1000 ou mais', '1000', '999999999');


console.log(faixa1);
console.log(faixa2);
console.log(faixa3);

/* const faixa1 =  new FaixaPreco('até R$700', '0', '700');
const faixa2 =  new FaixaPreco('de R$700 até R$1000', '700', '1000');
const faixa3 =  new FaixaPreco('R$1000 ou mais', '1000', '999999999'); */