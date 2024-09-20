//Dado um objeto quadrinho com várias propriedades, crie uma
//função que retorna um novo objeto contendo apenas as propriedades cujo
//valor seja maior que um valor específico. Use for in para filtrar as
//propriedades.

const quadrinho = {
    nome: 'Turma da Monica',
    capa: 'Dura',
    paginas: 230,
    edicao: 5,
    vendas: 28000,
    anoDeLancamento: 2005
  }
  
  function filtro(obj, minimo){
    const novoObj = {}
  
    for (let propriedade in obj){
      if (typeof obj[propriedade] === 'number' && obj[propriedade] > minimo){
        novoObj[propriedade] = obj[propriedade]
      }
    }
    return novoObj
  }
  
  const espec = filtro(quadrinho, 2000)
  console.log(espec)

