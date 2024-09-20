//Crie um array de objetos filmes, onde cada filme tem titulo,
//diretor, e anoLancamento. Use forEach para criar um novo array
//contendo apenas os títulos dos filmes.

const filmes = [
    {titulo: 'Speed Racer', diretor: 'Irmaõs Wachowski', anoLancamento: 2008},
    {titulo: 'Carros', diretor: 'John Lasseter', anoLancamento: 2006},
    {titulo: 'Madagascar', diretor: 'Tom McGrath & Eric Darnell', anoLancamento: 2005},
    {titulo: 'Shrek 2', diretor: 'Andrew Adamson, Conrad Vernon & Kelly Asbury', anoLancamento: 2004},
]

const onlyTitles = []

filmes.forEach((movie) => {
    onlyTitles.push(movie.titulo)
})

console.log(onlyTitles)