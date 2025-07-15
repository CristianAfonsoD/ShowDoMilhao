const prompt = require('prompt-sync')();

const perguntas = [
    {
        pergunta: "Qual é o maior país do mundo em extensão territorial?",
        opcoes: "a) Brasil   b) Canadá   c) Rússia",
        resposta: "c"
    },
    {
        pergunta: "Onde fica localizada a Cordilheira dos Andes?",
        opcoes: "a) América do Sul   b) América Central   c) América do Norte",
        resposta: "a"
    },
    {
        pergunta: "Qual é o maior oceano do planeta?",
        opcoes: "a) Atlântico   b) Índico   c) Pacífico",
        resposta: "c"
    },
    {
        pergunta: "Em que ano o Brasil foi descoberto?",
        opcoes: "a) 1492   b) 1500   c) 1822",
        resposta: "b"
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        opcoes: "a) Getúlio Vargas   b) Marechal Deodoro   c) Juscelino Kubitschek",
        resposta: "b"
    },
    {
        pergunta: "A Revolução Francesa aconteceu em que século?",
        opcoes: "a) Século XVIII   b) Século XIX   c) Século XVII",
        resposta: "a"
    },
    {
        pergunta: "Quanto é 7 x 8?",
        opcoes: "a) 54   b) 56   c) 58",
        resposta: "b"
    },
    {
        pergunta: "Qual é a raiz quadrada de 64?",
        opcoes: "a) 6   b) 8   c) 10",
        resposta: "b"
    },
    {
        pergunta: "Qual o resultado de (3 + 2) x 4?",
        opcoes: "a) 20   b) 14   c) 18",
        resposta: "a"
    },
    {
        pergunta: "Qual palavra está escrita corretamente?",
        opcoes: "a) Exceção   b) Exessão   c) Excessão",
        resposta: "a"
    },
    {
        pergunta: "Qual é o plural de 'cidadão'?",
        opcoes: "a) Cidadões   b) Cidadãos   c) Cidades",
        resposta: "b"
    },
    {
        pergunta: "Qual classe gramatical da palavra 'felizmente'?",
        opcoes: "a) Verbo   b) Adjetivo   c) Advérbio",
        resposta: "c"
    },
    {
        pergunta: "Qual é o metal usado na fabricação de latas de refrigerante?",
        opcoes: "a) Ferro   b) Alumínio   c) Zinco",
        resposta: "b"
    },
    {
        pergunta: "Qual órgão do corpo humano é responsável por bombear o sangue?",
        opcoes: "a) Fígado   b) Coração   c) Pulmão",
        resposta: "b"
    },
    {
        pergunta: "Quem é o autor de 'O Pequeno Príncipe'?",
        opcoes: "a) J.K. Rowling   b) Antoine de Saint-Exupéry   c) Monteiro Lobato",
        resposta: "b"
    }
];


const premios = [10000, 20000, 30000, 100000, 150000, 690000]

function showDoMilhao(){
    let nome = prompt("Digite seu nome: ");
    let premio = 0;
    let rodadaAtual = 0;
    const totalRodadas = 6;
    const perguntasSelecionadas = perguntas.sort(() => 0.5 - Math.random()).slice(0, totalRodadas);

    while (rodadaAtual < totalRodadas){
        const pergunta = perguntasSelecionadas[rodadaAtual]
        const valorRodada = premios[rodadaAtual]

        console.log('______________________________')
        console.log(`Jogador: ${nome}`)
        console.log(`\nRodada ${rodadaAtual + 1}`)
        console.log(`Valendo R$${valorRodada},00`)
        console.log(`Você ganha R$${premio},00 se você parar`)
        if (rodadaAtual == 0){
            console.log('Você fica com R$ 0,00 se errar.')
        } else {
            console.log(`Você fica com R$${premio - (premios[rodadaAtual] / 2)} se errar.`)
        }
        console.log(`${perguntasSelecionadas[rodadaAtual].pergunta}`)
        console.log(`${perguntasSelecionadas[rodadaAtual].opcoes}`)

        let resposta = prompt('Digite a letra referente a resposta ou p) para parar: ')

        if (resposta == perguntasSelecionadas[rodadaAtual].resposta){
            console.log("\nA resposta está correta!")
            premio += valorRodada
        } else if(resposta == "p") {

        } else {
            console.log('\nA resposta está errada!')
            console.log(`A resposta correta era a alternativa ${perguntasSelecionadas[rodadaAtual].resposta})`)
            console.log(`Você chegou até a ${rodadaAtual + 1}º rodada. `)
            console.log(`Faltavam apenas ${totalRodadas - rodadaAtual - 1} questões!`)
            premio = premio - (premios[rodadaAtual - 1] / 2)
            break;
        }
        rodadaAtual++
    }
    console.log(`Parabens ${nome}, você conseguiu.`)
    console.log(`Você conseguiu ganhar R$${premio},00`)
    const jogarNovamente = prompt("\n\nPrecione enter para jogar novamente ou qualquer tecla para sair: ")
    if (jogarNovamente === ""){
        showDoMilhao()
    } else{
        console.log("Saindo...")
    }

}
showDoMilhao()