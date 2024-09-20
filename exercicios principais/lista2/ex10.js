//Crie um array de objetos vendas, onde cada objeto tem produto,
//quantidade e valor. Use forEach para calcular o valor total de vendas de
//todos os produtos.

const vendas = [
    {produto: 'Monitor', quantidade: 4, valor: 400},
    {produto: 'Teclado', quantidade: 10, valor: 70},
    {produto: 'Mouse', quantidade: 18, valor: 20},
    {produto: 'Headset', quantidade: 6, valor: 90},
    {produto: 'Gabinete', quantidade: 8, valor: 150}
]

let qtdTotal = 0

vendas.forEach((total) => {
    qtdTotal += total.quantidade * total.valor
})

console.log(`Valor total das vendas foi de ${qtdTotal} reais.`)