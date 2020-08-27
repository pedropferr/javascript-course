

// Criar um objeto postagem 
// titulo, mensagem, autor, vizualizações, comentarios, estaAoVivo


function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mesagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

const postagem1 = new Postagem('a', 'b', 'c');
console.log(postagem1);

/*  visualizacoes, comentarios = [autor, mensagem], estaAoVivo 

    
, 10, ['autor: a' , 'mensagem: ee'], true

    
*/