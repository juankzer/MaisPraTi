//Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

const prompt = require('prompt-sync')()
let fat = 1
let num = Number(prompt('Digite o número que deseja fatorar: '))

for(count = num; count >= 1 ; count--){
    fat *= count
}
console.log(`${num} fatorial equivale a: ${fat}.`)