// Criar objeto endereço que contem:

//Rua, Cidade, CEP
// Criar função exibirEndereco(endereco);


let endereco = {
    rua : 'Não sei',
    cidade : 'Americana',
    cep : '13350-000'
}

function exibirEndereco(endereco) {
    for( let chave in endereco )
        console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);
