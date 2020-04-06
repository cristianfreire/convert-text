let copiarTexto = () => {
    //captura o elemento input
    const inputTest = document.querySelector("#textarea")

    //seleciona todo o texto do elemento
    inputTest.select()
        //executa o comando copy
        //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy')

    document.getElementById("copiado").hidden = false


    setTimeout("esconder()", 3000)

}

let copiarTextoii = () => {
    //captura o elemento input
    const inputTest = document.querySelector("#binario")

    //seleciona todo o texto do elemento
    inputTest.select()
        //executa o comando copy
        //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy')

    document.getElementById("copiado").hidden = false


    setTimeout("esconder()", 3000)

}

let copiarTextoiii = () => {
    //captura o elemento input
    const inputTest = document.querySelector("#result")

    //seleciona todo o texto do elemento
    inputTest.select()
        //executa o comando copy
        //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy')

    document.getElementById("copiado").hidden = false


    setTimeout("esconder()", 3000)

}

let copiarTextoiv = () => {
    //captura o elemento input
    const inputTest = document.querySelector("#morse")

    //seleciona todo o texto do elemento
    inputTest.select()
        //executa o comando copy
        //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy')

    document.getElementById("copiado").hidden = false


    setTimeout("esconder()", 3000)

}

function esconder() {
    document.getElementById("copiado").hidden = true
}