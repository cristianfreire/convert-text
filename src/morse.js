function encodedecode() {
    var texto = document.getElementById("morse").value
    var ref = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '-----': '0',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        "/": " ",
        "-·-·--": "!",
        "·-·-·-": ".",
        "--··--": ",",
    }


    var messageConverted = [];

    texto.split("   ").map(function(word) {
        word.split(" ").map(function(letter) {
            messageConverted.push(ref[letter]);
        });
        messageConverted.push(" ");
    });

    document.getElementById("textarea").value = messageConverted.join("")

}