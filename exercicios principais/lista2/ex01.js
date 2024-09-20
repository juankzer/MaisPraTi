//Crie um objeto carro com propriedades como marca, modelo,
//ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
//valores no console.

function carro(marca, modelo, ano, cor){
    return {
        marca,
        modelo,
        ano,
        cor
    }
}
let carro1 = carro('Chevrolet', 'Zafira', '2001', 'Prata')
for(let chave in carro1){
    console.log(`${chave}: ${carro1[chave]}`)
}