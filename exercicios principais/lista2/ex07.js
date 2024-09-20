//Crie um array de objetos produtos, onde cada objeto tem nome,
//preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
//os produtos e exibir o novo preço.

const produtos = [
    {nome: 'Monitor', preco: 400},
    {nome: 'Teclado', preco: 70},
    {nome: 'Mouse', preco: 20},
    {nome: 'Headset', preco: 90},
    {nome: 'Gabinete', preco: 150}
]

let desconto = 0

produtos.forEach((reducao) => {
    desconto = reducao.preco * 0.1
    reducao.preco -= desconto
    console.log(`Preço atualizado do ${reducao.nome} é ${reducao.preco} reais.`)
    
})

