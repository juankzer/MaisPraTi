//Diferentes formas de criar array e atribuir itens
// let thingsList = Array()

// thingsList['hardware'] = Array()
// thingsList['fruits'] = Array()
// thingsList['people'] = Array('Aristóteles', 'Tolkien')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][1] = 'Mouse'
// thingsList['hardware'][2] = 'Teclado'
// thingsList['fruits'][0] = 'Laranja'
// thingsList['fruits'][1] = 'Maça'

// console.table(thingsList)

//criar array e ordenar por ordem alfabetica 
// let fruitsList = []

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Pêssego'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Abacate'

// console.log(fruitsList.sort())

//Ordenar números de uma array em ordem crescente
// let numberList = []

// numberList[0] = 8
// numberList[1] = 2
// numberList[2] = 9
// numberList[3] = 1
// numberList[4] = 3

// console.log(numberList.sort((a, b) => a - b))

//Pesquisar item e dizer posição na array 
// let fruitsList = []

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Pêssego'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Abacate'

// console.log(fruitsList.indexOf('Banana'))
// let index = fruitsList.indexOf('Banana')

// if(index === -1){
//     console.log('Elemento inexistente.')
// } else {
//     console.log(`O elemento existe e está na posição: ${index}`)
// }

//Calcular uma área utilizando função
// function calculateLandArea(num1, num2){
//     let area = num1 * num2
//     return area
// }
// let width = 50
// let height = 100

// let area = calculateLandArea(width, height)
// console.log(`A área possui ${area} metros quadrados.`)

//Ordernar uma array em ordem alfabetica
let alfabeto = ['A', 'C', 'B', 'F', 'D', 'E']

function ordena(arrayOrdem){
    return arrayOrdem.sort()
}
console.log(ordena(alfabeto))
