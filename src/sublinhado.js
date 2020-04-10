function sublinhado() {
    var txt = document.getElementById("textarea").value.trim().split(""),
        result = ""
    var result = ""
    for (var lk = 0; lk <= txt.length; lk++) {
        result += txt[lk] + "̲"
    }


    result = result.split("undefined")
    if (txt.length != 0) {
        document.getElementById("result").value = result.join("")
    } else {
        document.getElementById("result").value = ""

    }
}