function mod(n) {
    var textOrigin = document.getElementById("textarea").value

    if (n == 1) {
        document.getElementById("textarea").value = textOrigin.toLowerCase()
    }else if (n == 2){
        document.getElementById("textarea").value = textOrigin.toUpperCase()
    }else if (n == 3){
        var tam = textOrigin.length
        var alternado = ""

        console.log(tam)

        for (var l = 0; l < tam; l++){
            if (l % 2 == 0){
              document.write(textOrigin[l].toUpperCase())
            }else {
              document.write(textOrigin[l].toLowerCase()  )
            }
            
        }
        
        console.log(textOrigin)

        //document.getElementById("textarea").value = textOrigin
    }
}

