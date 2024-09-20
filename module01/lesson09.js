const prompt = require('prompt-sync')()

//Exercício: Soma dos elementos da array/vetor
// let sum = 0
// let arr = [10, 20, 30, 40]

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

//Exercício: Encontre o maior número da array
// let arr = [10, 60, 30, 20]
// let max = arr[0]

// for(let j = 0; j < arr.length; j++){
//     if(arr[j] > max){
//         max = arr[j]
//     }
// }
// console.log(max)

//Exercício: Inverter uma array
// let arr = [10, 60, 30, 20]
// let reversed = []

// for(let k = arr.length - 1; k >= 0; k--){
//     reversed.push(arr[k])
// }
// console.log(reversed)

//Exercício: Crie uma array contendo apenas números pares
// let arr = [10, 61, 30, 20]
// let evens = []

// for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 === 0){
//         evens.push(arr[m])
//     }
// }
// console.log(evens)

//Exercício: Contar ocorrências de um valor
// let vet = [10, 10, 7, 5, 10]
// let value = Number(prompt('Insira o valor para ser contado: '))
// let count = 0

// for(let l = 0; l < vet.length; l++){
//     if(vet[l] === value){
//         count++
//     }
// }
// console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)

//array/vetores multidimensionais (matriz)
// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// // console.table(matriz)
// // console.log(matriz[1][1])
// for(let linha = 0; linha < matriz.length; linha++){
//     for(let coluna = 0; coluna < matriz[linha].length; coluna++){
//         console.log(`Elemento na posição [${linha}][${coluna}]: ${matriz[linha][coluna]}`)
//     }
// }

//Exercício: Soma os valores da matriz
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]
let resultado = []

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
    throw new Error('Os vetores devem ter o mesmo tamanho.')
}
for(let i = 0; i < arr1.length; i++){
    let somaLinha = []
    for(let j = 0; j < arr1[i].length; j++){
        somaLinha.push(arr1[i][j] + arr2[i][j])
    }
    resultado.push(somaLinha)
}
console.table(resultado)
