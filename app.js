let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio.'

function Console(){
    console.log('O botão foi clicado')
}

function Alerta(){
    console.log('Eu amo JS')
}

function cidade(){
    let cidade = prompt('Fale uma cidade do Brasil.')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function somar(){
    let valor1 = parseInt(prompt('digite seu Primeiro valor'))
    let valor2 = parseInt(prompt('digite o seu Segundo valor'))
    let Calculo = (valor1 + valor2)
    alert(`Somando os numero deu ` + Calculo)
}