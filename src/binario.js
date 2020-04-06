function fadeIn(elem) {
    "use strict";
    var i = 0;
    var inte = setInterval(function() {
        if (i >= 1.2) {
            clearInterval(inte);
        } else {
            i++;
        }
    }, 100);
}


"use strict";
var
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", ",", ":", ";", " "],
    symbols = ["01100001", "01100010", "01100011", "01100100", "01100101", "01100110", "01100111", "01101000", "01101001", "01101010", "01101011", "01101100", "01101101", "01101110", "01101111", "01110000", "01110001", "01110010", "01110011", "01110100", "01110101", "01110110", "01110111", "01111000", "01111001", "01111010", "00110000", "00110001", "00110010", "00110011", "00110100", "00110101", "00110110", "00110111", "00111000", "00111001", "01000001", "01000010", "01000011", "01000100", "01000101", "01000110", "01000111", "01001000", "01001001", "01001010", "01001011", "01001100", "01001101", "01001110", "01001111", "01010000", "01010001", "01010010", "01010011", "01010100", "01010100", "01010110", "01010111", "01011000", "01011001", "01011010", "00101110", "00101100", "00111010", "00111011", "00100000"];



function textobin() {
    var txt = document.getElementById("textarea").value.trim().split(""),
        code = "";
    for (var i in txt) {
        code += symbols[letters.indexOf(txt[i])] + " ";
    }
    var conv = code.split("undefined")
    document.getElementById("binario").value = conv

}