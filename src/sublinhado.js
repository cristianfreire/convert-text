function sublinhado() {
    var txt = document.getElementById("textarea").value.trim().split(""),
        code = ""
    var result = ""
    for (var lk = 0; lk <= txt.length; lk++) {
        result += txt[lk] + "̲"
    }

    result = result.split("undefined")
    document.getElementById("result").value = result.join("")
}