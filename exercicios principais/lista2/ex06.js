//Crie um array de objetos funcionarios, onde cada objeto
//contém informações como nome, cargo, e salario. Use for of para filtrar
//e exibir apenas os funcionários cujo salário seja maior que um valor
//específico.

const funcionarios = [
    {nome: 'Fábio', cargo: 'Professor', salario: 2500},
    {nome: 'André', cargo: 'Diretor', salario: 2200},
    {nome: 'Felipe', cargo: 'Segurança', salario: 3000},
    {nome: 'Antonio', cargo: 'Zelador', salario: 2000}
]

for(let filtro of funcionarios){
    if(filtro.salario > 2300){
        console.log(`O funcionário ${filtro.nome}, que trabalha como ${filtro.cargo} tem o salário avaliado em ${filtro.salario} reais.`)
    }
}