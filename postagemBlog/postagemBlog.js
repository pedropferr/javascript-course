
// Criar um objeto Postagem de blog que vai contem as seguintes propriedades 
// postagem
/* 
titulo
mensagem
autor
vizualisações
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    vizualisacoes: 10,
    comentarios: [ 
        { autor: 'a', mensagem: 'b'},
        { autor: 'a', mensagem: 'b'},
        { autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem);