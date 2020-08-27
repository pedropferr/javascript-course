// Criar Função para mostrar os números primos

//primos
//compostos

//ex: 10, 11

exibirNumerosPrimos(15);


function exibirNumerosPrimos(limite) {

    for (let numero = 2; numero <= limite; numero++){

        if (calculaPrimo(numero)) console.log(numero);
    }

    function calculaPrimo(numero) {
        let ehPrimo = true;
        for (let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0){
                return false;
            }

        }
        return true;
    }

}