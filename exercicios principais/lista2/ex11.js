//Crie um array de objetos pedidos, onde cada pedido tem
//cliente, produto, e quantidade. Use forEach para criar um objeto que
//agrupa a quantidade total de produtos por cliente.

const pedidos = [
    {cliente: 'Marco', produto: 'Bebida', quantidade: 3},
    {cliente: 'Gustavo', produto: 'Pipoca', quantidade: 1},
    {cliente: 'Glauro', produto: 'Doce', quantidade: 8},
    {cliente: 'Marco', produto: 'Ingresso', quantidade: 3},
    {cliente: 'Glauro', produto: 'Chaveiro', quantidade: 2}
]

let qtdTotal = {}

pedidos.forEach((total) => {
    if (qtdTotal[total.cliente]){
        qtdTotal[total.cliente] += total.quantidade
    } else {
        qtdTotal[total.cliente] = total.quantidade
    }
})

console.log(qtdTotal)