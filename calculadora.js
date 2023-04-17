function soma(pNumeroUm,pNumeroDois) {
    return pNumeroUm + pNumeroDois
}

function subtracao(pNumeroUm,pNumeroDois) {
    return pNumeroUm - pNumeroDois   
}

function multiplicacao(pNumeroUm,pNumeroDois) {
    return pNumeroUm * pNumeroDois   
}

function divisao(pNumeroUm,pNumeroDois) {

  const resultado = pNumeroUm / pNumeroDois 

  if (pNumeroDois === 0) {
    return -101   
  } 
    return resultado  
}

module.exports = { soma, subtracao, multiplicacao, divisao }