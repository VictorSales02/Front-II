let aluno = {
    nome: "Alicia Oliveira",
    idade: 20,
    curso: "Terapia Ocupacional",
    notas: [9.4, 8.5, 7.2]
  };

  console.log(`Nome do aluno: ${aluno.nome}`);
  console.log(`Primeira nota: ${aluno.notas[0]}`);
  
  aluno.idade = 24;
  aluno.notas.push(9.5);
  
  console.log(aluno);
 
  let alunoJSON = JSON.stringify(aluno);
  console.log("Objeto convertido em string JSON:", alunoJSON);
  
  let alunoObj = JSON.parse(alunoJSON);
  console.log("Objeto convertido de volta:", alunoObj);

  for (let propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`);
  }
  
  let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
  let media = soma / aluno.notas.length;
  console.log(`Média das notas: ${media.toFixed(2)}`);
  
  aluno.endereco = {
    rua: "Professora Carmem",
    cidade: "João Pessoa",
    estado: "PB"
  };
  console.log(aluno);
  
  console.log(`Cidade: ${aluno.endereco.cidade}`);
  console.log(`Estado: ${aluno.endereco.estado}`);
  
  let alunos = [
    {
      nome: "Alicia Oliveira",
      idade: 20,
      curso: "Terapia Ocupacional",
      notas: [7.5, 8.0, 9.5],
      endereco: { rua: "Professora Carmem", cidade: "João Pessoa", estado: "PB" }
    },
    {
      nome: "Dennynson Scheydt",
      idade: 18,
      curso: "Ciência da Dados e Inteligência Artificial",
      notas: [9.0, 9.5, 8.0],
      endereco: { rua: "N lembro KKKKKKKK", cidade: "Itabaiana", estado: "PB" }
    },
    {
      nome: "Nicolas Rodrigues",
      idade: 25,
      curso: "Ciência da Computação",
      notas: [8.0, 7.5, 8.3],
      endereco: { rua: "Rua n sei oq n sei oq lá", cidade: "Cabedelo", estado: "PB" }
    }
  ];
  
  console.log(alunos);
  
  let alunosComMediaAlta = alunos.filter(aluno => {
    let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    return media > 8;
  });
  
  console.log("Alunos com média maior que 8:", alunosComMediaAlta);