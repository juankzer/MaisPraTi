//Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

let age = 21
if(age > 0 && age < 12){
    console.log(`Você é uma criança de ${age} anos.`)
} else if(age >= 12 && age < 18){
    console.log(`Você é um adolescente de ${age} anos.`)
} else if(age >= 18 && age < 60){
    console.log(`Você é um adulto de ${age} anos.`)
} else if(age >= 60){
    console.log(`Você é um idoso de ${age} anos.`)
} else {
    console.log('Idade inválida.')
}