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
    letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ".", ",", ":", ";", " ", "!", ")", "(", "*", "&", "%", "#", "@", ">", "<", "=", "[", "]", "{", "}", "?", "/", "°", "-", "+", "'", '"'],
    symbols = ["ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ", "ｇ", "ｈ", "ｉ", "ｊ", "ｋ", "ｌ", "ｍ", "ｎ", "ｏ", "ｐ", "ｑ", "ｒ", "ｓ", "ｔ", "ｕ", "ｖ", "ｗ", "ｘ", "ｙ", "ｚ", "０", "１", "２", "３", "４", "５", "６", "７", "８", "９", "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ", "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ", "Ｐ", "Ｑ", "Ｒ", "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "Ｘ", "Ｙ", "Ｚ", "。", "、", "：", "；", " ", "！", "）", "（", "＊", "＆", "％", "＃", "＠", "〉", "〈", "＝", "［", "］", "｛", "｝", "？", "／", "°", "ー", "＋", "'", '゛'];



function tv() {
    var txt = document.getElementById("textarea").value.trim().split(""),
        code = "";
    for (var i in txt) {
        code += symbols[letters.indexOf(txt[i])] + " ";
    }
    var conv = code.split("undefined")
    document.getElementById("result").value = conv

}