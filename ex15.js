//Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

let a = 0
let b = 1

for(count = 0; count < 10 ; count++){
    console.log(b)
    let c = a + b 
    a = b 
    b = c    
}