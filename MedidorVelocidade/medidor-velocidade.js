//Velocidade Máxima 70km/h
//A cada 5km/h do limite você ganha 1 ponto 
//math.floor()
//caso os pontos sejam maior que 12 -> Carteira Suspendida
verificarVelocidade(84);


function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if( velocidade <= velocidadeMaxima)
        console.log('OK');
    
    else{ 
        const pontos = Math.floor(((velocidade - velocidadeMaxima ) / kmPorPonto));
        if(pontos < 12){
            console.log(pontos);
        }
        else
            console.log('Carteira Suspendida');
    }

}