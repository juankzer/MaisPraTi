// console.log(10 > 5) //true
// console.log(10 < 5) //false
// console.log(10 <= 5) //false
// console.log(10 >= 5) //true
// console.log(10 === 5) //false
// console.log(10 == '10') //true
// console.log(10 === '10') //false
// console.log(10 != '10') //false
// console.log(10 !== '10') //true

// let user = "Juan"
// let password = "12345"
// let authentication = user === 'Juan' && password === '12345'

// console.log(authentication)
// console.log('Hello World')

// const grade = 60

// if (grade >= 60){
//     console.log('APROVADO')
// } else {
//     console.log('REPROVADO')
// }

//let age = 20 

// if((age >= 18) && (age <= 32)){
//     console.log('IDADE PERMITIDA')
// } else{
//     console.log('IDADE NAO PERMITIDA')
// }
    
// <condicao> ? <verdadeiro> : <falso>
//let ternaryResult = (18 >= age <= 32) ? console.log('IDADE PERMITIDA') : console.log('IDADE NAO PERMITIDA')

//Exercicio 1 Escreva um programa que solicite um numero e digite se ele é par ou ímpar

// let number = 11
// if(number % 2 == 0){
//     console.log('PAR')
// } else{
//     console.log('ÍMPAR')
// }

// ou
// let number = 12
// number % 2 === 0 ? console.log('PAR') : console.log('ÍMPAR')

//Exercicio 2 Solicite três números e diga qual o maior

// let number1 = 11
// let number2 = 3
// let number3 = 9
//  if((number1 > number2) && (number1 > number3)){
//     console.log('Primeiro número é o maior.')
//  } else if((number1 > number2) && (number1 < number3)){
//     console.log('Terceiro número é o maior.')
//  } else{
//     console.log('Segundo número é o maior.')
//  }



//Exercicio 3 Solicite dois numero e calcule some, subtração, multiplicação e divisão

// let num1 = 3
// let num2 = 2

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

//ou

// let num1 = 3
// let num2 = 2
// let calc = 4

// if(calc === 1){
//     console.log(num1 + num2)
// } else if (calc === 2){
//     console.log(num1 - num2)
// } else if (calc === 3){
//     console.log(num1 * num2)
// } else if (calc === 4){
//     console.log(num1 / num2)
// }

//ou usando prompt para pedir os valores para o usuário

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt('Digite o primeiro número: '))
// let num2 = Number(prompt('Digite o segundo número: '))
// let operation = prompt('Informe a operação desejada (+, -, /, *): ')
// let result = 0

// if(operation === '+'){
//     result = num1 + num2
// } else if(operation === '-'){
//     result = num1 - num2
// } else if(operation === '*'){
//     result = num1 * num2
// } else if(operation === '/'){
//     if(num2 !== 0){
//         result = num1 / num2
//     } else {
//       console.log('Erro: divisão por zero!')
//       result = undefined  
//     }
// } else {
//     console.log('Operação inválida!')
//     result = undefined
// }    
//     if(result !== undefined){
//         console.log('Resultado: ', result)
// }

//switch case exemplo 

// let option = 1

// switch (option){
//     case 1:
//         console.log('Você selecionou a primeira opção.')
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção.')
//         break    
//     default:
//         console.log('Você não selecionou uma opção válida.')
//         break
// }

//Exercicio dias da semana usando switch

// const prompt = require('prompt-sync')()
// let option = Number(prompt('Digite um dia de semana de 1 a 7: '))

// switch (option){
//     case 1:
//         console.log('Segunda.')
//         break
//     case 2:
//         console.log('Terça.')
//         break
//     case 3:
//         console.log('Quarta.')
//         break
//     case 4:
//         console.log('Quinta.')
//         break
//     case 5:
//         console.log('Sexta.')
//         break
//     case 6:
//         console.log('Sábado.')
//         break
//     case 7:
//         console.log('Domingo.')
//         break
//     default:
//         console.log('Dia inválido.')
//         break
// }

//Exercicio da Calculadora utilizando switch

const prompt = require('prompt-sync')()

let num1 = prompt('Digite o primeiro número: ')
let num2 = prompt('Digite o segundo número: ')
let operation = prompt('Digite a operação desejada entra + - * ou /: ')
let result = 0

switch (operation){
    case '+':
        result = parseInt(num1) + parseInt(num2)
        console.log('Soma dos números = ', result)
        break
    case '-':
        result = num1 - num2
        console.log('Subtração dos números = ', result)
        break   
    case '*':
        result = num1 * num2
        console.log('Multiplicação dos números = ', result)
        break
    case '/':
        result = num1 / num2
        console.log('Divisão dos números = ', result)
        break   
    default:
        console.log('Operação inválida.')
        break         
}

