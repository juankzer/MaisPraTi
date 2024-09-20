const prompt = require('prompt-sync')()
let num
do{
 num = Number(prompt('Digite um número: '))
} while(num >= 0)