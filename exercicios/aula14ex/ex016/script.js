var inicio = document.getElementById(Number('txtin'))
var fim = document.getElementById(Number('txtfim'))
var passo = document.getElementById(Number('txtpas'))

function contar() {
for (inicio = 0; inicio <= fim; inicio = inicio + passo) {
    console.log(`${inicio}`)
}
}