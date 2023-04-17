const { soma, subtracao, multiplicacao, divisao } = require("./calculadora");

console.log("== Script principal ==")


//chamando a função
clicDoBotao();

//click botão
function clicDoBotao() {
    console.log("o botão foi clicado")

    //pegar os values
    const numeroUm = 10
    const numeroDois = 20

    //processar
    const resultSoma = soma(numeroUm,numeroDois)
    const resultSubtrai = subtracao(numeroUm,numeroDois)
    const resultMultiplica = multiplicacao(numeroUm,numeroDois)
    const resultDivide = divisao(numeroUm,numeroDois)


    //Mostrar na tela
    console.log(resultSoma)
    console.log(resultSubtrai)
    console.log(resultMultiplica)
    console.log(resultDivide)
    
}