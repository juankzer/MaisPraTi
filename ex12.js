//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) utilizando um loop for.

const prompt = require('prompt-sync')()

let tabuada = Number(prompt('Informe a tabuada desejada: '))

for(let count = 0; count <= 10; count++){
    console.log(`${tabuada} * ${count} =`, tabuada * count)
}