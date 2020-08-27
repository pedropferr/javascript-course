// Valor divisivel por 3 = fizz
// valor divisivel por 5 = buzz
// divisivel por ambos = fizzbuzz
// divisivel por nenhum = retorna o numero
// foi digitado uma letra = retorna informando que não é um número

const resultado = fizzbuzz(2);
console.log(resultado);

function fizzbuzz(entrada){
    
    if(typeof entrada !== 'number')
        return entrada = 'Não é um número';

    else if(entrada % 3 === 0 && entrada % 5 === 0)
        return entrada = 'fizzbuzz';

    else if(entrada % 3 === 0)
        return entrada = 'Fizz';

    else if(entrada % 5 === 0)
        return entrada = 'Buzz';

    else
        return entrada ;
    
}