//Crie um array de objetos estoque, onde cada objeto tem
//produto, quantidade e minimo. Use forEach para atualizar a quantidade
//dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    {produto: 'Capinha', quantidade: 20, minimo: 30},
    {produto: 'Cabo USB', quantidade: 25, minimo: 20},
    {produto: 'Adaptador', quantidade: 15, minimo: 20},
    {produto: 'Película', quantidade: 70, minimo: 50},
]

estoque.forEach((min) => {
    if (min.quantidade < min.minimo){
        min.quantidade *= 2
    }
})

console.log(estoque)