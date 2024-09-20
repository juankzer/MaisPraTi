//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um número: '))
let sum = 0
let count = 0

while(num !== 0){
    sum += num
    count++
    num = Number(prompt('Digite outro número: '))
}
console.log('Média aritmética dos números: ', sum/count)