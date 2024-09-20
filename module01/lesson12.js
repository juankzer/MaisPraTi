// let serie = {
//     nome: 'The Boys',
//     genero: ['Ação', 'Herói', 'Paródia'],
//     nrTemporadas: '4',
//     status: 'Em Andamento',
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50
//     },
//     mostrarCaracteristicas: function(){
//         return ('O nome da série é ' + this.nome + ' e sua classificação é + ' + this.classificacao)
//     }
// }
// console.log(serie.mostrarCaracteristicas())

// let livro = {
//     nome: 'Harry Potter',
//     genero: ['Fantasia', 'Aventura', 'Infanto Juvenil'],
//     dataLancamento: 1999,
//     autor: 'JK Rowling',
//     statusLeitura: 'Finalizado',
//     paginas: 231,
//     tipo: ['Digital', 'Físico'],
//     idioma: ['Português', 'Inglês', 'Japonês', 'Alemão'],
//     mostrarCaracteristicas: function(){
//         return ('O livro ' + this.nome + ' foi escrito por ' + this.autor)
//     }
// }
// console.log(livro.mostrarCaracteristicas())

// let carro = {
//     nome: 'Gol',
//     marca: 'Volkswagen',
//     cor: ['Vermelho', 'Prata', 'Preto', 'Branco', 'Azul'],
//     ano: 2009,
//     aroPneu: 15,
//     tracao: ['Dianteira', 'Traseira', '4x4'],
//     mostrarCaracteristicas: function(){
//         return ('O carro ' + this.nome + ' da marca ' + this.marca + ' possui tração ' + this.tracao)
//     }
// }
// console.log(carro.mostrarCaracteristicas())

// let motor = '1000'
// let nome = 'BMW'
// let tipo = 'Esportivo'

// let moto = {
//     nome: nome,
//     tipo: tipo,
//     motor: motor
// }
// console.log(moto)

// let atleta = {
//     nome: 'Raissa Leal',
//     esporte: 'Skate Street',
//     idade: 16
// }
// atleta.nacionalidade = 'Brasil'
// atleta.medalhas = {
//     ouro: 10,
//     prata: 1,
//     bronze: 1
// }
// atleta.celebrarVitoria = function () { return 'GANHEI!' }
// console.log(atleta)
// console.log(atleta.celebrarVitoria())

// let obj1 = {
//     nome: 'Bruce',
//     profissao: 'Batman'
// }
// let obj2 = obj1
// obj2.companheiro = 'Robin'
// console.log(obj1)
// console.log(obj2)

// function computador(processador, gpu, ram, armazenamento){
//     this.processador = processador
//     this.gpu = gpu 
//     this.ram = ram 
//     this.armazenamento = armazenamento

//     this.ligar = function(){
//         console.log(`O ${this.processador} está funcionando.`)
//     }
//     this.mostrarEspecificacoes = function(){
//         return`
//         processador: ${this.processador}
//         gpu: ${this.gpu}
//         ram: ${this.ram}
//         armazenamento: ${this.armazenamento}
//         `
//     }
// }
// let pc = new computador('i9', 'RTX4090', '16GB', '500GB SSD')
// console.log(pc.mostrarEspecificacoes())

// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }
// let jogo1 = jogos('Final Fantasy', 'RPG', '1997', 'Square Soft', () => console.log('Jogando'))
// console.log(jogo1.jogar())

// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }
// let jogo1 = jogos('Final Fantasy', 'RPG', '1997', 'Square Soft', () => console.log('Jogando'))
// for(let chave in jogo1){
//     console.log(`${chave}: ${jogo1[chave]}`)
// }

const jogadores = ['Pele', 'CR7', 'Messi']
for(let jogador of jogadores){
    console.log(jogador)
}
jogadores.forEach((valor, indice) => {
    console.log(`O índice é: ${indice} e o valor é: ${valor}`)
})

// const NOME = 'Silva'
// for(let char of NOME){
//     console.log(char)
// }
// for(let jogo of Object.keys(jogo1)){
//     console.log(jogo1[jogo])
// }


//integrar objetos criados com for in e for of