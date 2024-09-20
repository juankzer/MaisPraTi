//Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

const prompt = require('prompt-sync')()
let sum = 0

for(count = 0; count < 5; count++){
    let num = Number(prompt('Digite o número que deseja somar: '))
    sum += num
}
console.log(`Soma total: ${sum}.`)