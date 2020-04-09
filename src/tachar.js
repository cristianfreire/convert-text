function sublinhado() {
    var txt = document.getElementById("textarea").value.trim().split(""),
        result = ""
    var result = ""
    for (var lk = 0; lk <= txt.length; lk++) {
        result += txt[lk] + "̶"
    }

    result = result.split("undefined")
    document.getElementById("result").value = result.join("")

    if (txt.length == "") {
        document.getElementById("result").value = ""
    }
}