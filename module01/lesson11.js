const prompt = require('prompt-sync')()

// function showFunction(successCallback, errorCallback){
//     if(true){
//         successCallback('Requisição bem sucedida.')
//     } else {
//         errorCallback('Erro na requisição.')
//     }
// }

// let successCallback = function(message){
//     console.log(message)
// }

// let errorCallback = function(message){
//     console.log(message)
// }

// showFunction(successCallback, errorCallback)

//Ex: Soma de elementos da array usando function
// function arrSum(arr){
//     let sum = 0

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(arrSum([10, 20, 40, 30]))

//Ex: Encontre o maior número de uma array usando function 
// function findMax(arr){
//     let max = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findMax([10, 50, 20, 15, 65]))

//Ex: Contar ocorrencias de um valor usando function
// let vet = [10, 10, 7, 5, 10]
// let value = Number(prompt('Digite o valor que deseja saber a ocorrência: '))

// let ArrOcorrencias = function(value, vet){
//     let count = 0

//     for(let i = 0; i < vet.length; i++){
//         if(vet[i] === value){
//             count++
//         }
//     }
//     return count
// }
// let contOcorrencias = ArrOcorrencias(value, vet)
// console.log(`O valor ${value} aparece ${contOcorrencias} vezes no vetor.`)

//Manipulação de variável
// let name = 'Juan Alexandre'

// console.log('Juan'.length) //tamanho do nome
// console.log('Juan'.charAt(0)) //caracter na posição 0
// console.log(name.indexOf('a')) //posição do caracter a
// console.log(name.replace('Ju', 'Ren')) //substituir Ju por Ren 
// console.log(name.substr(2,4)) //a partir do caracter 2 mostre os 4 seguintes
// console.log(name.toUpperCase()) //deixar tudo maiúsculo
// console.log(name.toLowerCase()) //deixar tudo minúsculo
// console.log('-' + name.trim() + '-') //tira os espaços em branco das extremidades 

//Matemáticos 
// console.log(Math.ceil(100.73)) //arredonda pra cima 
// console.log(Math.floor(100.73)) //arredonda para baixo 
// console.log(Math.round(100.73)) //arredonda de forma inteligente (proximidade)
// console.log(Math.sqrt(100)) //raiz quadrada
// console.log(Math.pow(100, 2)) //potencia
// console.log(Math.cbrt(100)) //raiz cubica
// console.log(Math.abs(100.20)) //valor absoluta
// console.log(Math.random()) //um número aleatório entre 0 e 1

//datas
// let date = new Date()

// console.log(date.getDate())
// console;log(date.getMonth() + 1)
// console.log(date.getFullYear())

// console.log(date.toString())

// date.setDate(date.getDate() + 720)
// console.log(date.toString())

// date.setFullYear(date.getFullYear() + 720)
// console.log(date.toString())

let date1 = new Date(2024, 7, 6)
let date2 = new Date(2023, 7, 6)
console.log(date1.toString())

console.log(date1.getTime())
console.log(date2.getTime())

let miliseconds = Math.abs(date1.getTime() - date2.getTime())
console.log(miliseconds)

let milisecondsperday = (1 * 24 * 60 * 60 * 1000)
console.log(`Um dia tem ${milisecondsperday} milisigundos.`)

console.log(`A diferença entre as datas é de ${Math.ceil(miliseconds/milisecondsperday)} dias.`)

//Fazer uma função para cada situação abaixo
//Inverter uma string
//Contar vogais
//Gerar número aleatório
//Dias entre duas datas
//Formatar data 
