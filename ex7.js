//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

let nMacas = 20

if (nMacas < 12){
    console.log(`Comprando ${nMacas} maçãs o preço final é de ${nMacas * 0.3} reais.`)
} else if (nMacas >= 12){
    console.log(`Comprando ${nMacas} maçãs o preço final é de ${nMacas * 0.25} reais.`)
} else {
    console.log('Números de maçãs inválido.')
}