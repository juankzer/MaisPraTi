/* Ex: calcular  a média de notas os alunos de um professor e verificar se está acima da média
de aprovação. Use um loop for in para iterar sobre as propriedades dentro de professor.grades.
Imprima se o professor está acima da média de aprovação (6.0 será a média)
*/
// let professor = {
//     name: 'Tony',
//     subject: 'Math',
//     grades: {
//         studant1: 10.0,
//         studant2: 6.0,
//         studant3: 8.0
//     }
// }
// let sumGrades = 0
// let numberOfStudants = 0

// for(let studant in professor.grades){
//     sumGrades += professor.grades[studant]
//     numberOfStudants++
// }

// let average = sumGrades / numberOfStudants

// console.log(`A nota média da turma é: ${average.toFixed(2)}`)
// console.log(average >= 6
//     ? `${professor.name} está acima da média.`
//     : `${professor.name} está abaixo da média.`
// )

/* Ex: Verificar e listas livros publicados antes de 2000
Use um loop for of para iterar sobre o array biblioteca
Imprima o titulo e o ano dos livros que atendam a essa condição
*/
// const library = [
//     {title: 'O Hobbit', author: 'JRR Tolkien', year: 1925},
//     {title: 'Harry Potter', author: 'JK Rowling', year: 1999},
//     {title: 'Nárnia', author: 'CS Lewis', year: 2010}
// ]

// for(let book of library){
//     if(book.year < 2000){
//         console.log(`O livro ${book.title}, escrito por ${book.author} foi publicado em ${book.year}.`)
//     }
// }

/*Ex: Contar a quantidade de filmes por gênero
Use o método forEach para iterar sobre o array filmes.
Para cada filme, verifique se o gênero já existe no objeto de contagem.
Se Existir, incremente a contagem, se não, adicione o gênero objeto com a contagem inicial de 1.
*/
const movies = [
    {title: 'Tropa de Elite', genre: 'Militar'},
    {title: 'Top Gun', genre: 'Ação'},
    {title: 'Senhor dos Aneis', genre: 'Aventura'},
    {title: 'Interestelar', genre: 'Sci-Fi'},
    {title: 'Vingadores', genre: 'Herois'},
    {title: 'Homem Aranha', genre: 'Herois'},
]
let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})
for(let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}.`)
}
