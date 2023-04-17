const { soma, subtracao, multiplicacao, divisao } = require("./calculadora")

it("deve receber 10 e 20 e efetuar SOMA retornar 30", () => {
    //GIVEN - Dado que (configuração do teu cenário)
    const pNumeroUm = 10    
    const pNumeroDois = 20
    
    //WHEN = Quando (o que quero testar)
    const resultado = soma(pNumeroUm, pNumeroDois)

    //THEN - Então quero que aconteça isto (espero isto)
    expect(resultado).toBe(30) //expect(valor que minha função clculou) .toBe(valor a comparar com o resultado da função)
})


it("deve receber 10 e 20 e efetuar SUBTRAÇÃO retornar -10", () => {
    //GIVEN - Dado que (configuração do teu cenário)
    const pNumeroUm = 10    
    const pNumeroDois = 20
    
    //WHEN = Quando (o que quero testar)
    const resultado = subtracao(pNumeroUm, pNumeroDois)

    //THEN - Então quero que aconteça isto (espero isto)
    expect(resultado).toBe(-10)
})

it("deve receber 10 e 20 e efetuar MULTIPLICAÇÃO retornar 200", () => {
    //GIVEN - Dado que (configuração do teu cenário)
    const pNumeroUm = 10    
    const pNumeroDois = 20
    
    //WHEN = Quando (o que quero testar)
    const resultado = multiplicacao(pNumeroUm, pNumeroDois)

    //THEN - Então quero que aconteça isto (espero isto)
    expect(resultado).toBe(200)
})

it("deve receber 10 e 20 e efetuar DIVISÃO retornar 0.5", () => {
    //GIVEN - Dado que (configuração do teu cenário)
    const pNumeroUm = 10    
    const pNumeroDois = 20
    
    //WHEN = Quando (o que quero testar)
    const resultado = divisao(pNumeroUm, pNumeroDois)

    //THEN - Então quero que aconteça isto (espero isto)
    expect(resultado).toBe(0.5)
})


it("deve receber 10 e 0 e efetuar DIVISÃO retornar erro -101", () => {
    //GIVEN - Dado que (configuração do teu cenário)
    const pNumeroUm = 10    
    const pNumeroDois = 0
    
    //WHEN = Quando (o que quero testar)
    const resultado = divisao(pNumeroUm, pNumeroDois)

    //THEN - Então quero que aconteça isto (espero isto)
    expect(resultado).toBe(-101)
})