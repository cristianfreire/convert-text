function mod(n) {
    var textOrigin = document.getElementById("textarea").value  //Texto original dentro da variável
    var tam = textOrigin.length //Tamanho de characteres

    //All in LowerCase
    if (n == 1) {
        document.getElementById("textarea").value = textOrigin.toLowerCase()

        //All in UpperCase
    } else if (n == 2) {
        document.getElementById("textarea").value = textOrigin.toUpperCase()

        //AlTeRnAtInG
    } else if (n == 3) {
        var AlT = textOrigin.toLowerCase().split("")
        for (var i = 0; i < tam; i += 2) {
            AlT[i] = AlT[i].toUpperCase()
        }
        document.getElementById("textarea").value = AlT.join("")

        //aLtErNaTiNg 
    } else if (n == 4) {
        var aLt = textOrigin.toUpperCase().split("")
        for (var i = 0; i < tam; i += 2) {
            aLt[i] = aLt[i].toLowerCase()
        }
        document.getElementById("textarea").value = aLt.join("")

        //Primeire letra
    } else if (n == 5) {
        function primeiraLetraMaiuscula(Frase) {
            var splitFrase = textOrigin.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
            return splitFrase

        }
        var result = primeiraLetraMaiuscula()
        document.getElementById("textarea").value = result
    }


}
