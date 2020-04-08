function contador() {
    characteres = document.getElementById("textarea").value

    document.getElementById("char").innerHTML = "Characteres: " + characteres.length
    document.getElementById("words").innerHTML = " Palavras: " + characteres.split(" ").length
    document.getElementById("lines").innerHTML = " Linhas: " + characteres.split("\n").length

    if (characteres.length == 0) {
        document.getElementById("words").innerHTML = " Palavras: " + 0
        document.getElementById('lines').innerHTML = " Linhas: " + 0
    }



}