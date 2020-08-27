// Criar função somar que retorna a
// soma de todos os multiplos de 3 a 5


somar(10);

function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (let i = 0; i <= limite; i++){
        if ( i % 3 === 0 )
            multiplosDe3 += i;
        else if ( i % 5 === 0 )
            multiplosDe5 += i;
    }
console.log(multiplosDe3 + multiplosDe5);
}