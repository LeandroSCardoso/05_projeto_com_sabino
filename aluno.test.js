const { encontrarAluno, filtrarAlunos, construirAluno } = require("./aluno")


describe("Modulo aluno", () => {

    describe("encontrarAluno", () => {
        it("retorna um texto dizendo se encotrou o valor dentro do vetor 'encontrei' ou 'não encontrei'", () => {
            //GIVEN - Dado que (configuração do teu cenário)
            const nomeAluno = 'leoncio'    
            const listaNomeAlunos = ['andre','miguel','leoncio','fernando']
            
            //WHEN = Quando (o que quero testar)
            const resultado = encontrarAluno(nomeAluno, listaNomeAlunos)

            //THEN - Então quero que aconteça isto (espero isto)
            expect(resultado).toBe("encontrei") 
        })    
   
    })


    describe("filtrarAlunos", () => {
        it("retorna o valor 'sabino' e 'cicero' caso encontre no vetor", () => {
            //GIVEN - Dado que (configuração do teu cenário)
            const nomeAluno = ['sabino','cicero']    
            const listaNomeAlunos = ['andre','miguel','sabino','fernando','cicero','catatau','zezim']
            
            //WHEN = Quando (o que quero testar)
            const resultado = filtrarAlunos(nomeAluno, listaNomeAlunos)

            //THEN - Então quero que aconteça isto (espero isto)
            expect(resultado).toEqual(['sabino','cicero']) 
        })    

        it("retorna um vetor vazio caso não encontre 'sabino' e 'cicero'", () => {
            //GIVEN - Dado que (configuração do teu cenário)
            const nomeAluno = ['sabino','cicero']    
            const listaNomeAlunos = ['andre','miguel','sabino','fernando','lalala','catatau','zezim']
            
            //WHEN = Quando (o que quero testar)
            const resultado = filtrarAlunos(nomeAluno, listaNomeAlunos)

            //THEN - Então quero que aconteça isto (espero isto)
            expect(resultado).toEqual([]) 
        })    

    })
    
    describe("construirAluno", () => {
        it("retorna um objeto no seguinte padrão(nome: <nomeAluno>, idade: <idadeAluno>)", () => {
            //GIVEN - Dado que (configuração do teu cenário)
            const nome = 'Zézim'    
            const idade = 37
            
            //WHEN = Quando (o que quero testar)
            const resultado = construirAluno(nome, idade)

            //THEN - Então quero que aconteça isto (espero isto)
            expect(resultado).toEqual([ { nome: 'Zézim', idade: 37 } ]) 
        })    


    })    

})