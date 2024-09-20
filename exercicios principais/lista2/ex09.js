//Crie um array de objetos clientes, cada um com propriedades
//nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
//de 30 anos.

const clientes = [
    {nome: 'Alexandre', idade: 59, cidade: 'Arraial do Cabo'},
    {nome: 'Erika', idade: 45, cidade: 'Rio das Ostras'},
    {nome: 'Juan', idade: 24, cidade: 'Cabo Frio'},
    {nome: 'Eduarda', idade: 23, cidade: 'Casimiro de Abreu'}
]

let count = 0

clientes.forEach((acima) => {
    if (acima.idade > 30){
        count++
    }
})

console.log(`Temos ${count} clientes acima de 30 anos.`)