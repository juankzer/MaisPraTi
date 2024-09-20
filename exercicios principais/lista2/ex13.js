//Crie um objeto carrinho com uma propriedade itens, que é um
//array de objetos. Cada objeto dentro de itens deve representar um
//produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
//para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        {nome: 'pneu', quantidade: 4, precoUnitario: 350},
        {nome: 'roda', quantidade: 4, precoUnitario: 300},
        {nome: 'parabrisa', quantidade: 1, precoUnitario: 70},
        {nome: 'farol', quantidade: 2, precoUnitario: 200},
        {nome: 'motor', quantidade: 1, precoUnitario: 10000},
    ]
}

let total = 0

carrinho.itens.forEach((soma) => {
    total += soma.quantidade * soma.precoUnitario
})

console.log(`O total da compra equivale a ${total} reais.`)