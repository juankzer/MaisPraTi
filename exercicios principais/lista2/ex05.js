//Crie um array de objetos alunos, cada um com propriedades
//nome, nota1, e nota2. Use for of para calcular a média das notas de cada
//aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    {nome: 'Daniel', nota1: 8, nota2: 9},
    {nome: 'Henrique', nota1: 4, nota2: 8},
    {nome: 'Will', nota1: 5, nota2: 5}
]

for (const geral of alunos){
    const media = (geral.nota1 + geral.nota2) / 2
    console.log(`O aluno ${geral.nome} ficou com ${media} na média final.`)
}