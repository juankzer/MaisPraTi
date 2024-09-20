//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()
let num1 = Number(prompt('Digite o número que deseja ser mostrado 10 vezes na tela: '))

for(count = 0; count < 10; count++){
    console.log(num1)
}
