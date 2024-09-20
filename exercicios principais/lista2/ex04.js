//Crie um array de objetos pessoas, onde cada objeto representa
//uma pessoa com nome, idade, e cidade. Use for of para exibir as
//informações de cada pessoa no console.

const pessoas = [
    {nome: 'Alexandre', idade: 59, cidade: 'Arraial do Cabo'},
    {nome: 'Erika', idade: 45, cidade: 'Rio das Ostras'},
    {nome: 'Juan', idade: 24, cidade: 'Cabo Frio'},
    {nome: 'Eduarda', idade: 23, cidade: 'Casimiro de Abreu'}
]

for (const exibir of pessoas){
    console.log(`${exibir.nome} possui ${exibir.idade} anos e é de ${exibir.cidade}.`)
}