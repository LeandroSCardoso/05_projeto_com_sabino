function ComparaVetor(vetor1, vetor2) {
    // Verifica se os vetores têm o mesmo comprimento
    if (vetor1.length !== vetor2.length) {
      return false;
    }
  
    // Percorre cada elemento dos vetores e compara-os
    for (let i = 0; i < vetor1.length; i++) {
      if (vetor1[i] !== vetor2[i]) {
        return false;
      }
    }
  
    // Se todos os elementos são iguais, os vetores são iguais
    return true;
  }

function encontrarAluno(nomeAluno, listaNomeAlunos) {
    //recebe 2 parametros(nomeAluno,listaNomeAlunos)
    //retorna um texto dizendo se encotrou o valor dentro do vetor "encontrei" ou "não encontrei"
    for (let posAluno = 0; posAluno < listaNomeAlunos.length; posAluno++) {
        if (listaNomeAlunos[posAluno] == nomeAluno) {
            //se achou no vetor retorna
            return "encontrei"
        }
    }
    //se não achou no vetor retorna
    return "não encontrei"
}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
    //recebe 1 valor e 1 vetor como parametros(nomeAluno,ListaNomeAlunos)

    //fazendo com .includes funcina mas vai verificar mais vezes gerando mais processamento
    const nomesEncontrados = nomeAluno.filter(function(nome) {
        for (let i = 0; i < listaNomeAlunos.length; i++) {
          if (nome === listaNomeAlunos[i]) {
            return true;
          }
        }
        return false;
      });

      
    if (ComparaVetor(nomesEncontrados,nomeAluno)) {
        return nomesEncontrados
    } else {
        return []
    }
}


function construirAluno(nomeAluno, idadeAluno) {
    const dadosAluno = [
        { nome: nomeAluno, idade: idadeAluno }
    ]
    return dadosAluno
}

module.exports = { encontrarAluno, filtrarAlunos, construirAluno }