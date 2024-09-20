const prompt = require('prompt-sync')()

//condição for
//<variável>; <condição>; <incremento>

// let multiplier = Number(prompt('Informe qual tabuada desejada: '))

// for(let counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =`, multiplier * counter)
// }

//Imprimir valores pares entre 1 e 20 
// for(let i = 0; i <=20; i += 2){
//     console.log(i)
// }

//Calcular soma de 1 a 100
// let sum = 0

// for(let i = 0; i <= 100; i++){
//     sum += i
// }
// console.log(sum)

//Imprimir valores de 1 a 10 em ordem decrescente
// for(let i = 10; i > 0; i--){
//     console.log(i)
// }

//Imprimir valores de 1 a 10 em ordem decrescente usando while
// let i = 10
// while (i > 0){
//     console.log(i)
//     i --  
// }

//Calcular some de 1 a 100 usando while
// let i = 1
// let sum = 0
// while(i <= 100){
//     sum += i
//     i++
// }
// console.log(sum)

//Receber números decimais até que o usuário digite 0
//Calcule média aritmética após digitar 0


// let num = Number(prompt('Digite um número: '))
// let sum = 0
// let counter = 0

// while(num !== 0){
//     sum += num
//     counter++
//     num = Number(prompt('Digite outro número: '))
// }
// console.log('Média aritmética dos números: ', sum/counter)

//Escreva um algorítmo para imprimir os 50 números primos maiores que 100
//Número primo é aquele divisível apenas por 1 e por ele mesmo

//Usando DO WHILE solicite números até que o usuário mande um número negativo

let num
do{
 num = Number(prompt('Digite um número: '))
} while(num >= 0)
    
    
