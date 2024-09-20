//Crie um objeto livro com propriedades titulo, autor,
//anoPublicacao e genero. Verifique se a propriedade editora existe no
//objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: 'How to Build a Car',
    autor: 'Adrian Newey',
    anoPublicacao: 2017,
    genero: 'Biografia',
    editora: 'HarperCollins Publishers Ltd'    
}

let editoraTrue = false

for (let propriedade in livro){
    if (propriedade === 'editora'){
        editoraTrue = true
    }
}

if (!editoraTrue){
    livro.editora = 'HarperCollins Publishers Ltd.'
}

console.log(livro)