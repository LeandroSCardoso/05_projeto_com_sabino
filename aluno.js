function encontrarAluno(nomeAluno, listaNomeAlunos) {
    //recebe 2 parametros(nomeAluno,listaNomeAlunos)
    //retorna um texto dizendo se encotrou o valor dentro do vetor "encontrei" ou "não encontrei"
/*
    for (let posAluno = 0; posAluno < listaNomeAlunos.length; posAluno++) {
        if (listaNomeAlunos[posAluno] == nomeAluno) {
            //se achou no vetor retorna
            return "encontrei"
        }
    }
    //se não achou no vetor retorna
    return "não encontrei" */


    //fazendo agora com o metodo FIND de array
    const resultadoFinal = listaNomeAlunos.find(function(AlunoAtual/* indice que criei */){
      return AlunoAtual == nomeAluno
    })

    
    if (resultadoFinal !== undefined) {
      return 'encontrei'  
    } else {
      return 'não encontrei'
    }
       
}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
    //recebe 1 valor e 1 vetor como parametros(nomeAluno,ListaNomeAlunos)
    return listaNomeAlunos.filter((aluno) => aluno == nomeAluno)

}


function construirAluno(nomeAluno, idadeAluno) {
    const dadosAluno = [
        { nome: nomeAluno, idade: idadeAluno }
    ]
    return dadosAluno
}

module.exports = { encontrarAluno, filtrarAlunos, construirAluno }