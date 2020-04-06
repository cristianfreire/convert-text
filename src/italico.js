function italico() {
    "use strict";
    var
        letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", ",", ":", ";", " ", "!", ")", "(", "*", "&", "%", "#", "@", ">", "<", "=", "[", "]", "{", "}", "?", "/", "°", "-", "+", "'", '"', "á", "é", "í", "ó", "ú", "à", "è", "ì", "ò", "ù"],
        italic = ["𝘢", "𝘣", "𝘤", "𝘥", "𝘦", "𝘧", "𝘨", "𝘩", "𝘪", "𝘫", "𝘬", "𝘭", "𝘮", "𝘯", "𝘰", "𝘱", "𝘲", "𝘳", "𝘴", "𝘵", "𝘶", "𝘷", "𝘸", "𝘹", "𝘺", "𝘻", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "𝘈", "𝘉", "𝘊", "𝘋", "𝘌", "𝘍", "𝘎", "𝘏", "𝘐", "𝘑", "𝘒", "𝘓", "𝘔", "𝘕", "𝘖", "𝘗", "𝘘", "𝘙", "𝘚", "𝘛", "𝘜", "𝘝", "𝘞", "𝘟", "𝘠", "𝘡", ".", ",", ":", ";", " ", "!", ")", "(", "*", "&", "%", "#", "@", ">", "<", "=", "[", "]", "{", "}", "?", "/", "°", "-", "+", "'", '"', "á", "é", "í", "ó", "ú", "à", "è", "ì", "ò", "ù"];
    var txt = document.getElementById("textarea").value.trim().split(""),
        code = ""

    for (var i in txt) {
        code += italic[letters.indexOf(txt[i])]
    }
    var conv = code.split("undefined")
    document.getElementById("result").value = conv
}