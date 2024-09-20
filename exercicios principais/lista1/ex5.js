//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

const prompt = require('prompt-sync')()
let weight = Number(prompt('Digite seu peso em kilos: '))
let height = Number(prompt('Digite sua altura em metros: '))
let imc = weight/(height^2)

console.log(`Seu IMC é de ${imc.toFixed(2)}.`)
if (imc < 18.5){
    console.log('Você está com baixo peso.')
} else if(imc >= 18.5 && imc < 25){
    console.log('Você está com peso normal.')
} else if(imc >= 25 && imc < 30){
    console.log('Você está com sobrepeso')
} else if(imc >= 30){
    console.log('Você está com obesidade')
} else {
    console.log('Confira novamente os dados inseridos.')
}