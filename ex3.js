//Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let grade = 4
if (grade >= 0 && grade < 5){
    console.log('Aluno reprovado.')
} else if(grade >= 5 && grade < 6){
    console.log('Aluno de recuperação.')
} else if(grade >= 6 && grade < 10){
    console.log('Aluno aprovado.')
} else {
    console.log('Insira uma nota válida.')
}