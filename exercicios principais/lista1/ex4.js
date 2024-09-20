//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()
let option = Number(prompt('Escolha uma opção de combo para lanchar, 1 para coxinha, 2 para pastel e 3 para hamburguer: '))

switch (option){
    case 1:
        console.log('Você optou pelo combo de coxinha.')
        break
    case 2:
        console.log('Você optou pelo combo de pastel.')
        break
    case 3:
        console.log('Você optou pelo combo de hamburguer.')
        break    
    default:
        console.log('Combo inválido.')
        break
}