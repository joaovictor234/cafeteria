
/*constantes html*/
const opcoes = [[1, "Americano", 8.0], [2, "Cheesburguer", 3.0], [3, "Misto quente", 4.0], [4, "Queijo quente", 4.5], [5, "Bauru", 6.0]]
let listaPedidos = document.querySelector('.lista-pedidos')
let total = document.querySelector('.total-resultados')

/*contadores*/
let numPedido = 0
let numPedidosTotal = 0
let numValorTotal = 0

/*cria os pedidos em uma lista*/
const fazPedido = (evento) => {
    evento.preventDefault()
    let numero = document.querySelector('#pedido-numero')
    let quantidade = document.querySelector('#pedido-quantidade')
    let num = parseInt(numero.value)
    let qtd = parseInt(quantidade.value)
    let pedido
    numPedido++

    for(let i = 1; i <= 5; i++){
        if(num === i) {
            pedido = `<div class="lista-pedido"><p class="pedido-item">Pedido n°${numPedido}</p><p class="lista-item">Código: ${opcoes[i-1][0]}</p><p class="lista-item">Produto: ${opcoes[i-1][1]}</p><p class="lista-item">Preço: R$ ${(opcoes[i-1][2]).toFixed(2)}</p><p class="lista-item">quantidade: ${qtd}</p><p class="lista-item">Valor total: R$ ${((opcoes[i-1][2])*qtd).toFixed(2)}</p></div>`
            numPedidosTotal += qtd
            numValorTotal += (opcoes[i-1][2])*qtd
        }
    }
    listaPedidos.innerHTML += pedido
}

/*função para gerar o html com os resultados*/
const totalResultados = () => {
    let resultadoDiario = `<p class="total-item">Números de pedidos durante o dia: ${numPedidosTotal}</p><p class="total-item">Valor total arrecadado: R$ ${numValorTotal.toFixed(2)}</p>`
    total.innerHTML = resultadoDiario
}

/*botoes*/
/*botao para fazer o pedido*/
const botao = document.querySelector('.pedido-botao')
botao.addEventListener('click', fazPedido)
/*botao para exibir os resultados*/
const botaoResultado = document.querySelector('.totao-botao')
botao.addEventListener('click', totalResultados)