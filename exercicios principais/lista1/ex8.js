//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))
let numeros = [num1, num2]

if (num1 === num2){
    console.log('Insira valores diferentes.')
} else {
    numeros.sort((a, b) => a - b)
    console.log(`Ordem crescente dos valores: ${numeros[0]}, ${numeros[1]}`)
}