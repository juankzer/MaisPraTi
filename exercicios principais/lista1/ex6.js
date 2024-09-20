//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')()
let a = Number(prompt('Digite o valor do primeiro lado do triângulo: '))
let b = Number(prompt('Digite o valor do segundo lado do triângulo: '))
let c = Number(prompt('Digite o valor do terceido lado do triângulo: '))


if ((a < b + c) && (b < a + c) && (c < a + b)){
    if((a !== b) && (a !== c) && (b !== c)){
        console.log('Triângulo Escaleno.')
    } else if((a === b) && (b === c)){
        console.log('Triângulo equilátero.')
    } 
    else if((a === b) || (a === c) || (b === c)){
        console.log('Triângulo Isósceles.')
    }
}else{
    console.log('Valores inválidos para formação de um triângulo.')
}    