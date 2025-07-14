const prompt = require('prompt-sync')();

const perguntas = [
    {
        pergunta: "Quantos pés tem uma pessoa? ",
        opcoes: " a) 2   b) 1  c) 2,5 ",
        resposta: "a"
    },
    {
        pergunta: "Qual a capital do Brasil?",
        opcoes: "a) São Paulo  b) Brasília   c) Rio de Janeiro",
        resposta: "b"
    },
    {
        pergunta: "Quem descobriu o Brasil?",
        opcoes: "a) Pedro Álvares Cabral   b) Manoel Gomes  c) Gustavo Lima",
        resposta: "a"
    },
    {
        pergunta: "Quanto é 12 x 12?",
        opcoes: "a) 124  b) 144   c) 122",
        resposta: "b"
    },
    {
        pergunta: "Qual planeta é conhecido como planeta vermelho?",
        opcoes: "a) Marte   b) Júpiter  c) Vênus",
        resposta: "a"
    },
    {
        pergunta: "Em que continente está o Brasil?",
        opcoes: "a) América do Sul   b) África  c) Europa",
        resposta: "a"
    },
    {
        pergunta: "Quantos segundos tem um minuto?",
        opcoes: "a) 120   b) 100  c) 60",
        resposta: "c"
    },
    {
        pergunta: "Qual animal é conhecido como rei da selva?",
        opcoes: "a) Tigre  b) Leão   c) Elefante",
        resposta: "b"
    },
    {
        pergunta: "Quem escreveu 'Dom Casmurro'?",
        opcoes: "a) Machado de Assis   b) Monteiro Lobato   c) Paulo Coelho",
        resposta: "a"
    },
    {
        pergunta: "Quantos lados tem um hexágono?",
        opcoes: "a) 4   b) 8  c) 6",
        resposta: "c"
    },
    {
        pergunta: "O que é H2O?",
        opcoes: "a) Gás carbônico  b) Água   c) Oxigênio",
        resposta: "b"
    },
    {
        pergunta: "Qual o maior planeta do sistema solar?",
        opcoes: "a) Saturno  b) Júpiter   c) Marte",
        resposta: "b"
    },
    {
        pergunta: "Quem pintou a Mona Lisa?",
        opcoes: "a) Picasso   b) Leonardo da Vinci    c) Van Gogh",
        resposta: "b"
    },
    {
        pergunta: "O que significa 'www'?",
        opcoes: "a) World Web Wave   b) World Wide Web   c) Web World Window",
        resposta: "b"
    },
    {
        pergunta: "Qual é a cor da clorofila?",
        opcoes: "a) Verde   b) Azul  c) Amarela",
        resposta: "a"
    },
]

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