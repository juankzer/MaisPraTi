//Crie um objeto empresa com uma propriedade departamentos,
//que é um array de objetos. Cada departamento tem um nome e uma lista
//de funcionarios. Use for in e for of para iterar sobre os departamentos
//e seus funcionários, exibindo o nome de cada funcionário junto com o
//departamento ao qual pertence.

const empresa = {
    departamentos: [
      {nome: "Vendas", funcionarios: [
          {nome: "Rafaela", cargo: "Estagiária"},
          {nome: "Anderson", cargo: "Supervisor de Vendas"},
          {nome: "Stela", cargo: "Supervisora de Vendas no Exterior"}
        ]
      },
      {nome: "Manutenção", funcionarios: [
          {nome: "Carlos", cargo: "Soldador"},
          {nome: "Eduardo", cargo: "Mecânico"}
        ]
      },
      { nome: "Expedição", funcionarios: [
          {nome: "Giovana", cargo: "Supervisora da Expedição"},
          {nome: "Marcelo", cargo: "Inventário"}
        ]
      }
    ]
  }
  
  for (const lista in empresa.departamentos) {
    const departamento = empresa.departamentos[lista]
    console.log(`Departamento: ${departamento.nome}.`)
  
    for (const cont of departamento.funcionarios) {
      console.log(`Funcionário ${cont.nome} atualmente ocupa o cargo de ${cont.cargo}.`)
    }
  }