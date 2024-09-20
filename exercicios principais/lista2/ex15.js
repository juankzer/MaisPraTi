//Crie um array de objetos transacoes, onde cada transação tem
//tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
//somando as entradas e subtraindo as saídas.

const transacoes = [
    {tipo: 'entrada', valor: 2200},
    {tipo: 'saida', valor: 130},
    {tipo: 'saida', valor: 350},
    {tipo: 'saida', valor: 70},
    {tipo: 'entrada', valor: 1000}
]

let saldo = 0

transacoes.forEach((move) => {
    if (move.tipo === 'entrada'){
        saldo += move.valor
    } else {
        saldo -= move.valor
    }
})

console.log(`O seu saldo é de ${saldo} reais.`)