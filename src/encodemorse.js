"use strict";
var
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\n"],
    symbols = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "/", "\n"];


function testem() {
    var txt = document.getElementById("textarea").value.trim().toUpperCase().split(""),
        code = "";
    for (var i in txt) {
        code += symbols[letters.indexOf(txt[i])] + " ";
    }
    code = code.split("undefined")
    document.getElementById("morse").value = code;
}