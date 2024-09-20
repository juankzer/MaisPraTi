const prompt = require('prompt-sync')()

//Exercício: Usuário digitar um número e ser informado se é positivo, negativo ou zero
// let n1 = Number(prompt('Digite um número: '))

// if(n1 > 0){
//     console.log('O número informado é positivo.')
// } else if(n1 < 0){
//     console.log('O número informado é negativo.')
// } else {
//     console.log('O número informado é zero.')
// }

//Exercício: Informe se o ano é bissexto ou não 
// const year = Number(prompt('Digite o ano: '))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`O ano ${year} é bissexto.`)
// } else {
//     console.log(`O ano ${year} não é bissexto.`)
// }

//Exercício: Solicite 3 notas e informe a média e o conceito entra A, B e C
// let nota1 = Number(prompt('Digite a primeira nota: '))
// let nota2 = Number(prompt('Digite a segunda nota: '))
// let nota3 = Number(prompt('Digite a terceira nota: '))
// let avg = (nota1 + nota2 + nota3)/3
// let concept = ''

// if(avg >= 90){
//     console.log('Nota final é: ', avg.toFixed(2))
//     concept = 'A'
// } else if(avg < 90 && avg >= 80){
//     console.log('Nota final é: ', avg.toFixed(2))
//     concept = 'B'
// } else {
//     console.log('Nota final é: ', avg.toFixed(2))
//     concept = 'C'
// }

// console.log('Conceito final do aluno: ', concept)

//Exercício: Solicite a idade e informe se é criança, adolescente, adulto ou idoso.
// let age = Number(prompt('Digite sua idade: '))
// let faixa = ''

// if(age > 0 && age < 12){
//     faixa = 'Criança'
// } else if(age >= 12 && age < 18){
//     faixa = 'Adolescente'
// } else if(age >= 18 && age < 60){
//     faixa = 'Adulto'
// } else {
//     faixa = 'Idoso'
// }

// switch(faixa){
//     case 'Criança':
//         console.log(`Uma criança de ${age} anos.`)
//         break
//     case 'Adolescente':
//         console.log(`Adolescente de ${age} anos.`)
//         break
//     case 'Adulto':
//         console.log(`Adulto de ${age} anos.`)
//         break
//     default:
//         console.log(`Idoso de ${age} anos.`)    
// }

//Exercício: Calcular o máximo divisor comum de dois números MDC
// let n1 = Number(prompt('Digite o primeiro número: '))
// let n2 = Number(prompt('Digite o segundo número: '))

// let a = n1
// let b = n2

// do {
//     let temp = b
//     b = a % b 
//     a = temp 

// } while(b !== 0)

// const MDC = a 
// console.log(`O MDC entre ${n1} e ${n2} é ${MDC}.`)

//Exercício: Conferir se o número é primo CORRIGIR DEPOIS
// let prime = Number(prompt('Digite o número que deseja verificar: '))

// for(let i = 1; i < prime; i++){
//     if((prime % 1 === 0) && (i !== 1)){
//         console.log('Não é primo.')
//         break
//     }
//     if(i === (prime - 1)){
//         console.log('É primo.')
//     }
// }



//Exercício: Listar os 50 primeiros números primos a partir do 100
// let count = 0
// let num = 100

// do{
//     let primo = 0
//     for(let i = 1; i <= num; i++){
//         if(num % i === 0){
//             primo++
//         }
//     }
//     if(primo === 2){
//         console.log(num)
//         count++
//     }
//     num++
// } while(count < 50)

//ARRAYS 
let carros = Array()
 carros[0] = 'Civic'
 carros[1] = 10
 carros[2] = true 
 carros['Hyago'] = '10'

let motos = Array('Honda', 'Ninja', 10)
let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter']

livros.push('Sherlock Holmes') //adicionar novo item no final
livros.unshift('1984') //adicionar novo item no inicio
livros.splice(2, 1, 'Animais Fantásticos') // splice(adicionar novo item) 2(posição) 1(substituir, caso for 0 apenas adicionar)

 console.log(livros)
